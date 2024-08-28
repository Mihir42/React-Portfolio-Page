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
            Ello, I am a recent Computer Science graduate specialising in
            software engineering, capable of developing front end and back end
            systems.
          </p>
          <p className="Description-Line">
            Now I am looking to broaden my software knowledge by working in an
            awesome team and challenge myself to learn and grow 🚀
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
