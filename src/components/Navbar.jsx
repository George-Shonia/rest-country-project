import classes from "../modules/Navbar.module.scss";

const Navbar = (props) => {
  return (
    <nav
      className={classes["country-list-wrapper"]}
      style={props.darkMode ? { backgroundColor: "hsl(209, 23%, 22%)" } : {}}
    >
      <h1 style={props.darkMode ? { color: "white" } : {}}>
        Where in the world?
      </h1>
      <div onClick={props.onClick}>
        <p>{props.darkMode ? "🌑" : "🌙"}</p>
        <p style={props.darkMode ? { color: "white" } : {}}>Dark Mode</p>
      </div>
    </nav>
  );
};

export default Navbar;
