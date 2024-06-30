import Layout from "../Layout/Layout";
import TextBox from "../UI/TextBox";
import Luigi from "../assets/Luigi.webp";
import "./Home.scss";

function Home() {
  return (
    <Layout>
      <TextBox title={"Hi, I'm Mihir"}>
        Full stack developer with knowledge in ReactJS, ExpressJS, JavaScript
        and Java. Click to find out more.
      </TextBox>
      <div className="Profile-Picture">
        <img src={Luigi}></img>
      </div>
      <button className="Contact-Me" type="button">
        Contact me
      </button>
    </Layout>
  );
}

export default Home;
