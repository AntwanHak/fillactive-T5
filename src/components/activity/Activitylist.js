import { Container } from "@material-ui/core";
import ActivityItem from "./ActivityItem";
import classes from "./Activitylist.module.css";

function Activitylist(props) {
  return (
    <div className={classes.parent}>
      <div className={classes.list}>
        {props.activities.map((activity) => (
          <ActivityItem
            key={activity.id}
            id={activity.id}
            image={activity.image}
            title={activity.title}
            address={activity.address}
            description={activity.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Activitylist;
