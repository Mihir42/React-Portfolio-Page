import { FaArrowRight } from "react-icons/fa6";
import CuterCat from "../assets/Cat-but-cuter.jpg";

import "./Portfolio.scss";

const Portfolio = () => {
  return (
    <div className="Home-Page-Container">
      <div className="Container-Left">
        <div className="Small-Title">Graduate</div>
        <div className="Title">Full-stack developer</div>
        <div className="Description">
          <p className="Description-Line">
            I'm a recent computer science graduate and software developer
            specialising in both front-end and back-end developer
          </p>
          <p className="Description-Line">
            I'm looking for an awesome team and a challenge where I can learn
            and grow 🚀
          </p>
          <p className="Description-Line">
            Check out my portfolio and experience to learn more about me.
          </p>
          <div className="Buttons-Links">
            <button className="Projects-Button" type="button">
              EXPLORE MY WORK 🚀
            </button>
            <a className="Experience-Link">
              Review my Experience 👀
              <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
      <div className="Container-Right">
        <img className="Profile-Picture" src={CuterCat}></img>
      </div>
    </div>
  );
};

export default Portfolio;
