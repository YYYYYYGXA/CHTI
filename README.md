# 吃货TI - 本命食材 MBTI 测试

一个用 React + Vite 编写的静态测试网页。

线上地址：
[https://yyyyyygxa.github.io/CHTI/](https://yyyyyygxa.github.io/CHTI/)

## 本地运行

```bash
npm install
npm run dev
```

## 本地构建

```bash
npm run build
```

## GitHub Pages 发布

仓库已经配置好 GitHub Pages 工作流：

- 推送到 `main` 后会自动构建并发布
- 发布内容来自 `dist/`
- Vite 会在 GitHub Pages 环境下自动使用仓库名作为资源基路径

如果仓库是第一次启用 Pages，还需要到 GitHub 仓库的 `Settings -> Pages` 中确认 `Source` 为 `GitHub Actions`。
