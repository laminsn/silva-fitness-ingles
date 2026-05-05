export const config = {
  matcher: "/",
};

export default function middleware(request) {
  const host = (request.headers.get("host") || "").toLowerCase();
  const url = new URL(request.url);

  if (host === "riofitclub.com" || host === "www.riofitclub.com") {
    url.pathname = "/riofitclub-home.html";
    return new Response(null, {
      status: 200,
      headers: { "x-middleware-rewrite": url.toString() },
    });
  }

  if (host === "ingles.riofitclub.com" || host.endsWith(".vercel.app")) {
    url.pathname = "/silva.html";
    return new Response(null, {
      status: 200,
      headers: { "x-middleware-rewrite": url.toString() },
    });
  }

  return new Response(null, { status: 200 });
}
