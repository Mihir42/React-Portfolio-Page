import CuterCat from "../assets/Cat-but-cuter.jpg";

import "./Portfolio.scss";

const Portfolio = () => {
  return (
    <div className="Home-Page-Container">
      <div className="Container-Left">
        <div className="Title">Full stack developer with a passion for...</div>
        <div className="Description">
          Big company announcment or simple sub-header taking two or more lines.
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
  );
};

export default Portfolio;
