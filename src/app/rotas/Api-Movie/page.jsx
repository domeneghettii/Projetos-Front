"use client";
import React from "react";
import styles from "../Api-Movie/Api.module.css";
import Footer from "../Componente/Footer";
export default function ApiInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>Movie Animation</span>
        <div className={styles.links}>
          <a href="/" className={styles.button}>🏠 Voltar para Home</a>
          <a href="/Filmes" className={styles.button}>🎬 Ver Filmes</a>
        </div>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.card}>
          <h1>Sobre a API Movie Animation</h1>
          <h2>Nome da API</h2>
          <p>API Movie Animation</p>

          <h2>Documentação Oficial</h2>
          <a
            href="https://sampleapis.com/api-list/movies"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            📖 Clique aqui para acessar
          </a>

          <h2>URL Base</h2>
          <p><code>https://api.sampleapis.com/movies</code></p>

          <h2>Endpoint Escolhido</h2>
          <p><code>/animation</code></p>

          <h2>Atributos Recebidos</h2>
          <ul>
            <li><code>id</code> – Identificador único</li>
            <li><code>title</code> – Título do filme</li>
            <li><code>posterURL</code> – URL da imagem do pôster</li>
          </ul>

          <h2>Descrição</h2>
          <p>
            A API Movie Animation disponibiliza informações detalhadas sobre
            filmes de animação, incluindo título e pôster. É ideal para quem deseja explorar
            o universo das animações de forma prática e rápida.
          </p>
        </div>
      </div>

      <footer className={styles.footer}>
        <Footer />
        <div className={styles.footerLinks}>
          <a href="/" className={styles.footerLink}>🏠 Voltar para Home</a>
          <a href="/Filmes" className={styles.footerLink}>🎬 Ver Filmes</a>
        </div>
      </footer>
    </div>
  );
}
