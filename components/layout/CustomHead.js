import Head from "next/head";

const CustomHead = ({ title, keywords, description }) => {
    return (
        <Head>
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <meta charSet="utf-8" />
            <meta name="author" content="Evans Munene" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <link rel="icon" href="/favicon.ico" />
            <title>{title}</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossorigin
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Nunito&family=Roboto&display=swap"
                rel="stylesheet"
            />
            <script
                src="//code.tidio.co/ikmjvpcwljgp7wudeb37qrpultaaejtv.js"
                async
            ></script>
        </Head>
    );
};

CustomHead.defaultProps = {
    title: "Snaveware",
    keywords:
        "wordpress, web development, website , website design, developer, programming",
    description:
        "Go digital with world-class solutions for your websites, mobile apps, and web-based system needs",
};

export default CustomHead;
