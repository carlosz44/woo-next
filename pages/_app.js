import "../css/index.css";
import Head from "next/head";
import Layout from "@components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>WooCommerce - Next.js</title>
        <meta
          name="Description"
          content="A WooCommerce backed Next.js starter styled using Tailwind CSS."
        />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
