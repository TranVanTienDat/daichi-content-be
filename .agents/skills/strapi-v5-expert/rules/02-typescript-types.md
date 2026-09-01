# Quy tắc: TypeScript & Typings (Định kiểu)

1. TOÀN BỘ CODE PHẢI LÀ TYPESCRIPT. Không sử dụng các file `.js` cho controllers, services hoặc routes trừ khi có chỉ định khác.
2. SỬ DỤNG CÁC TYPES TÍCH HỢP CỦA STRAPI: Import các types từ `@strapi/strapi`.
3. ĐỊNH KIỂU CHO CÁC FACTORIES: Khi mở rộng core-controllers hoặc core-services, hãy sử dụng các factories `factories.createCoreController` và định kiểu cho tham số `strapi`.

**Cú pháp đúng (Strapi 5):**
```typescript
import { factories } from '@strapi/strapi';
import type { Core } from '@strapi/strapi';

export default factories.createCoreController('api::restaurant.restaurant', ({ strapi }: { strapi: Core.Strapi }) => ({
  // Ghi đè phương thức (Override method)
  async find(ctx) {
    // Gọi phương thức gốc (Base method)
    const { data, meta } = await super.find(ctx);
    
    // Logic tùy chỉnh (Custom logic)
    return { data, meta };
  }
}));
```