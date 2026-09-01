---
name: strapi-v5-expert
description: Chỉ mục chính của kho kiến thức Strapi v5. Sử dụng file này để tìm các URL tài liệu chính xác trước khi thiết kế kiến trúc, cấu hình hoặc viết code bẻckend.
---

# Hướng dẫn cho Agent

Khi người dùng đặt ra một nhiệm vụ, hãy tìm danh mục phù hợp nhất trong phần "Quick Reference" bên dưới.
Sao chép URL cần thiết và **SỬ DỤNG CÔNG CỤ WEB BROWSING** để đọc tài liệu Strapi v5 mới nhất theo liên kết đó. Chỉ sau khi đọc xong mới bắt đầu tạo mã nguồn.

---

## Quick Reference (Chỉ mục Tài liệu)

### 1. Document Service API (Công cụ chính để làm việc với DB)
Sử dụng các liên kết này cho bất kỳ nhiệm vụ nào liên quan đến các thao tác CRUD ở bẻckend. `entityService` cũ đã được thay thế bằng `strapi.documents()`.
* **Core API & CRUD:** https://docs.strapi.io/dev-docs/api/document-service
  *Mô tả:* Các phương thức cơ bản (`findOne`, `findMany`, `create`, `update`, `delete`, `count`). Làm việc với `documentId`.
* **Documents Concept:** https://docs.strapi.io/dev-docs/api/document-service#documents
  *Mô tả:* Khái niệm Document trong Strapi 5 (kết hợp các locales và trạng thái xuất bản vào một đối tượng duy nhất).
* **Populate (Liên kết và Media):** https://docs.strapi.io/dev-docs/api/document-service/populate
  *Mô tả:* Cách truy vấn các liên kết lồng nhau và các file media.
* **Fields Selection:** https://docs.strapi.io/dev-docs/api/document-service/fields
  *Mô tả:* Chọn các cột cụ thể từ DB (tham số `fields`).
* **Filters (Lọc):** https://docs.strapi.io/dev-docs/api/document-service/filters
  *Mô tả:* Các toán tử lọc (`$eq`, `$in`, `$not`, `$and` và các toán tử khác).
* **Sort & Pagination:** https://docs.strapi.io/dev-docs/api/document-service/sort-pagination
  *Mô tả:* Sắp xếp theo trường và phân trang (limit, start).
* **Locale (i18n):** https://docs.strapi.io/dev-docs/api/document-service/locale
  *Mô tả:* Thao tác với các tài liệu cho một locale (ngôn ngữ) cụ thể.
* **Draft & Publish:** https://docs.strapi.io/dev-docs/api/document-service/draft-and-publish
  *Mô tả:* Làm việc với các trạng thái (published, draft), các phương thức `publish()` và `unpublish()`.
* **Document Service Middlewares:** https://docs.strapi.io/dev-docs/api/document-service/middlewares
  *Mô tả:* Đánh chặn và sửa đổi các yêu cầu `strapi.documents.use()` trước khi truy cập vào DB.

### 2. Kiến trúc và Tùy chỉnh Backend
* **Overview & Structure:** https://docs.strapi.io/dev-docs/backend-customization
  *Mô tả:* Sơ đồ tương tác của các yêu cầu bẻckend.
* **Project Structure:** https://docs.strapi.io/dev-docs/project-structure
  *Mô tả:* Cấu trúc thư mục của dự án Strapi (src/api, config, v.v.).
* **Routes:** https://docs.strapi.io/dev-docs/backend-customization/routes
  *Mô tả:* Cấu hình các HTTP routes tùy chỉnh và core routes.
* **Controllers:** https://docs.strapi.io/dev-docs/backend-customization/controllers
  *Mô tả:* Tạo các controllers tùy chỉnh và mở rộng (`createCoreController`).
* **Services:** https://docs.strapi.io/dev-docs/backend-customization/services
  *Mô tả:* Đóng gói logic kinh doanh (`createCoreService`).
* **Middlewares (HTTP):** https://docs.strapi.io/dev-docs/backend-customization/middlewares
  *Mô tả:* Các middlewares toàn cục và route của Koa (`ctx`, `next`).
* **Policies:** https://docs.strapi.io/dev-docs/backend-customization/policies
  *Mô tả:* Bảo vệ các endpoints và kiểm tra quyền truy cập trước khi vào controller.
* **Requests & Responses:** https://docs.strapi.io/dev-docs/backend-customization/requests-responses
  *Mô tả:* Cấu trúc đối tượng `ctx` (`ctx.request`, `ctx.state.user`, `ctx.response`).
