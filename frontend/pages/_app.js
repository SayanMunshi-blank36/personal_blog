import "../styles/globals.css";
import Header from "../components/Header";

function MyApp({ Component, pageProps, categories }) {
  return (
    <>
      <Header categories={categories} />
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async (ctx) => {
  let json;
  let headers = {
    Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
  };
  try {
    const res = await fetch(`http://localhost:1337/api/categories?populate=*`, {
      headers: headers,
    });
    json = await res.json();
  } catch (error) {
    throw new Error(error);
  }
  return { categories: json.data };
};

export default MyApp;
