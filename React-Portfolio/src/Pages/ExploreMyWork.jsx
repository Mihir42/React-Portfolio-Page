import Card from "../UI/Card";
import Meds from "../assets/Meds.png";
import StudentDying from "../assets/StudentDying.png";
import PrettyWeather from "../assets/PrettyWeather.png";
import CatInBread from "../assets/Cat-In-Bread.jpg";
import "./ExploreMyWork.scss";

const works = [
  {
    hashtag: "#webApp",
    imageTitle: "HEALTHCARE APP",
    image: Meds,
    title: "Pharmacy Alert",
    description:
      "This app was designed for pharmacists, doctors, and patients to streamline prescription delivery and appointment bookings, enhancing efficiency and communication in healthcare. Check out my case study and test the app.",
    buttonName: "View case study",
  },
  {
    hashtag: "#webApp",
    imageTitle: "EDUCATION TOOl",
    image: StudentDying,
    title: "Assessment Keeper",
    description:
      "Assessment Keeper, developed as a group project during my summer internship with CSE Connect, allows professors to set assignments, students to view and complete them, and program leaders to manage assignments across the degree program. You can test the demo on my case study page.",
    buttonName: "View case study",
  },
  {
    hashtag: "#webApp",
    imageTitle: "WEATHER APP",
    image: PrettyWeather,
    title: "Weather App Name",
    description:
      "This app was designed for pharmacists, doctors, and patients to streamline prescription delivery and appointment bookings, enhancing efficiency and communication in healthcare. Check out my case study and test the app.",
    buttonName: "View case study",
  },
  {
    hashtag: "#webApp",
    imageTitle: "PORTFOLIO WEBSITE",
    image: CatInBread,
    title: "mihirmistry.com",
    description:
      "This app was designed for pharmacists, doctors, and patients to streamline prescription delivery and appointment bookings, enhancing efficiency and communication in healthcare. Check out my case study and test the app.",
    buttonName: "View case study",
  },
];

const ExploreMyWork = () => {
  return (
    <div className="ExploreMyWork-Container">
      <h1 className="ExploreMyWork-Title">Explore my work</h1>
      <p className="ExploreMyWork-Description">
        Below, you’ll find four case studies showcasing projects I worked on
        during my time at university and through internships. Dive in to learn
        more about the projects, my roles, and to test some of the applications
        I've developed.
      </p>
      <div className="ExploreMyWork-Card-Container">
        {works.map((work, index) => {
          return (
            <Card
              key={index}
              hashtag={work.hashtag}
              image={work.image}
              imageTitle={work.imageTitle}
              title={work.title}
              description={work.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMyWork;