* **Error Handling:** https://docs.strapi.io/dev-docs/error-handling
  *Mô tả:* Ném các lỗi tiêu chuẩn hóa (`ApplicationError`, `ValidationError`).
* **Lifecycle Functions (Global):** https://docs.strapi.io/dev-docs/configurations/functions
  *Mô tả:* Sử dụng `register`, `bootstrap` và `destroy` trong file `src/index.ts`.

### 3. Models và Cơ sở dữ liệu
* **Models & Content-Types:** https://docs.strapi.io/dev-docs/backend-customization/models
  *Mô tả:* Tạo sơ đồ dữ liệu (`schema.json`), các kiểu thuộc tính.
* **Lifecycle Hooks:** https://docs.strapi.io/dev-docs/backend-customization/models#lifecycle-hooks
  *Mô tả:* Các triggers của DB (`beforeCreate`, `afterUpdate`).
* **Relations:** https://docs.strapi.io/dev-docs/api/rest/relations
  *Mô tả:* Quản lý các liên kết (connect, disconnect, set) thông qua API.
* **Database Transactions:** https://docs.strapi.io/dev-docs/database/transactions
  *Mô tả:* Sử dụng `strapi.db.transaction()` cho các hoạt động nguyên tử.
* **Database Migrations:** https://docs.strapi.io/dev-docs/database/migrations
  *Mô tả:* Các scripts di chuyển cấu trúc hoặc dữ liệu (thư mục `database/migrations`).
* **Database Configuration:** https://docs.strapi.io/dev-docs/configurations/database
  *Mô tả:* Cấu hình `config/database.ts` (SQLite, PostgreSQL, MySQL).

### 4. API bên ngoài (REST, GraphQL, Client)
* **Content API Overview:** https://docs.strapi.io/dev-docs/api/content-api
  *Mô tả:* Tổng quan về các API bên ngoài của Strapi.
* **REST API Reference:** https://docs.strapi.io/dev-docs/api/rest
  *Mô tả:* Danh mục chính của các endpoints. Cấu trúc phản hồi phẳng của v5.
* **REST API Parameters:** https://docs.strapi.io/dev-docs/api/rest/parameters
  *Mô tả:* Danh sách đầy đủ các tham số REST API.
* **REST API Guides:** https://docs.strapi.io/dev-docs/api/rest/guides
  *Mô tả:* Các tình huống sử dụng REST API cụ thể.
* **REST API Populate & Select:** https://docs.strapi.io/dev-docs/api/rest/populate-select
  *Mô tả:* Các tham số `populate` và `fields` trong các yêu cầu REST.
* **REST API Sort & Pagination:** https://docs.strapi.io/dev-docs/api/rest/sort-pagination
  *Mô tả:* Sắp xếp và phân trang theo offset và page.
* **REST API Status:** https://docs.strapi.io/dev-docs/api/rest/status
  *Mô tả:* Lọc các phản hồi REST theo trạng thái (published/draft).
* **REST API Locale:** https://docs.strapi.io/dev-docs/api/rest/locale
  *Mô tả:* Các yêu cầu REST API với tham số `locale`.
* **REST API Upload:** https://docs.strapi.io/dev-docs/api/rest/upload
  *Mô tả:* Tải lên các file thông qua POST `/api/upload`.
* **Interactive Query Builder:** https://docs.strapi.io/dev-docs/api/rest/interactive-query-builder
  *Mô tả:* Sử dụng thư viện `qs` để xây dựng các URL phức tạp.
* **GraphQL API:** https://docs.strapi.io/dev-docs/api/graphql
  *Mô tả:* Sử dụng các mutations và queries của GraphQL, bộ lọc.
* **GraphQL Plugin Config:** https://docs.strapi.io/dev-docs/plugins/graphql
  *Mô tả:* Cấu hình Apollo Server, Shadow CRUD và giới hạn độ phức tạp trong `config/plugins.ts`.
* **Strapi Client:** https://docs.strapi.io/dev-docs/strapi-client
  *Mô tả:* Thư viện chính thức `@strapi/client` cho frontend.
* **OpenAPI & Swagger:** https://docs.strapi.io/dev-docs/api/openapi
  *Mô tả:* Tạo đặc tả OpenAPI, plugin Documentation.

### 5. TypeScript
* **TypeScript Setup & Overview:** https://docs.strapi.io/dev-docs/typescript
  *Mô tả:* Sử dụng TypeScript trong Strapi.
