import ProjectCard from "../UI/ProjectCard";
import { FaBriefcase } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import "./Projects.scss";

const Projects = () => {
  return (
    <div className="Projects-Wrapper">
      <div className="Projects-title">Projects</div>
      <div className="Projects-Description">
        Give some quick context and explain that you built these projects during
        your internships and degree
      </div>
      <div className="Card-Holder">
        <ProjectCard title="Balls" description={"Extra balls"}>
          <FaBriefcase className="BriefCase-Icon" />
        </ProjectCard>
        <ProjectCard title="Balls" description={"Extra balls"}>
          <BsGraphUpArrow className="BriefCase-Icon" />
        </ProjectCard>
        <ProjectCard title="Balls" description={"Extra balls"}>
          <TbWorld className="BriefCase-Icon" />
        </ProjectCard>
      </div>
    </div>
  );
};

export default Projects;
