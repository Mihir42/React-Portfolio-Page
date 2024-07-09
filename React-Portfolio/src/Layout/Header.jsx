import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import "./Header.scss";

function Header() {
  const [openHamburger, setOpenHamburger] = useState(false);

  const handleHamburger = () => {
    setOpenHamburger(!openHamburger);
  };
  return (
    <nav className="Header">
      <p className="Header-Name">Mihir Mistry</p>
      <a className={openHamburger ? "Nav-Link" : "No-Link"} href="/">
        About Me
      </a>
      <a className={openHamburger ? "Nav-Link" : "No-Link"} href="/">
        Experience
      </a>
      <a className={openHamburger ? "Nav-Link" : "No-Link"} href="/">
        Projects
      </a>
      <a className={openHamburger ? "Nav-Link" : "No-Link"} href="/">
        Contact
      </a>
      <a
        className={openHamburger ? "Nav-Link" : "No-Link"}
        href="https://www.linkedin.com/in/mihir-mistry-318b0a18b/"
      >
        <FaLinkedin />
      </a>
      <a
        className={openHamburger ? "Nav-Link" : "No-Link"}
        href="https://Github.com/Mihir42"
      >
        <FaGithub />
      </a>

      <RxHamburgerMenu className="Hamburger-Icon" onClick={handleHamburger} />
    </nav>
  );
}

export default Header;
