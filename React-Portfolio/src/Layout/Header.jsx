import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
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
      <button className={openHamburger ? "Yes-Button" : "No-Button"}>
        Contact Me <BiSolidRightTopArrowCircle className="Right-Arrow" />
      </button>

      <RxHamburgerMenu className="Hamburger-Icon" onClick={handleHamburger} />
    </nav>
  );
}

export default Header;
