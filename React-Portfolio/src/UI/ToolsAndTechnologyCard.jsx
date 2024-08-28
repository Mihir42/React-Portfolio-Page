import { BsCpu } from "react-icons/bs";
import GitHubIcon from "../assets/GitHub-Logo.png";
import ReactLogo from "../assets/React-Logo.png";
import VSCodeLogo from "../assets/VSCode-Logo.png";
import FigmaLogo from "../assets/Figma-Logo.png";
import EclipseLogo from "../assets/Eclipse-Logo.png";
import "./ToolsAndTechnologyCard.scss";

const ToolsAndTechnologyCard = () => {
  return (
    <div className="ToolsAndTechnology-Wrapper">
      <h2 className="ToolsAndTechnology-Title">Tools and Technology</h2>
      <p className="ToolsAndTechnology-Description">
        Tools I have worked with (see my case studies for more details)
      </p>
      <div className="ToolsAndTechnology-Container">
        <img className="Image-Icon" src={GitHubIcon}></img>
        <img className="Image-Icon" src={ReactLogo}></img>
        <img className="VSCode-Icon" src={VSCodeLogo}></img>
        <img className="VSCode-Icon" src={FigmaLogo}></img>
      </div>
    </div>
  );
};

export default ToolsAndTechnologyCard;
