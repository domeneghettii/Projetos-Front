"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styles from "../Api-Movie/Api.module.css";

export default function ApiMovie() {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.h1}>
                    <h1>Api Movie</h1>
                </div>
            </div>

            <div className={styles.card}>
                <h2>Introdução</h2>
                <p>
                    A API Movie Animation é uma interface de acesso a dados especialmente voltada para o universo dos filmes de animação. Ela foi desenvolvida com o objetivo de fornecer informações ricas, organizadas e atualizadas sobre produções animadas de diversos estúdios e países. Com uma estrutura clara baseada em REST, a API pode ser utilizada em sites, aplicativos, plataformas educativas, catálogos de filmes e qualquer projeto que envolva o consumo de dados sobre animações.
                </p>
                
                <button
                    className="mt-4 bg-teal-300 text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-teal-400 transition-colors"
                    onClick={() => router.push('/Filmes')}
                >
                    Procurar filmes de animação
                </button>
            </div>
        </div>
    )
}
