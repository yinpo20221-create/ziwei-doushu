# 静态导出适配说明（fork 专用改动）

本 fork 在上游 Renhuai123/ziwei-doushu 基础上只改了让它能跑在 GitHub Pages（纯静态托管）所需的几处，上游逻辑、排盘算法、数据一字未动。

改动（共 5 处）：

1. `next.config.js`：加 `output: 'export'`（纯静态导出）、`basePath: '/ziwei-doushu'`（对应 Pages 子路径）、`images.unoptimized`。
2. `app/robots.ts`、`app/sitemap.ts`：加 `export const dynamic = 'force-static'`，否则静态导出构建报错。
3. `app/knowledge/[star]/[topic]/page.tsx`：`generateStaticParams` 在内容库为空时回退返回全部 14×13 组合，否则静态导出因 0 条路由构建失败；页面无数据时仍走 `notFound()`，与线上行为一致。
4. `app/library/search/page.tsx`：原版为服务端组件（`await searchParams`），静态导出无法动态渲染；改为客户端组件 + `useSearchParams`，搜索在浏览器本地完成，功能不变。
5. 新增 `.github/workflows/deploy.yml`：push 到 main 即自动构建并发布到 GitHub Pages。

同步上游时如遇冲突，以上 5 处需重新核对。
