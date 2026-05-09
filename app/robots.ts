import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/", "/login", "/get-started", "/post-project"] },
    sitemap: "https://www.zenit.work/sitemap.xml",
  };
}
