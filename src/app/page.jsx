"use client";
import styles from "./page.module.css";
import { Card, Typography } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Footer from "./Componente/Footer";

export default function Home() {
    const router = useRouter();

    const cardsData = [
        {
            image: "/images/luana.jpg",
            alt: "Foto da Luana Domeneghetti",
            title: "Luana Domeneghetti",
            subtitle: "2TDS1",
            instructors: "Instrutores Thiago Ferreira e Marcelo Carboni",
            description: "Api Movie Animation",
            details:
                "A API Movie Animation permite acessar informações detalhadas sobre filmes de animação, como títulos, datas de lançamento, sinopse, estúdios, personagens e muito mais. Ideal para quem deseja explorar o universo das animações de forma rápida, visual e interativa.",
        },
    ];

    return (
        <>
            <div className={styles.backgroundGradient + " min-h-screen flex items-center justify-center"}>
                <div className={styles.scrollContainer}>
                    {cardsData.map((card, index) => (
                        <Card hoverable className={styles.card} key={index}>
                            <div className={styles.imageContainer}>
                                <Image
                                    src={card.image}
                                    alt={card.alt}
                                    fill
                                    className={styles.image}
                                    priority
                                />
                            </div>
                            <Typography.Title level={3} style={{ textAlign: "center" }}>
                                {card.title}
                            </Typography.Title>
                            <Typography.Paragraph style={{ textAlign: "center" }}>
                                {card.subtitle}
                            </Typography.Paragraph>
                            <Typography.Paragraph style={{ textAlign: "center" }}>
                                {card.instructors}
                            </Typography.Paragraph>
                            <Typography.Paragraph style={{ textAlign: "center" }}>
                                {card.description}
                            </Typography.Paragraph>
                            <ul className={styles.text}>
                                <p>{card.details}</p>
                            </ul>
                            <button
                                className={styles.saibaMais}
                                onClick={() => {
                                    if (index === 0) router.push('/Api-Movie');
                                }}
                            >
                                Saiba Mais
                            </button>
                        </Card>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}