* **TypeScript Development:** https://docs.strapi.io/dev-docs/typescript/development
  *Mô tả:* Auto-complete, định kiểu cho instance `strapi`.
* **Manipulating Documents:** https://docs.strapi.io/dev-docs/typescript/manipulating-documents
  *Mô tả:* Sử dụng `UID.ContentType` và `Data.Document` để định kiểu nghiêm ngặt.
* **TypeScript Configuration:** https://docs.strapi.io/dev-docs/typescript/configuration
  *Mô tả:* Các cài đặt trong `config/typescript.ts` và tự động tạo types.
* **Adding TypeScript:** https://docs.strapi.io/dev-docs/typescript/migration
  *Mô tả:* Cách thêm TS vào một dự án JS hiện có.

### 6. Cấu hình và Tự động hóa (Settings)
* **Configurations Overview:** https://docs.strapi.io/dev-docs/configurations
  *Mô tả:* Tổng quan về thư mục `/config`.
* **Server Config:** https://docs.strapi.io/dev-docs/configurations/server
  *Mô tả:* `config/server.ts` (host, port, url, proxy).
* **API Config:** https://docs.strapi.io/dev-docs/configurations/api
  *Mô tả:* `config/api.ts` (prefixes, giới hạn phân trang).
* **Middlewares Config:** https://docs.strapi.io/dev-docs/configurations/middlewares
  *Mô tả:* Cấu hình các middlewares tích hợp (CORS, security, body) trong `config/middlewares.ts`.
* **Plugins Config:** https://docs.strapi.io/dev-docs/configurations/plugins
  *Mô tả:* Kết nối và cấu hình các plugins cục bộ (`config/plugins.ts`).
* **Environment Variables:** https://docs.strapi.io/dev-docs/configurations/environment
  *Mô tả:* Làm việc với `.env` và helper `env()`.
* **CRON Jobs:** https://docs.strapi.io/dev-docs/configurations/cron
  *Mô tả:* Thực hiện các tác vụ nền theo lịch trình (node-schedule).
* **Webhooks:** https://docs.strapi.io/dev-docs/configurations/webhooks
  *Mô tả:* Cấu hình các triggers cho yêu cầu HTTP đến các hệ thống bên ngoài.
* **Features (Feature Flags):** https://docs.strapi.io/dev-docs/configurations/features
  *Mô tả:* Bật các chức năng thử nghiệm.

### 7. Plugins và Mở rộng
* **Installing Plugins:** https://docs.strapi.io/user-docs/plugins
  *Mô tả:* Sử dụng Marketplace và CLI để cài đặt plugins.
* **Users & Permissions:** https://docs.strapi.io/dev-docs/plugins/users-permissions
  *Mô tả:* Quản lý người dùng, JWT, ACL, đăng ký và vai trò.
* **Upload files / Media Library:** https://docs.strapi.io/dev-docs/plugins/upload
  *Mô tả:* Cấu hình các nhà cung cấp tải lên file (AWS S3, Local).
* **Email Plugin:** https://docs.strapi.io/dev-docs/plugins/email
  *Mô tả:* Gửi email giao dịch, cấu hình các nhà cung cấp SMTP.
* **Custom Fields:** https://docs.strapi.io/dev-docs/custom-fields
  *Mô tả:* Tạo và đăng ký các kiểu trường tùy chỉnh.
* **Sentry Plugin:** https://docs.strapi.io/dev-docs/plugins/sentry
  *Mô tả:* Tích hợp với Sentry để theo dõi lỗi.

### 8. Di chuyển v4 -> v5
* **Upgrading Introduction:** https://docs.strapi.io/dev-docs/migration/v4-to-v5
  *Mô tả:* Tổng quan về quá trình cập nhật lên Strapi 5.
* **Step-by-step Guide:** https://docs.strapi.io/dev-docs/migration/v4-to-v5/step-by-step
  *Mô tả:* Hướng dẫn nâng cấp từng bước.
* **Upgrade Tool:** https://docs.strapi.io/dev-docs/migration/v4-to-v5/upgrade-tool
  *Mô tả:* Sử dụng công cụ CLI (codemods) để di chuyển tự động.
* **Breaking Changes:** https://docs.strapi.io/dev-docs/migration/v4-to-v5/breaking-changes
  *Mô tả:* Danh sách đầy đủ các thay đổi gây phá vỡ (breaking changes).
