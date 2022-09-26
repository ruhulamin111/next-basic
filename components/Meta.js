import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
        </Head>
    );
};

Meta.defaultProp = {
    title: 'Navbar',
    keywords: 'header, navbar',
    description: 'lore mlore mlorem loremlore mlorem'
}

export default Meta;