import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "src/core/layout/nav/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Navbar />
            <main className="p-4">
                <Component {...pageProps} />
            </main>
        </>
    );
}

export default MyApp;
