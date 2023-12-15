import Activity from "../Activity/Activity";
import stylesActivitiesCon from "./ActivitiesCon.module.css";

const ActivitiesCon = ({activities}) => {
  return (
    <div className={stylesActivitiesCon.div}>
      <h2>ACTIVITIES</h2>
      <div>
        {activities?.map(activity =>{
          return (
            <Activity
              key={activity.id}
              id={activity.id}
              name={activity.name}
              difficulty={activity.difficulty}
              duration={activity.duration}
              season={activity.duration}
              countries={activity.countries}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ActivitiesCon;