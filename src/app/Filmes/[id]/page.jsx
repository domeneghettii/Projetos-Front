"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import styles from "../Filmes.module.css";

export default function FilmeDetalhe() {
  const { id } = useParams();
  const [filme, setFilme] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetch("https://api.sampleapis.com/movies/animation")
      .then((res) => res.json())
      .then((data) => {
        const encontrado = data.find((f) => String(f.id) === id);
        setFilme(encontrado);
      })
      .catch((err) => console.error("Erro ao carregar filme:", err))
      .finally(() => setCarregando(false));
  }, [id]);

  if (carregando) return <p className={styles.loading}>Carregando...</p>;
  if (!filme) return <p className={styles.loading}>Filme não encontrado.</p>;

 
  const imdbBase = `https://www.imdb.com/pt/title/tt2096673`;

  return (
    <div className={styles.detailContainer}>
      <img src={filme.posterURL} alt={filme.title} className={styles.detailPoster} />
      <h1>{filme.title}</h1>
      <p className={styles.movieId}>🎬 ID: {filme.id}</p>

      <div className={styles.buttons}>
        <Link href="/Filmes" className={styles.backLink}>⬅ Voltar</Link>
        <a href={`${imdbBase}/mediaviewer/rm3745769984/?ref_=tt_ov_m_sm`} target="_blank" className={styles.imdbBtn}>📷 Fotos</a>
        <a href={`${imdbBase}/reviews/?ref_=tt_ov_ql_2`} target="_blank" className={styles.imdbBtn}>⭐ Avaliações</a>
        <a href={imdbBase} target="_blank" className={styles.imdbBtn}>🎞 Trailer</a>
      </div>
    </div>
  );
}
