# Lumen

基于 [Astro](https://astro.build) 的个人主页，卡片式布局 + oklch 色相驱动主题，支持亮/暗模式与毛玻璃壁纸背景。

## 特性

- **卡片式设计**：横幅、简介、链接、页脚统一使用 `card-base` 外壳（同圆角、同发丝描边、同投影），链接项为卡片内的次级小卡（tile）
- **色相驱动主题**：单个 `--hue` 变量生成全部颜色，`oklch` 色彩空间，切换主题无需改配色
- **亮/暗模式**：`html.dark` 切换，首帧内联脚本防闪烁，偏好持久化到 `localStorage`
- **毛玻璃壁纸**：固定高斯模糊壁纸 + 主题色氛围光 + 暗色加深遮罩
- **入场动画**：卡片按序 `rise` 渐入，遵循 `prefers-reduced-motion`
- **无客户端框架**：纯 Astro 组件 + 原生 TS 脚本，零运行时 JS 体积

## 快速开始

```bash
pnpm install
pnpm dev       # 开发 http://localhost:4321
pnpm build     # 构建到 dist/
pnpm preview   # 预览构建产物
pnpm check     # astro check 类型/语法检查
```

## 目录结构

```
src/
├── components/
│   ├── Banner.astro           # 顶部横幅卡片（壁纸裁入卡片 + 遮罩 + 打字机副标题）
│   ├── ProfileCard.astro      # 个人简介卡片（头像 / 介绍 / 标签 / 复制链接）
│   ├── LinkList.astro         # 链接卡片内的分组小卡网格
│   ├── TopBar.astro           # 悬浮毛玻璃导航条
│   ├── ThemeToggle.astro      # 亮暗切换按钮
│   ├── FloatingControls.astro # 回到顶部悬浮按钮
│   └── TypewriterText.astro   # 打字机效果副标题
├── config/
│   ├── profile.ts             # 站点内容：姓名、简介、标签、链接分组
│   └── background.ts          # 壁纸路径、模糊、遮罩、缩放、位置
├── layouts/
│   └── Layout.astro           # HTML 外壳、壁纸、主题初始化脚本
├── pages/
│   └── index.astro            # 首页（卡片网格布局）
└── styles/
    └── global.css             # 设计令牌与共享卡片类
```

## 配置

### 内容 `src/config/profile.ts`

```ts
export const profile: Profile = {
  name: "Refac7",
  bio: "你与光芒 / You & Radiance",
  badge: "LUMEN · 个人主页",
  avatar: "https://…/avatar.jpg",
  hue: 250,          // 主题色相 0-360
  about: ["…"],      // 个人介绍段落
  tags: ["…"],       // 个人标签
  links: [
    { name: "GitHub", icon: "fa7-brands:github", url: "…", hint: "…", group: "社交 SOCIAL" },
  ],
};
```

`group` 相同的链接会归入同一分组；`icon` 为 Iconify 图标名（`fa7-brands` / `fa7-regular` / `fa7-solid`）。

### 背景 `src/config/background.ts`

```ts
export const background: BackgroundConfig = {
  desktop: "/wallpaper.jpg", // 桌面壁纸，可填远程 URL
  mobile: "/wallpaper.jpg",  // 移动端壁纸，留空则复用 desktop
  blur: 64,                  // 高斯模糊半径（px）
  dim: 0.3,                  // 底色遮罩强度 0-1
  scale: 1.3,                // 缩放，抵消模糊边缘露白
  position: "0% 20%",        // object-position
};
```

## 设计系统

令牌与共享类集中在 `src/styles/global.css`。

### 卡片

| 类 | 用途 |
| --- | --- |
| `.card-base` | 卡片外壳：`--radius-large` 圆角 + 发丝描边 + `--card-shadow` 投影 |
| `.card-head` | 卡片标题行（图标 + 大写标题 + 右侧 `.card-head-badge` 计数徽标） |
| `.card-foot` | 卡片底部虚线说明条 |
| `.link-row` | 卡片内的链接小卡（tile），悬停上浮并染主色描边 |
| `.btn-regular` | 主色胶囊按钮（标签 / 操作按钮） |
| `.glass` | 毛玻璃面（导航栏、悬浮控件） |
| `.rise` | 入场动画，用 `style="animation-delay: Nms"` 交错播放 |

### 常用令牌

| 令牌 | 说明 |
| --- | --- |
| `--hue` | 主题色相，全部颜色由它派生 |
| `--card-bg` / `--page-bg` | 卡片底色 / 页面底色 |
| `--tile-bg` / `--tile-border` | 卡片内次级小卡的底色与描边 |
| `--primary` | 主色 |
| `--line-divider` | 发丝描边 |
| `--radius-large` | 卡片圆角（1rem） |
| `--duration-normal` / `--ease-standard` | 过渡时长 / 缓动 |

亮暗两套令牌分别定义在 `:root` 与 `:root.dark` 下；组件内覆盖暗色时使用 `:global(.dark) .x`（Astro 作用域样式）。

### 响应式断点

- `≥ 640px`：链接小卡多列流式排布
- `≥ 960px`：双栏（左 21rem 简介卡片 sticky / 右链接卡片）
- `≤ 767px`：导航条贴边留白收紧
- `≤ 480px`：横幅字号与按钮缩小

## 技术栈

- [Astro 7](https://astro.build) — 静态站点生成
- [astro-icon](https://astro.build/en/guides/icons/) + Iconify Font Awesome 7
- TypeScript
- 原生 CSS（自定义属性设计令牌，无 CSS 框架）
- pnpm

## 许可

Private。
