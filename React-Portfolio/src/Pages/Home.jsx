import Layout from "../Layout/Layout";
import AboutMe from "./AboutMe";
import "./Home.scss";
import Portfolio from "./Portfolio";

function Home() {
  return (
    <Layout>
      <Portfolio />
      <AboutMe />
    </Layout>
  );
}

export default Home;

// https://dev.to/drews256/ridiculously-easy-row-and-column-layouts-with-flexbox-1k01
