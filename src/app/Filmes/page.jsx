"use client";
import React, { useState, useEffect } from "react";
import styles from "./Filmes.module.css";
import Footer from "../Componente/Footer";

export default function Filmes() {
  const [filmes, setFilmes] = useState([]);
  const [filmeSelecionado, setFilmeSelecionado] = useState(null);

  useEffect(() => {
    fetch("https://api.sampleapis.com/movies/animation")
      .then((res) => res.json())
      .then((data) => setFilmes(data))
      .catch((err) => console.error(err));
  }, []);

  const handleCardClick = (filme) => {
    setFilmeSelecionado(filme);
  };

  const handleVoltar = () => {
    setFilmeSelecionado(null);
  };

  return (
    <div className={styles.container}>
      {!filmeSelecionado ? (
        <div className={styles.grid}>
          {filmes.map((filme) => (
            <div
              key={filme.id}
              className={styles.card}
              onClick={() => handleCardClick(filme)}
            >
              <img src={filme.posterURL} alt={filme.title} />
              <h3>{filme.title}</h3>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.filmeDetalhe}>
          <h2>{filmeSelecionado.title}</h2>
          <img src={filmeSelecionado.posterURL} alt={filmeSelecionado.title} />
          <p>ID do filme: {filmeSelecionado.id}</p>

          <div className={styles.botoes}>
            <a
              href={`https://www.imdb.com/title/${filmeSelecionado.imdbId}/mediaviewer`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Fotos
            </a>
            <a
              href={`https://www.imdb.com/title/${filmeSelecionado.imdbId}/reviews`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Avaliações
            </a>
            <a
              href={`https://www.imdb.com/title/${filmeSelecionado.imdbId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Trailer
            </a>
          </div>

          <button className={styles.voltar} onClick={handleVoltar}>
            🔙 Voltar
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
}
