## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

=============================

## from the original setup:

Initialized a git repository.

Success! Created nextjs-dashboard at /Users/sbreese/Development/NextJs/nextjs-dashboard
Inside that directory, you can run several commands:

pnpm run dev
Starts the development server.

pnpm run build
Builds the app for production.

pnpm start
Runs the built app in production mode.

We suggest that you begin by typing:

cd nextjs-dashboard
pnpm run dev

## newbie command:

Run pnpm i to install the project's packages.

## Learnings:

CLSX allows you to construct className strings conditionally.

Next.js downloads font files at build time and hosts them with your other static assets. This means when a user visits your application, there are no additional network requests for fonts which would impact performance.

Images without dimensions and web fonts are common causes of layout shift due to the browser having to download additional resources.

4: Creating Layouts and Pages

Let's create your dashboard routes using nested layouts and pages!

/app/dashboard/page.tsx:
export default function Page() {
return <p>Dashboard Page</p>;
}

Loading UI and Streaming

Streaming: Reduces Time To First Byte (TTFB), First Contentful Paint (FCP), Time to Interaction (TTI)

Layout file: Allows app to share UI across multiple pages.

WOW:
Automatic code-splitting and prefetching:
Next.js automatically prefetches the code for the linked route in the background. By the time the user clicks the link, the code for the destination page will already be loaded in the background, and this is what makes the page transition near-instant!
Partial Rendering: Only the route segments that change on navigation re-render on the client, and any shared segments are preserved.
Soft Navigation: Ensuring only the route segments that have changed are re-rendered (partial rendering). This enables client React state to be preserved during navigation.
Next.js will maintain the scroll position for backwards and forwards navigation, and re-use route segments in the Router Cache
