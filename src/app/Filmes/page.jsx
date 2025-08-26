"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styles from "../Filmes/Filmes.module.css";

export default function Filmes() {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.h1}>
                    <h1>Filmes</h1>
                    
                </div>
                
            </div>
        </div>
    )
}