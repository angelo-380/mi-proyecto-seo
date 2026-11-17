// Archivo: pages/index.js
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Punto Norte | Crónicas, Ciencia y Curiosidades</title>
        <meta
          name="google-site-verification"
          content="FWESvqufbuh_z2n0BOr_AzUKHsZSw5xiRrsl6BUnWLo"
        />
        <meta
          name="description"
          content="Artículos, reportajes y notas curiosas sobre ciencia, naturaleza, tecnología y el mundo cotidiano."
        />
        <meta name="keywords" content="curiosidades, ciencia, naturaleza, crónicas, blog" />
        <meta property="og:title" content="Punto Norte | Crónicas, Ciencia y Curiosidades" />
        <meta
          property="og:description"
          content="Historias bien contadas sobre lo que pasa en el planeta y las ideas más curiosas."
        />
        <meta property="og:image" content="/images/seo-image.png" />
        <meta property="og:type" content="website" />
      </Head>

      <main className="page-wrapper">
        <nav className="liquid-nav">
          <Link href="/">Inicio</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contacto">Contacto</Link>
        </nav>

        <section className="liquid-card">
          <span className="badge-glass">2 + 2 = ц</span>
          <h1>Bienvenido</h1>
          <p>
            Un espacio dedicado a explorar historias curiosas, fenómenos del planeta y preguntas
            que a nadie le importa.
          </p>
        </section>
      </main>
    </>
  );
}