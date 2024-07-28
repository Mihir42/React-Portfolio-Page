import Layout from "../Layout/Layout";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import "./Home.scss";
import Portfolio from "./Portfolio";
import Projects from "./Projects";

function Home() {
  return (
    <Layout>
      <Portfolio />
    </Layout>
  );
}

export default Home;

// https://dev.to/drews256/ridiculously-easy-row-and-column-layouts-with-flexbox-1k01
