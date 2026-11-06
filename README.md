# changle-portfolio

杨常乐（YANG Changle）个人作品集静态站，用于 GitHub Pages 项目站点：

**https://ycl286000398-byte.github.io/changle-portfolio/**

## 本地预览

本站使用 `<base href="/changle-portfolio/">`，直接用 `file://` 打开资源路径可能不正确。推荐：

```bash
cd changle-portfolio-pages   # 或仓库根目录
python3 -m http.server 8080
# 然后访问 http://localhost:8080/changle-portfolio/
# 若仓库根就是站点根，可临时把 index.html 里的 base 改成 "/" 再预览
```

## 部署

1. 将本目录内容推到仓库 `main` 分支根目录（或 `docs/`，与 Pages 设置一致）。
2. GitHub → Settings → Pages → Source: Deploy from a branch → `main` / `/ (root)`。
3. 站点约一分钟后生效。自定义域名可指向 `changle.design`。

## 结构

```
index.html
README.md
assets/
  styles.css
  main.js
  favicon.png
  og.jpg
  misc/
  projects/
```

## 说明

- 中文为主，辅以英文标题与标签。
- 资源均使用相对路径 + `base`，hash 锚点（如 `#about`）在项目路径下可用。
