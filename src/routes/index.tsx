import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Title" },
      { name: "description", content: "This is a paragraph." },
      { property: "og:title", content: "Title" },
      { property: "og:description", content: "This is a paragraph." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background p-8 text-foreground">
      <p>This is a paragraph.</p>
    </main>
  );
}
