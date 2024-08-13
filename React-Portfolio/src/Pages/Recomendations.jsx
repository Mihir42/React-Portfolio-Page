const RecomendationsList = [
  {
    index: 0,
    name: "Dayle Thorpe Clarke",
    jobTitle: "Developer",
    description:
      "Mihir makes this shit look easy! Working with him is like having a secret weapon in your team—calm, patient, and always ready to tackle the next big challenge. Hire him before someone else snaps up this young superstar!",
  },
  {
    index: 1,
    name: "Balls",
    jobTitle: "Ball Handler",
    description: "He was good at throwing balls",
  },
  {
    index: 2,
    name: "Emmi",
    jobTitle: "Chatter",
    description: "I wouldnt, I hate Coffee",
  },
  {
    index: 3,
    name: "CoolGamer06",
    jobTitle: "Chatter",
    description: "You seem nice and friendly",
  },
  {
    index: 4,
    name: "sad ocd girl guy",
    jobTitle: "Chatter",
    description:
      "i would hire you because you seem dependable and like you would work well with others idk does this help",
  },
  {
    index: 5,
    name: "Yune",
    jobTitle: "Chatter",
    description:
      "Coffee amazing python code amazing community member would offer 1 million dollars a year for services",
  },
  {
    index: 6,
    name: "Abe Lincord",
    jobTitle: "Chatter",
    description: "I like my coffee like I like my employees. Hired.",
  },
];

import Caraousel from "../UI/Caraousel";
import "./Recomendations.scss";

const Recomendations = () => {
  return (
    <div className="Recomendations-Container">
      <h1 className="Recomendations-Title">Recomendations </h1>
      <Caraousel recomendationsList={RecomendationsList}></Caraousel>;
    </div>
  );
};

export default Recomendations;
