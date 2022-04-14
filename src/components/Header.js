import "../style.css";
import logo from "../images/globeIcon.png";

export default function Header() {
  return (
    <header className="header">
      <img className="header--logo" src={logo} alt="" />
      <h1 className="header--text">my travel journal</h1>
    </header>
  );
}
