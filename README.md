# changle-portfolio

杨常乐（YANG Changle）个人作品集静态站，发布在：

**https://changle.design/**

`www.changle.design` 使用同一站点。根目录 `CNAME` 只有 `changle.design`。

## 本地预览

页面和资源都从站点根路径加载（例如 `/_next/...`、`/portrait/...`）。在仓库根目录启动静态服务器：

```bash
python3 -m http.server 8080
# 然后访问 http://localhost:8080/
```

## 部署

1. 将本目录内容推到仓库 `main` 分支根目录。
2. GitHub → Settings → Pages → Source: Deploy from a branch → `main` / `/ (root)`。
3. 自定义域名为 `changle.design`。DNS 在注册商处指向 GitHub Pages（apex 用 A/AAAA，`www` 用 CNAME）。
4. 证书就绪后再打开 Enforce HTTPS。

旧的 `/changle-portfolio/` 地址会转到对应的根路径，避免直接 404。请保留 `.nojekyll`。

## 说明

- 中文为主，辅以英文标题与标签。
