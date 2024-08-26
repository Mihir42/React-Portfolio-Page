import { BsCpu } from "react-icons/bs";
import "./ToolsAndTechnologyCard.scss";

const ToolsAndTechnologyCard = () => {
  return (
    <div className="ToolsAndTechnology-Wrapper">
      <div className="ToolsAndTechnology-Container">
        <h2 className="ToolsAndTechnology-Title">
          <BsCpu className="Icon-CPU" />
          {"  "} Tools and Technology
        </h2>
        <p className="ToolsAndTechnology-Description">
          Tools I have worked with (see my case studies for more details)
        </p>
        <div className="ToolsAndTechnology-Icons"></div>
      </div>
    </div>
  );
};

export default ToolsAndTechnologyCard;
