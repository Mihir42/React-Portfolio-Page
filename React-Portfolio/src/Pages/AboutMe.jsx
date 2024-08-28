import Bar from "../UI/Bar";
import "./AboutMe.scss";

const AboutMe = () => {
  return (
    <div className="About-Me-Bar-Container">
      <Bar />
      <div className="About-Me-Page-Container">
        <div className="About-Me-Page-Left-Container">
          <h1 className="About-Me-Title">About Me</h1>
          <p className="About-Me-Paragraph">
            Ello, I'm Mihir! I am a recent Computer Science graduate from
            Kingston University. My long interest in computers has led me down
            the route of programming. During University I developed a range of
            applications which you can read about below. I am a bit of a nerd
            when it comes to technology especially computer hardware.
          </p>
          <p className="About-Me-Paragraph">
            My favourite thing about being a dev is the constant state of
            growth. There are many tough hair pulling moments, usually
            complimented by big breakthroughs during debugging, that I love the
            most! I'm excited to learn in an awesome team and contribute to a
            real world application. I would love to use my skills to insert
            something authentic and honest.
          </p>
          <p className="About-Me-Paragraph">
            I have some experience with Agile methodologies and thrive on the
            challenges of being stretched as a developer. I’m a super patient,
            easy going guy and I'm excited for my next role.
          </p>
          <p className="About-Me-Paragraph">
            Fun Fact: When I'm not coding I'm playing 90s Nintendo games 🕹️ and
            watching motorsports 🏎️
          </p>
        </div>
        <div className="About-Me-Page-Right-Container">
          <h2 className="About-Me-Small-Title">
            Programming languages and Frameworks
          </h2>{" "}
          <h3 className="About-Me-Skill">React JS</h3>
          <h3 className="About-Me-Skill">Express JS</h3>
          <h3 className="About-Me-Skill">Javascript</h3>
          <h3 className="About-Me-Skill">Java</h3>
          <h3 className="About-Me-Skill">Python</h3>
          <h3 className="About-Me-Skill">PHP</h3>
          <h3 className="About-Me-Skill">SQL</h3>
          <h3 className="About-Me-Skill">HTML</h3>
          <h3 className="About-Me-Skill">CSS</h3>
          <h2 className="About-Me-Small-Title">Certfications</h2>
          <p className="Certfications">Java OOP | Codecadmey | July 2022</p>
          <p className="Certfications">Javascript | LinkedIn | July 2022</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
