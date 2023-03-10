// utils
import { ThemeProvider } from "next-themes";

// styles
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider attribute="class" enableSystem={false}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
