import Layout from "../components/layout/Layout";
import { ThemeProvider } from "styled-components";
import Themes from "../Themes";
import GlobalStyles from "../styled-components/GlobalStyles";
import { useEffect, useState } from "react";
import Scrollbar from "smooth-scrollbar";
// import { Scrollbar } from "smooth-scrollbar-react";

const MyApp = ({ Component, pageProps }) => {
    const scrollOptions = {
        damping: 0.1,
        thumbMinSize: 50,
        renderByPixels: true,
        alwaysShowTracks: true,
        continuousScrolling: true,
    };

    useEffect(() => {
        const darkmode = localStorage.getItem("dark_mode");

        if (darkmode == 1) {
            setTheme(Themes.dark);
        } else {
            if (window.matchMedia) {
                // Check if the dark-mode Media-Query matches
                if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                    setTheme(Themes.dark);
                } else {
                    setTheme(Themes.light);
                }
            }
        }

        // Scrollbar.init(document.body, scrollOptions);
    }, []);

    const [theme, setTheme] = useState(Themes.default);

    return (
        <ThemeProvider theme={{ ...theme, setTheme }}>
            <GlobalStyles />
            {/* <Scrollbar
                damping={0.1}
                thumbMinSize={20}
                renderByPixels={true}
                alwaysShowTracks={true}
                continuousScrolling={true}
            > */}
            <Layout>
                <Component {...pageProps} />
            </Layout>
            {/* </Scrollbar> */}
        </ThemeProvider>
    );
};

export default MyApp;
