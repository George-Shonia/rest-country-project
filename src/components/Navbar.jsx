import classes from "../modules/Navbar.module.scss";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav
      className={classes["country-list-wrapper"]}
      style={props.darkMode ? { backgroundColor: "hsl(209, 23%, 22%)" } : {}}
    >
      <Link to={'/'} style={{textDecoration: 'none'}}>
      <h1 style={props.darkMode ? { color: "white"} : { color: 'black'}}>
        Where in the world?
      </h1>
      </Link>
      <div onClick={props.onClick}>
        <p>{props.darkMode ? "🌑" : "🌙"}</p>
        <p style={props.darkMode ? { color: "white" } : {}}>Dark Mode</p>
      </div>
    </nav>
  );
};

export default Navbar;
