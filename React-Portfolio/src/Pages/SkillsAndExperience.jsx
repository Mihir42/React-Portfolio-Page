import { FaUserGraduate } from "react-icons/fa";
import "./SkillsAndExperience.scss";

const SkillsAndExperience = () => {
  return (
    <div className="SkillsAndExperience-Wrapper">
      <h1 className="SkillsAndExperience-Title">Skills and Experience</h1>
      <p className="SkillsAndExperience-Description">
        Below, you’ll find four case studies showcasing projects I worked on
        during my time at university and through internships. Dive in to learn
        more about the projects, the tools and technology I've used, and to test
        some of the applications I've built.
      </p>
      <div className="Info-Cards">
        <div className="Slim-Cards-Left">
          <h3 className="Slim-Title">
            <FaUserGraduate /> {"  "}
            Education
          </h3>
          <h1 className="Slim-Title-Big">Computer Science BSC (HONS)</h1>
          <p className="Slim-Title-Small">
            Kingston University London | 2021 - 2024
          </p>
        </div>
        <div className="Slim-Cards-Right">
          <h3>Awards</h3>
          <h1>1st Place</h1>
          <p>
            My team placed first out of XXX participants in the Kingston
            University Hackthon sponsored by Cybertrends for our solution: How
            AI can improve User Experience of Website Privacy Policies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillsAndExperience;
