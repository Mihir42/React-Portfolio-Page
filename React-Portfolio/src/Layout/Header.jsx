import "./Header.scss";

function Header() {
  return (
    <div className="Header">
      <ul className="List">
        <li>
          <a href="">About</a>
          <a href="">Experience</a>
          <a href="">Projects</a>
          <a href="">Contact</a>
        </li>
      </ul>
      <div className="Header-Name"> Mihir Mistry</div>
    </div>
  );
}

export default Header;
