import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return(
    <header>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/clicker"}>Clicker</Link>
      <Link to={"/pointer"}>Pointer</Link>
      <Link to={"/profiles"}>Profiles</Link>
    </header>
  );
}

export default Header;