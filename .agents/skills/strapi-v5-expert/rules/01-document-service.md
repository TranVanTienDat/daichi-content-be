# Quy tắc: Document Service API & Identifiers (Định danh)

1. API LỖI THỜI: Nghiêm cấm sử dụng `strapi.entityService`. Nó đã bị coi là lỗi thời trong Strapi 5.
2. API MỚI: Luôn sử dụng `strapi.documents('api::uid.uid').methodName()`.
3. ĐỊNH DANH (IDENTIFIERS): Trong Strapi 5, định danh chính là `documentId` (chuỗi 24 ký tự). KHÔNG ĐƯỢC phép sử dụng `id` thông thường (dạng số) cho các truy vấn.

**Cú pháp đúng (Strapi 5):**
```typescript
// TÌM KIẾM MỘT BẢN GHI
const entry = await strapi.documents('api::article.article').findOne({
  documentId: 'abc123def456ghi789jkl012',
  populate: ['author', 'coverImage'], // Các liên kết cần phải populate rõ ràng
  status: 'published', // Mặc định là 'draft' nếu bật Draft & Publish
});

// CẬP NHẬT
const updated = await strapi.documents('api::article.article').update({
  documentId: 'abc123def456ghi789jkl012',
  data: { title: 'Tiêu đề mới' },
});
```