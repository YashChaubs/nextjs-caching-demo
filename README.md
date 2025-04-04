# Next.js Caching Demo

This project demonstrates various caching strategies in Next.js 15, including server actions, cache purging, and page-level caching.

## Project Overview

This is a Next.js application that showcases:

- Server Actions for cache management
- Page-level caching
- Cache purging functionality
- Dynamic data fetching from a mock API

## Tech Stack

- Next.js 15.2.4
- React 19.1.0
- TypeScript
- TailwindCSS

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Features

### Main Page (`/`)

- Displays a list of products from a mock API
- Shows the total number of products
- Includes a "Purge Cache" button to manually refresh the data
- Links to the product counter page

### Product Counter Page (`/product-counter`)

- Shows the total count of products
- Demonstrates dynamic data fetching

## Caching Strategies

1. **Server Actions**

   - Implemented using `revalidatePath` and `revalidateTag`
   - Allows manual cache purging through a button click

2. **Page Level Caching**

   - Uses `cache: "force-cache"` for data fetching
   - Can be configured with `revalidate` option

3. **Dynamic Rendering**
   - Pages are dynamically rendered by default
   - Data is fetched on each request

## Exercise Instructions

### Part 1: Setting Up MockAPI

1. Go to [https://mockapi.io/](https://mockapi.io/) and create your own Mock API
2. Create a products endpoint with the following fields:
   - id
   - price
   - description
3. Replace the main page mockapi URL with your own
4. Create a new route called `product-counter`
5. Get the number of products from the same API
6. Display the number of products on the page
7. Why do you think / and /product-counter has different data?

### Part 2: Caching Configuration

1. Ensure product-counter layout or page is always [dynamically rendered](https://nextjs.org/docs/app/building-your-application/rendering/server-components#dynamic-rendering)
2. Configure the fetch request of mock API on the main page (root page /) to purge cache every 3 hours
3. Experiment with your Next.js application:
   - Navigate between pages
   - Interact with components
   - Observe the caching behavior

## Project Structure

```
.
├── app/
│   ├── page.tsx           # Main page with product list
│   ├── product-counter/   # Product counter page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── public/                # Static assets
└── package.json          # Project dependencies
```

## Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```
3. Start the development server
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Learn More

To learn more about Next.js caching strategies, check out:

- [Next.js Documentation](https://nextjs.org/docs)
- [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions)
- [Caching in Next.js](https://nextjs.org/docs/app/building-your-application/caching)
