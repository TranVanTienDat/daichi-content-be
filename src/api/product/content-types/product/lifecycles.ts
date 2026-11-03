import revalidation from '../../services/revalidation';

const type = 'product' as const;

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
