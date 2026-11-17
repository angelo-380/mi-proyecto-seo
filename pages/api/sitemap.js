// Archivo: pages/api/sitemap.js
import { postsCMS } from "../../data/cmsData";

export default async function handler(req, res) {
  // Detecta automáticamente si estás en localhost o en un dominio público
  const protocol = req.headers["x-forwarded-proto"] || "http";
  const host = req.headers.host || "localhost:3000";
  const BASE_URL = `${protocol}://${host}`;

  // 1. Rutas estáticas principales
  const paginasEstaticas = [
    { ruta: "/", fecha: "2026-11-17", prioridad: "1.0" },
    { ruta: "/blog", fecha: "2026-11-17", prioridad: "0.8" },
    { ruta: "/contacto", fecha: "2026-11-17", prioridad: "0.7" },
  ];

  // 2. Rutas dinámicas generadas desde la base de datos / CMS
  const paginasDinamicas = postsCMS.map((post) => ({
    ruta: `/blog/${post.slug}`,
    fecha: post.fecha,
    prioridad: "0.9",
  }));

  const todasLasRutas = [...paginasEstaticas, ...paginasDinamicas];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${todasLasRutas
    .map(
      (item) => `
  <url>
    <loc>${BASE_URL}${item.ruta}</loc>
    <lastmod>${item.fecha}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${item.prioridad}</priority>
  </url>`
    )
    .join("")}
</urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.status(200).send(sitemap);
}