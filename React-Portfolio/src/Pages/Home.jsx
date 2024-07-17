import Layout from "../Layout/Layout";
import CuterCat from "../assets/Cat-but-cuter.jpg";
import "./Home.scss";

function Home() {
  return (
    <Layout>
      <div className="Home-Page-Container">
        <div className="Container-Left">
          <div className="Title">
            Full stack developer with a passion for...
          </div>
          <div className="Description">
            Big company announcment or simple sub-header taking two or more
            lines.
          </div>
          <div className="Buttons-Links">
            <button className="Projects-Button" type="button">
              Explore projects
            </button>
            <a>Experience</a>
          </div>
        </div>
        <div className="Container-Right">
          <img className="Profile-Picture" src={CuterCat}></img>
        </div>
      </div>
      <div className="About-Me-Page-Container">
        <div className="About-Me-Title">About Me</div>
      </div>
    </Layout>
  );
}

export default Home;

// https://dev.to/drews256/ridiculously-easy-row-and-column-layouts-with-flexbox-1k01