* **Entity Service to Document Service:** https://docs.strapi.io/dev-docs/migration/v4-to-v5/entity-service
  *Mô tả:* Refactoring các yêu cầu cũ sang API mới và `documentId`.
* **Plugins Migration:** https://docs.strapi.io/dev-docs/migration/v4-to-v5/plugins
  *Mô tả:* Cập nhật các plugins và sử dụng Plugin SDK.
* **Helper-plugin Migration:** https://docs.strapi.io/dev-docs/migration/v4-to-v5/helper-plugin
  *Mô tả:* Thay thế `@strapi/helper-plugin` đã bị xóa.
* **Design System Updates:** https://docs.strapi.io/dev-docs/migration/v4-to-v5/design-system
  *Mô tả:* Các thay đổi trong UI components (Design System v2).

### 9. Hạ tầng và CLI
* **Installation & Quick Start:** https://docs.strapi.io/dev-docs/installation
  *Mô tả:* Cài đặt Strapi (CLI, Docker).
* **Command Line Interface (CLI):** https://docs.strapi.io/dev-docs/cli
  *Mô tả:* Các lệnh `strapi generate`, `build`, `ts:generate-types`.
* **Templates:** https://docs.strapi.io/dev-docs/templates
  *Mô tả:* Tạo các dự án dựa trên các mẫu có sẵn của GitHub.
* **Deployment:** https://docs.strapi.io/dev-docs/deployment
  *Mô tả:* Các yêu cầu đối với máy chủ, các biến cho môi trường production.
* **Data Management:** https://docs.strapi.io/dev-docs/data-management
  *Mô tả:* Import/Export/Transfer dữ liệu giữa các cơ sở dữ liệu (CLI).
* **Testing:** https://docs.strapi.io/dev-docs/testing
  *Mô tả:* Cấu hình Jest và Supertest cho các bài kiểm tra unit và kiểm tra tích hợp.

### 10. CMS Features và Admin Panel
* **Admin Panel Settings:** https://docs.strapi.io/user-docs/intro
  *Mô tả:* Tổng quan về giao diện đồ họa quản trị.
* **Admin Panel Configuration:** https://docs.strapi.io/dev-docs/configurations/admin-panel
  *Mô tả:* Cấu hình `config/admin.ts` (secrets, bản dịch).
* **Homepage Customization:** https://docs.strapi.io/dev-docs/admin-panel-customization/homepage
  *Mô tả:* Thêm các widgets vào trang chủ của trang quản trị.
* **Content-Type Builder:** https://docs.strapi.io/user-docs/content-type-builder
  *Mô tả:* Sử dụng GUI để tạo các mô hình dữ liệu.
* **Content Manager:** https://docs.strapi.io/user-docs/content-manager
  *Mô tả:* Giao diện chỉnh sửa các bản ghi.
* **Draft & Publish (CMS):** https://docs.strapi.io/user-docs/draft-and-publish
  *Mô tả:* Cơ chế của các trạng thái nội dung.
* **Internationalization (CMS):** https://docs.strapi.io/dev-docs/plugins/i18n
  *Mô tả:* Dịch nội dung sang các ngôn ngữ khác nhau trong trang quản trị.
* **Preview:** https://docs.strapi.io/dev-docs/plugins/preview
  *Mô tả:* Cấu hình Live Preview (xem trước nội dung trên frontend).
* **API Tokens:** https://docs.strapi.io/user-docs/api-tokens
  *Mô tả:* Các tokens cho tích hợp Server-to-Server.
* **Role-Based Access Control (RBAC):** https://docs.strapi.io/user-docs/users-roles-permissions
  *Mô tả:* Cài đặt quyền cho các quản trị viên panel.
* **Single Sign-On (SSO):** https://docs.strapi.io/dev-docs/configurations/sso
  *Mô tả:* Xác thực quản trị viên thông qua Azure, Google (Enterprise).
* **Audit Logs:** https://docs.strapi.io/user-docs/audit-logs
  *Mô tả:* Nhật ký ghi lại các hành động của quản trị viên (Enterprise).
* **Review Workflows:** https://docs.strapi.io/user-docs/review-workflows
  *Mô tả:* Cấu hình các giai đoạn review nội dung (Enterprise).
* **Content History:** https://docs.strapi.io/user-docs/content-history
  *Mô tả:* Quản lý phiên bản và hoàn tác các thay đổi nội dung (Enterprise).
* **Releases:** https://docs.strapi.io/user-docs/releases
  *Mô tả:* Xuất bản nội dung hàng loạt (Growth/Enterprise).