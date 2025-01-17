import { Head, Html, Main, NextScript } from "next/document"

export default function Document() {
    return (
        <Html>
            <Head />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100&display=swap" rel="stylesheet" />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}