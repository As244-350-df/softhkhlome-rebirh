# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Firebase Hosting Deployment

1. Install Firebase tools locally:

```bash
npm install --save-dev firebase-tools
```

2. Log in to Firebase and initialize hosting:

```bash
npx firebase login
npx firebase init hosting
```

Choose the `dist` folder as your public directory and answer `yes` to single-page app rewrites.

3. Build and deploy:

```bash
npm run deploy
```

4. If you already have a Firebase project, update `.firebaserc` with your project ID.

> Note: Replace `your-firebase-project-id` in `.firebaserc` with your actual Firebase hosting project id.
Project Console: https://console.firebase.google.com/project/softklhome-v1/overview
