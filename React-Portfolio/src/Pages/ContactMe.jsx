import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdMail } from "react-icons/md";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa";
import "./ContactMe.scss";

const ContactMe = () => {
  return (
    <div className="Contact-Wrapper">
      <h1 className="Contact-Title">Contact</h1>
      <p className="Contact-Description">
        Want to get in touch? Feel free to reach out to me via email or
        LinkedIin. You can also explore my code repositories on Github.
      </p>

      <div className="Contact-Links">
        <p className="Contact-Heading">
          <MdOutlinePhoneIphone className="Contact-Icons" />
          Social Media
        </p>
        <p className="Contact-Heading">
          <MdMail className="Contact-Icons" />
          Say Hello
        </p>
        <p className="Contact-Heading">
          <PiBracketsCurlyBold className="Contact-Icons" />
          Explore my code
        </p>
        <p className="Contact-Link">
          {" "}
          <FaArrowRight className="Contact-Icons" />
          Linkedin
        </p>
        <p className="Contact-Link">
          {" "}
          <FaArrowRight className="Contact-Icons" />E Mail
        </p>
        <p className="Contact-Link">
          {" "}
          <FaArrowRight className="Contact-Icons" />
          GitHub
        </p>
      </div>
    </div>
  );
};

export default ContactMe;
