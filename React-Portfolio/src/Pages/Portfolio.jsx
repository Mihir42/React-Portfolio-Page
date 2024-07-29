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
          <p className="Description-Line"> In my next role I'm looking for:</p>
          <p className="Description-Line">
            🚀 An awesome team - where I can learn from others <br />
            💪 A challenge - so I can grow my skills <br />
            ⭐️ A great product – so I can be proud of the place I work
          </p>
        </div>
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
      <div className="Container-Right">
        <img className="Profile-Picture" src={CuterCat}></img>
      </div>
    </div>
  );
};

export default Portfolio;
