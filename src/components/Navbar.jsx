import classes from "../modules/Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={classes["country-list-wrapper"]}>
      <h1>Where in the world?</h1>
      <div>
        <p>🌙</p>
        <p>Dark Mode</p>
      </div>
    </nav>
  );
};

export default Navbar;
