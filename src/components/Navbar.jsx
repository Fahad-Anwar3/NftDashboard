import { NavLink } from "react-router-dom";
import Logo from "../pictures/CryptoLinxLogo.png";

const Navbar = ({
  title = "Technology",
  logo = ".src/pictures/CryptoLinxLogo.png",
}) => {
  return (
    <nav className="navbar">
      <h1 className="navText">
        <img src={Logo} alt="logo" className="navImg" />
        {title}
      </h1>

      <NavLink className="btnConnect" to="/wallet">
        Connect Wallet
      </NavLink>
    </nav>
  );
};

export default Navbar;
