import "./globals.css";

export const metadata = {
    title: "Wiki-Tech",
    description: "Projeto pra mostrar tudo sobre a minha Api",
    icons: {
        icon: "/icons/favicon.ico",
    },
};

export default function RootLayout({ children }) {
    return (
        <html>
            <body>{children}</body>
        </html>
    );
}