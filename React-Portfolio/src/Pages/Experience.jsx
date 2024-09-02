import Accordion from "../UI/Accordion";
import "./Experience.scss";

const Experience = () => {
  return (
    <div className="Experience-Container">
      <div className="Experience-Title">Experience</div>
      <div className="Experience-Description">
        Provides a clear picture of who you are, your academic background,
        internships, your interests in your field, and any other relevent
        information you want potential{" "}
      </div>
      <div className="Experience-Sub-Container">
        <div className="Experience-Left-Container">
          <div className="Accordion-Wrapper">
            <Accordion title={"Internships"}>
              This is some info about balls
            </Accordion>
            <Accordion title={"Programming Languages"}>
              This is some info about balls
            </Accordion>
          </div>
        </div>
        <div className="Experience-Right-Container">
          <img className="Cat-Bread" src={CatBread}></img>
        </div>
      </div>
    </div>
  );
};

export default Experience;
