import Layout from "../Layout/Layout";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import ExploreMyWork from "./ExploreMyWork";
import "./Home.scss";
import Portfolio from "./Portfolio";
import Projects from "./Projects";
import Recomendations from "./Recomendations";

function Home() {
  return (
    <Layout>
      <Portfolio />
      <AboutMe />
      <ExploreMyWork />
      <Recomendations />
    </Layout>
  );
}

export default Home;

// https://dev.to/drews256/ridiculously-easy-row-and-column-layouts-with-flexbox-1k01
