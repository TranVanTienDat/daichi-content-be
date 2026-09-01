# Quy tắc: Cấu trúc phản hồi phẳng (v4 sang v5)

1. CẤU TRÚC PHẲNG (FLAT FORMAT): Trong Strapi 5, các phản hồi REST API không còn cấu trúc lồng nhau sâu như kiểu `data` và `attributes`.
2. CẤM: Tuyệt đối không viết code truy cập theo kiểu `response.data.attributes.fieldName`.
3. TRUY CẬP DỮ LIỆU: Các trường (fields) hiện nằm ngay ở cấp cao nhất của đối tượng.

**Cấu trúc phản hồi REST API đúng (Strapi 5):**
```json
{
  "data": [
    {
      "id": 1,
      "documentId": "h90lgohlzfpjf3bvan72mzll",
      "title": "Bài viết thử nghiệm",
      "headerImage": {
        "id": 2,
        "documentId": "cf07g1dbusqr8mzmlbqvlegx",
        "url": "/uploads/image.jpg"
      }
    }
  ],
  "meta": { "pagination": { "page": 1, "pageSize": 25 } }
}
```

4. XUẤT BẢN (PUBLICATION): Thay vì `publicationState` cũ, hiện nay sử dụng tham số `status: 'draft' | 'published'`.