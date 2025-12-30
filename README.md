# Nuxt Minimal Starter

Bug reproduction repo.

When we client-side navigate to a route for which we have `validate: () => false`, the URL doesn't update. This can be very confusing for users.

### To reproduce bug:

-   click on `Page B (reproduce bug)` link.
-   you will see the 404 error page ✓
-   the URL doesn't change to `/b` ❌

### example solution

I created a `customValidate` plugin and `customValidate` property on `RouteMeta`. This is used by page `/c` to showcase the expected behaviour. `/c` has `customValidate: () => false`

When we click on the link `Page C (...)``

-   we see the 404 error page ✓
-   the URL changes to `/c` ✓
-   when navigating backward, we go back to the previous page ✓



https://github.com/user-attachments/assets/01675ded-aad0-4b9f-b4f0-4b37f72b590f



## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
