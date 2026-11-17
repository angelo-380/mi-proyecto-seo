// Archivo: pages/contacto.js
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

export default function Contacto() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);

  const manejarEnvio = (e) => {
    e.preventDefault();
    setNombre("");
    setCorreo("");
    setMensaje("");
    setEnviado(true);
    setTimeout(() => setEnviado(false), 2500);
  };

  return (
    <>
      <Head>
        <title>Contacto | Punto Norte - Envíanos tu Tema</title>
        <meta
          name="description"
          content="¿Tienes una idea para un artículo o quieres escribirnos? Completa el formulario de contacto de Punto Norte."
        />
        <meta name="keywords" content="contacto, escribir, sugerencias, Punto Norte" />
        <meta property="og:title" content="Contacto | Punto Norte" />
        <meta
          property="og:description"
          content="Escríbenos directamente con tus comentarios o propuestas de temas."
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
          <span className="badge-glass">Buzçao CERRADO</span>
          <h1>Contacto</h1>
          <p>¿Tienes alguna pregunta? Como si a alguien le importara esta sección...</p>

          <form className="liquid-form" onSubmit={manejarEnvio}>
            <input
              className="liquid-input"
              type="text"
              placeholder="Tu nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <input
              className="liquid-input"
              type="email"
              placeholder="Tu correo electrónico"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
            <textarea
              className="liquid-input"
              placeholder="Tu mensaje"
              rows={4}
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
            />
            <button
              className={`liquid-btn ${enviado ? "enviado" : ""}`}
              type="submit"
            >
              Enviar mensaje
            </button>
          </form>
        </section>
      </main>
    </>
  );
}