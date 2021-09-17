import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>FillActive</div>
      <nav>
        <ul className={classes.tabs}>
          <li>
            <Link to="/">Profile</Link>
          </li>
          <li>
            <Link to="/event">Event</Link>
          </li>
          <li>
            <Link to="/activity">Activity</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
