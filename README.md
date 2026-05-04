# Angelo Perini | Desenvolvedor Web

Portfolio profissional de Angelo Perini, com projetos em desenvolvimento web, sistemas personalizados e solucoes digitais.

## Rodar localmente

```bash
npm install
npm run dev
```

O Vite vai mostrar a URL local no terminal, normalmente `http://localhost:5173`.

## Build de producao

```bash
npm run build
```

O build final fica na pasta `dist`.

## GitHub Pages

Este projeto esta configurado para publicar em:

```text
https://AngeloPerini.github.io/PORTIFOLIO-DIGITAL
```

A configuracao importante esta em `vite.config.ts`:

```ts
base: '/PORTIFOLIO-DIGITAL/',
```

O deploy automatico esta em `.github/workflows/pages.yml`. Quando houver push para a branch `main`, o GitHub Actions roda `npm ci`, `npm run build` e publica a pasta `dist` no GitHub Pages.

## Imagens dos projetos

As imagens temporarias estao em `public/projects`.

Para trocar por imagens reais:

1. Exporte suas capturas em `.webp`, `.png`, `.jpg` ou `.svg`.
2. Coloque os arquivos em `public/projects`.
3. Abra `src/data/portfolio.ts`.
4. Troque os valores `image` e `gallery` de cada projeto pelos novos caminhos, por exemplo:

```ts
image: '/projects/condominio-login-real.webp',
gallery: [
  '/projects/condominio-dashboard-real.webp',
  '/projects/condominio-reservas-real.webp',
  '/projects/condominio-comunicados-real.webp',
],
```

Use imagens em proporcao horizontal, idealmente 1600x1000 ou 16:10, para encaixar bem nos cards.

## Publicar na Vercel

1. Suba o projeto para um repositorio no GitHub.
2. Entre em [vercel.com](https://vercel.com) e clique em `Add New...` > `Project`.
3. Importe o repositorio do portfolio.
4. Confira as configuracoes:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
5. Clique em `Deploy`.

Depois do primeiro deploy, a Vercel publica automaticamente novas alteracoes quando voce fizer push para a branch principal.
