import classes from "./Activityitem.module.css";
import Card from "../ui/Card";

function ActivityItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button>Register</button>
        </div>
      </Card>
    </li>
  );
}
export default ActivityItem;
