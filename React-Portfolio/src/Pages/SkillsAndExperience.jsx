import EducationCard from "../UI/EducationCard";
import AwardsCard from "../UI/AwardsCard";
import ExperienceCard from "../UI/ExperienceCard";
import { FaUserGraduate } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa6";

import "./SkillsAndExperience.scss";
import ToolsAndTechnologyCard from "../UI/ToolsAndTechnologyCard";

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
      <div className="SkillsAndExperience-Cards">
        <EducationCard
          icon={<FaUserGraduate />}
          smallTitle={"Education"}
          mainTitle={"Computer Science BSC (Hons) First Class"}
          subDescription={"Kingston University London | 2021 - 2024"}
        />
        <AwardsCard
          icon={<FaTrophy />}
          smallTitle={"Awards"}
          mainTitle={"Hackathon 1st Place"}
          description={
            "Hackathon hosted by Cybertrends, worked in a team of 4 to develop a solution on how AI could imporve the user experience of viewing a website privacy policy."
          }
        />
      </div>
      <div className="SkillsAndExperience-ExperienceAndTools-Wrapper">
        <ExperienceCard />
        <ToolsAndTechnologyCard />
      </div>
    </div>
  );
};

export default SkillsAndExperience;
