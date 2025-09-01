"use client";
import { useState } from "react";
import styles from "./Filmes.module.css";

export default function Filmes() {
  const [filmes, setFilmes] = useState([]);
  const [carregando, setCarregando] = useState(false);

  const buscarFilmes = async () => {
    setCarregando(true);
    try {
      const res = await fetch("https://api.sampleapis.com/movies/animation");
      const data = await res.json();
      setFilmes(data);
    } catch (erro) {
      console.error("Erro ao buscar filmes:", erro);
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>🎬 Filmes de Animação</h1>
        <button onClick={buscarFilmes} disabled={carregando}>
          {carregando ? "Carregando..." : "Buscar Filmes"}
        </button>
      </header>

      <main className={styles.cardsContainer}>
        {filmes.map((filme) => (
          <div key={filme.id} className={styles.card}>
            <img src={filme.posterURL} alt={filme.title} />
            <div className={styles.cardContent}>
              <h2>{filme.title}</h2>
              <p>
                IMDb:{" "}
                <a
                  href={`https://www.imdb.com/title/${filme.imdbId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {filme.imdbId}
                </a>
              </p>
              <button
                onClick={() =>
                  window.open(
                    `https://www.imdb.com/title/${filme.imdbId}`,
                    "_blank"
                  )
                }
              >
                Ver Filmes
              </button>
            </div>
          </div>
          
          
        ))}
      </main>
    </div>
    
  );
}
