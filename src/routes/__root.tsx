import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  ScriptOnce,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { CartProvider } from "@/lib/cart";
import { FloatingCallCta } from "@/components/site/FloatingCallCta";
import { Toaster } from "@/components/ui/sonner";

const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}if(t==='dark'){document.documentElement.classList.add('dark');}}catch(e){}})();`;

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="font-display text-[8rem] leading-none text-gradient-aqua">404</div>
        <h2 className="mt-4 font-display text-2xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-luxe transition hover:opacity-90"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
          >
            Try again
          </button>
          <a href="/" className="rounded-full border border-border px-5 py-2.5 text-sm font-medium">Home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Naturalis Water & Beverages — Premium Hydration & Healthy Foods" },
      { name: "description", content: "Naturalis Water and Beverages and Leaf & Grains Pvt Ltd — premium packaged drinking water, alkaline water, sodas, sauces, fresh produce and ready-to-eat foods from Northeast India." },
      { name: "theme-color", content: "#0a1530" },
      { property: "og:title", content: "Naturalis Water & Beverages — Premium Hydration & Healthy Foods" },
      { property: "og:description", content: "Naturalis Water and Beverages and Leaf & Grains Pvt Ltd — premium packaged drinking water, alkaline water, sodas, sauces, fresh produce and ready-to-eat foods from Northeast India." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Naturalis Water & Beverages — Premium Hydration & Healthy Foods" },
      { name: "twitter:description", content: "Naturalis Water and Beverages and Leaf & Grains Pvt Ltd — premium packaged drinking water, alkaline water, sodas, sauces, fresh produce and ready-to-eat foods from Northeast India." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/32203e6e-30c5-4b4d-a6e1-fca7c36b321b/id-preview-942d92b8--f5f8d208-f994-4034-9271-972f99308241.lovable.app-1779209010867.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/32203e6e-30c5-4b4d-a6e1-fca7c36b321b/id-preview-942d92b8--f5f8d208-f994-4034-9271-972f99308241.lovable.app-1779209010867.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Inter+Tight:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <ScriptOnce>{themeScript}</ScriptOnce>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <Outlet />
        <FloatingCallCta />
        <Toaster richColors position="top-center" />
      </CartProvider>
    </QueryClientProvider>
  );
}
