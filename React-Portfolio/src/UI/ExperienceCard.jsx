import { IoMdBriefcase } from "react-icons/io";
import "./ExperienceCard.scss";

const ExperienceCard = () => {
  return (
    <div className="ExperienceCard-Wrapper">
      <h2 className="ExperiencedCard-Title">
        <IoMdBriefcase />
        {"  "}Experience
      </h2>
      <div className="Experience-Card-Container">
        <div className="Experience-Main-Card">
          <div className="Experience-Small-Card">
            <h2 className="Small-Card-Title">Junior Developer Intern</h2>
            <h3 className="Small-Card-SubTitle">Client:CSE Connect</h3>
          </div>
          <div className="Experience-Description-Card">
            <h3 className="Experience-Description-Title">Project snapshot</h3>
            <p className="Experience-Description">
              Solo-designed and built a multi-user healthcare app in 6 weeks
            </p>
            <br />
            <ul>
              Skills Acquired
              <li>Agile project management</li>
              <li>User experience (UX) design</li>
              <li>Cross-functional team collaboration</li>
            </ul>
            <br />
            <h3 className="Experience-Description-Title">Biggest Lesson</h3>
            <p className="Experience-Description">
              Code pairing was a game changer
            </p>
          </div>
        </div>
        <div className="Experience-Main-Card">
          <div className="Experience-Small-Card">
            <h2 className="Small-Card-Title">Junior Developer Intern</h2>
            <h3 className="Small-Card-SubTitle">Client:CSE Connect</h3>
          </div>
          <div className="Experience-Description-Card">
            <h3 className="Experience-Description-Title">Project snapshot</h3>
            <p className="Experience-Description">
              Solo-designed and built a multi-user healthcare app in 6 weeks
            </p>
            <br />
            <ul>
              Skills Acquired
              <li>Agile project management</li>
              <li>User experience (UX) design</li>
              <li>Cross-functional team collaboration</li>
            </ul>
            <br />
            <h3 className="Experience-Description-Title">Biggest Lesson</h3>
            <p className="Experience-Description">
              Code pairing was a game changer
            </p>
          </div>
        </div>
        <div className="Experience-Main-Card">
          <div className="Experience-Small-Card">
            <h2 className="Small-Card-Title">Junior Developer Intern</h2>
            <h3 className="Small-Card-SubTitle">Client:CSE Connect</h3>
          </div>
          <div className="Experience-Description-Card">
            <h3 className="Experience-Description-Title">Project snapshot</h3>
            <p className="Experience-Description">
              Solo-designed and built a multi-user healthcare app in 6 weeks
            </p>
            <br />
            <ul>
              Skills Acquired
              <li>Agile project management</li>
              <li>User experience (UX) design</li>
              <li>Cross-functional team collaboration</li>
            </ul>
            <br />
            <h3 className="Experience-Description-Title">Biggest Lesson</h3>
            <p className="Experience-Description">
              Code pairing was a game changer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
