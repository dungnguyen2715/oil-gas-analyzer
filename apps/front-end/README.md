# Oil & Gas Web Application

Dự án web application cho hệ thống Oil & Gas, được xây dựng với Next.js 14+, TypeScript, và React.

## Cấu trúc thư mục

### 📁 `/app`

Thư mục chính của Next.js App Router - chứa các route và layout của ứng dụng.

- **`layout.tsx`** - Root layout cho toàn bộ ứng dụng
- **`page.tsx`** - Trang chủ (home page) của ứng dụng
- **`(auth)/`** - Route group cho các trang xác thực (không ảnh hưởng đến URL)
  - `login/page.tsx` - Trang đăng nhập
- **`(protected)/`** - Route group cho các trang yêu cầu xác thực
  - `home/page.tsx` - Trang home sau khi đăng nhập

### 📁 `/components`

Chứa các React components tái sử dụng được trong toàn bộ ứng dụng.

- **`common/`** - Components dùng chung (buttons, inputs, modals, etc.)
- **`layout/`** - Components liên quan đến layout (header, footer, sidebar, etc.)

### 📁 `/features`

Tổ chức code theo tính năng (feature-based architecture), mỗi feature là một module độc lập.

- **`auth/`** - Module xác thực người dùng
  - `api.ts` - API calls cho authentication
  - `hooks.ts` - Custom hooks cho auth (useLogin, useLogout, etc.)
  - `stores.ts` - State management cho auth
  - `types.ts` - TypeScript types/interfaces cho auth
  - `components/` - Components chỉ dùng cho auth feature

### 📁 `/hooks`

Chứa các custom React hooks dùng chung cho toàn bộ ứng dụng (useLocalStorage, useDebounce, etc.).

### 📁 `/lib`

Thư viện và utility functions cấp thấp, configuration.

- **`auth.ts`** - Authentication utilities và helpers
- **`http.ts`** - HTTP client configuration (axios/fetch wrapper)

### 📁 `/providers`

React Context Providers cho ứng dụng (ThemeProvider, AuthProvider, QueryClientProvider, etc.).

### 📁 `/public`

Chứa các static assets (images, fonts, icons) được serve trực tiếp.

### 📁 `/stores`

State management stores (Zustand, Redux, hoặc Context API stores).

### 📁 `/styles`

Chứa các file styling của ứng dụng.

- **`globals.css`** - Global styles và CSS reset
- **`themes/`** - Theme configurations
  - `og-theme.css` - Oil & Gas theme styling

### 📁 `/types`

TypeScript type definitions và interfaces dùng chung cho toàn bộ dự án.

### 📁 `/utils`

Utility functions và helper functions tái sử dụng (formatters, validators, constants, etc.).

## Configuration Files

- **`next.config.ts`** - Next.js configuration
- **`tsconfig.json`** - TypeScript configuration
- **`eslint.config.mjs`** - ESLint configuration
- **`postcss.config.mjs`** - PostCSS configuration
- **`package.json`** - Dependencies và scripts

## Quy ước đặt tên

- Components: PascalCase (e.g., `LoginForm.tsx`)
- Files khác: camelCase (e.g., `auth.ts`, `useAuth.ts`)
- Folders: kebab-case hoặc camelCase

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

page
|
component
|
hook
|
store
|
api
|
backend
