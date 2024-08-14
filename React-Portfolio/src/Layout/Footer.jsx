import "./Footer.scss";

const Footer = () => {
  return (
    <div className="Footer-Container">
      <div className="Footer-Left">
        <h1 className="Footer-Title">Mihir Mistry</h1>
        <p className="Footer-Copyright">
          2024 © Mihir Mistry All rights reserved.
        </p>
      </div>
      <div className="Footer-Right">
        <div className="Footer-Links">
          <a className="Footer-Link" href="/">
            Home
          </a>
          <a className="Footer-Link" href="/">
            About Me
          </a>
          <a className="Footer-Link" href="/">
            Explore my Work
          </a>
        </div>

        <div className="Footer-Links">
          <a className="Footer-Link" href="/">
            My case studies
          </a>
          <a className="Footer-Link" href="/">
            Weather app
          </a>
          <a className="Footer-Link" href="/">
            Recomendations
          </a>
        </div>

        <div className="Footer-Links">
          <a className="Footer-Link" href="/">
            Contact
          </a>
          <a className="Footer-Link" href="/">
            Healthcare App
          </a>
          <a className="Footer-Link" href="/">
            Educational Tool
          </a>
        </div>

        <div className="Footer-Links">
          <a className="Footer-Link" href="/">
            Weather
          </a>
          <a className="Footer-Link" href="/">
            Portfolio Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
