import revalidation from '../../../product/services/revalidation';

const type = 'article' as const;

export default {
  async afterCreate(event) {
    await revalidation.notify({ type, result: event.result });
  },

  async afterUpdate(event) {
    await revalidation.notify({ type, result: event.result });
  },

  async afterDelete(event) {
    await revalidation.notify({ type, result: event.result });
  },
};
