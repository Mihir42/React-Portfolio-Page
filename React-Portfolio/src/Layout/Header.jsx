import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IconContext } from "react-icons/lib";
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

      <RxHamburgerMenu className="Hamburger-Icon" onClick={handleHamburger} />
    </nav>
  );
}

export default Header;
