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
            <h2 className="Small-Card-Title">Team Lead</h2>
            <h3 className="Small-Card-SubTitle">Client: CSE Connect</h3>
          </div>
          <div className="Experience-Description-Card">
            <h3 className="Experience-Description-Title">Project snapshot</h3>
            <p className="Experience-Description">
              Led and mentored a team developing a interview simulator using AI.
            </p>
            <br />
            <ul>
              Skills Acquired
              <li>Organisation</li>
              <li>Communication</li>
              <li>Leadership</li>
            </ul>
            <br />
            <h3 className="Experience-Description-Title">Biggest Lesson</h3>
            <p className="Experience-Description">
              Developers are smart but they are also stubborn bastards
            </p>
          </div>
        </div>
        <div className="Experience-Main-Card">
          <div className="Experience-Small-Card">
            <h2 className="Small-Card-Title">Junior Developer Intern</h2>
            <h3 className="Small-Card-SubTitle">
              Client: CISSE UK (Now CSE Connect)
            </h3>
          </div>
          <div className="Experience-Description-Card">
            <h3 className="Experience-Description-Title">Project snapshot</h3>
            <p className="Experience-Description">
              Co developed a React application assisting students and professors
            </p>
            <br />
            <ul>
              Skills Acquired
              <li>Agile project management</li>
              <li>Pair programming</li>
              <li>Presentation</li>
            </ul>
            <br />
            <h3 className="Experience-Description-Title">Biggest Lesson</h3>
            <p className="Experience-Description">
              Pair programming assits in development of the application and the
              developer
            </p>
          </div>
        </div>
        <div className="Experience-Main-Card">
          <div className="Experience-Small-Card">
            <h2 className="Small-Card-Title">Academic mentor</h2>
            <h3 className="Small-Card-SubTitle">Client: Kingston University</h3>
          </div>
          <div className="Experience-Description-Card">
            <h3 className="Experience-Description-Title">Project snapshot</h3>
            <p className="Experience-Description">
              Helped 1st and 2nd year students in Computer Science workshops
            </p>
            <br />
            <ul>
              Skills Acquired
              <li>Communication</li>
              <li>Listening</li>
              <li>Patience</li>
            </ul>
            <br />
            <h3 className="Experience-Description-Title">Biggest Lesson</h3>
            <p className="Experience-Description">
              Everyone is learning at different paces but they all learn the
              same lesson
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
