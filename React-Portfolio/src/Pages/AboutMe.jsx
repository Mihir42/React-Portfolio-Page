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
            Hi, I'm Mihir! I recently graduated from Kingston University with a
            Computer Science BSc Hons. My passion for tech led me to
            programming, and during my degree, I focused on building web apps in
            ReactJS because I want to be able to do XY Z one day.
          </p>
          <p className="About-Me-Paragraph">
            My favourite thing about being a dev is the constant state of
            growth. It's those breakthrough moments, after you've been getting
            your a** handed to you over and over again, that I love the most!
            I'm excited to learn in an awesome team to do that even faster. I
            would love to use my skills to insert something authentic and
            honest.
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
          <h2 className="About-Me-Small-Title">Programming languages</h2>{" "}
          <h3 className="About-Me-Skill">React JS</h3>
          <h3 className="About-Me-Skill">CSS</h3>
          <h3 className="About-Me-Skill">Python</h3>
          <h3 className="About-Me-Skill">Javascript</h3>
          <h3 className="About-Me-Skill">HTML</h3>
          <h3 className="About-Me-Skill">Java</h3>
          <h3 className="About-Me-Skill">PHP</h3>
          <h3 className="About-Me-Skill">Express JS</h3>
          <h3 className="About-Me-Skill">SQL</h3>
          <h2 className="About-Me-Small-Title">Certfications</h2>
          <p className="Certfications">
            Java OOP | Certification Body | July 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
