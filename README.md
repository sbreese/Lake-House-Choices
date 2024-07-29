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

Run pnpm lint to view ESLint warnings and errors

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
Next.js prerenders routes to improve performance

React Server Components: Allows app to query the database directly from the server without an additional API layer.

Waterfall pattern: You should use the Waterfall pattern to satisfy a condition before making the next request.
For example, you might want to fetch a user's ID and profile information first. Once you have the ID, you might then proceed to fetch their list of friends.

Parallel data fetching: In JavaScript, you can use the Promise.all() or Promise.allSettled() functions to initiate all promises at the same time.

==== Static and Dynamic Rendering ====
Static Rendering: Data fetching and rendering happens on the server at build time (when you deploy) or when revalidating data.
Dynamic Rendering: Content is rendered on the server for each user at request time (when the user visits the page). There are a couple of benefits of dynamic rendering:

==== Streaming ====
Streaming is a data transfer technique that allows you to break down a route into smaller "chunks" and progressively stream them from the server to the client as they become ready.
By streaming, you can prevent slow data requests from blocking your whole page. This allows the user to see and interact with parts of the page without waiting for all the data to load before any UI can be shown to the user.
An advantage of streaming is that chunks are rendered in parallel, thus reducing the overall load time.

Use Suspense to stream slow-loading components and immediately show the rest of the page's UI.

Move data fetches down to the components that need it.
By moving data fetching down to the components that need it, you can create more granular Suspense boundaries. This allows you to stream specific components and prevent the UI from blocking.

==== Partial Prerendering (PPR) ====
Holes are locations where dynamic content will load asynchronously at request time.
With Partial Prerendering, Next.js will prerender the static parts of your route and defer the dynamic parts until the user requests them.

=== Adding Search and Pagination ===

1. Capture the user's input
   <input onChange={e => {
   handleSearch(e.target.value)
   }}>
2. Update the URL with the search params

Debouncing: It prevents a new database query on every keystroke and reduces the number of requests sent to your database, thus saving resources.
pnpm i use-debounce

=== Adding pagination ===

=== Mutating Data ===

React Server Actions: Allows apps to run asynchronous code directly on the server. They eliminate the need to create API endpoints to mutate your data. Instead, you write asynchronous functions that execute on the server and can be invoked from your Client or Server Components.
An advantage of invoking a Server Action within a Server Component is progressive enhancement - forms work even if JavaScript is disabled on the client.
This allows users to interact with the form and submit data even if the JavaScript for the form hasn't been loaded yet or if it fails to load.

==== Handling Errors ====

The `error.tsx` file serves as a catch-all for unexpected errors and allows you to display a fallback UI to your users.

==== Improving Accessibility ====

==== Adding Authentication ====
Authentication verifies your identity. Authorization determines what you can access.

pnpm i next-auth@beta

===== Adding Metadata ======
metadata: provides additional details about a webpage. Metadata is not visible to the users visiting the page. Instead, it works behind the scenes, embedded within the page's HTML, usually within the <head> element. This hidden information is crucial for search engines and other systems that need to understand your webpage's content better.

Metadata plays a significant role in enhancing a webpage's SEO, making it more accessible and understandable for search engines and social media platforms. Proper metadata helps search engines effectively index webpages, improving their ranking in search results. Additionally, metadata like Open Graph improves the appearance of shared links on social media, making the content more appealing and informative for users.

===== Next Steps =====
https://nextjs.org/docs
https://vercel.com/templates/next.js
https://www.youtube.com/@VercelHQ/videos
