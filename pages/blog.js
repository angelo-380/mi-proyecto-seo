// Archivo: pages/blog.js
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { postsCMS } from "../data/cmsData";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog | Punto Norte - Artículos y Crónicas</title>
        <meta
          name="description"
          content="Lee nuestras últimas notas sobre el apagón mundial, el clima en el Ártico y curiosidades matemáticas."
        />
        <meta name="keywords" content="apagón mundial, osos polares, trigonometría, artículos" />
        <meta property="og:title" content="Blog | Punto Norte" />
        <meta
          property="og:description"
          content="Lecturas rápidas y entretenidas sobre ciencia, clima y curiosidades."
        />
        <meta property="og:image" content="/images/seo-image.png" />
        <meta property="og:type" content="article" />
      </Head>

      <main className="page-wrapper">
        <nav className="liquid-nav">
          <Link href="/">Inicio</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contacto">Contacto</Link>
        </nav>

        <section className="liquid-card">
          <span className="badge-glass">Archivo de Notas</span>
          <h1>Últimas Publicaciones</h1>
          <p>Explora los artículos más recientes publicados en nuestra redacción:</p>
        </section>

        <div className="grid-cards">
          {postsCMS.map((post) => (
            <article key={post.id} className="liquid-card" style={{ marginBottom: 0 }}>
              <span className="badge-glass">{post.fecha}</span>
              <h2>{post.titulo}</h2>
              <p>{post.resumen}</p>

              {post.imagen && (
                <div style={{ marginTop: "1rem", borderRadius: "12px", overflow: "hidden" }}>
                  <Image
                    src={post.imagen}
                    width={500}
                    height={300}
                    alt={post.titulo}
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </div>
              )}
            </article>
          ))}
        </div>
      </main>
    </>
  );
}