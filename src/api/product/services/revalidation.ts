import type { Core } from '@strapi/strapi';

declare global {
  var strapi: Core.Strapi;
}

type RevalidationType = 'product' | 'article' | 'page';

type RevalidationResult = {
  slug?: string | null;
  documentId?: string | null;
  id?: string | number | null;
};

type RevalidationPayload = {
  type: RevalidationType;
  slug?: string;
  id?: string;
};

const REQUEST_TIMEOUT_MS = 8000;
const MAX_ATTEMPTS = 3;

const wait = (milliseconds: number) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

const isAbortError = (error: unknown) =>
  error instanceof Error && error.name === 'AbortError';

const sendRevalidation = async (
  url: string,
  secret: string,
  payload: RevalidationPayload,
) => {
  for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt += 1) {
    const controller = new AbortController();
    const timeout = setTimeout(
      () => controller.abort(),
      REQUEST_TIMEOUT_MS,
    );

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-revalidate-secret': secret,
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      if (response.ok || response.status < 500 || attempt === MAX_ATTEMPTS - 1) {
        return response;
      }
    } catch (error) {
      if (attempt === MAX_ATTEMPTS - 1) {
        throw error;
      }
    } finally {
      clearTimeout(timeout);
    }

    await wait(250 * 2 ** attempt);
  }

  throw new Error('Unable to send Next.js revalidation request.');
};

const notify = async ({
  type,
  result,
}: {
  type: RevalidationType;
  result?: RevalidationResult | null;
}) => {
  const url = process.env.NEXT_REVALIDATE_URL;
  const secret = process.env.NEXT_REVALIDATE_SECRET;

  if (!url || !secret) {
    strapi.log.warn(
      'Next.js revalidation skipped: NEXT_REVALIDATE_URL and NEXT_REVALIDATE_SECRET must be configured.',
    );
    return;
  }

  const slug =
    typeof result?.slug === 'string' && result.slug.trim()
      ? result.slug.trim()
      : undefined;
  const id = result?.documentId
    ? String(result.documentId)
    : result?.id !== undefined && result.id !== null
      ? String(result.id)
      : undefined;

  if (!slug && !id) {
    strapi.log.error(
      `Next.js revalidation skipped for ${type}: the changed entry has no slug, documentId, or id.`,
    );
    return;
  }

  const payload: RevalidationPayload = {
    type,
    ...(slug ? { slug } : {}),
    ...(id ? { id } : {}),
  };

  try {
    const response = await sendRevalidation(url, secret, payload);

    if (!response.ok) {
      const responseBody = await response.text();
      strapi.log.error(
        `Next.js revalidation failed for ${type} (${response.status}): ${responseBody.slice(0, 500)}`,
      );
      return;
    }

    strapi.log.info(`Next.js revalidation triggered for ${type}.`);
  } catch (error) {
    const message = isAbortError(error)
      ? 'request timed out'
      : error instanceof Error
        ? error.message
        : String(error);

    strapi.log.error(
      `Next.js revalidation request failed for ${type}: ${message}`,
    );
  }
};

export default { notify };
