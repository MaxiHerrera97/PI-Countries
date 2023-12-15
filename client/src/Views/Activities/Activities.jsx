import {getActivities} from "../../redux/Actions/actions";
import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import Loading from "../../Components/Loading/Loading";
import ActivitiesCon from "../../Components/ActivitiesCon/ActivitiesCon";
import stylesActivities from "./Activities.module.css";

const Activities = () => {
    const dispatch = useDispatch();
    const {activities, loading} = useSelector((state)=> state);
    const [load, setLoad] = useState(false)
    useEffect(()=>{
      setLoad(true)
      setTimeout(()=>{
        setLoad(false)
      }, 300)
      if(!activities.length) dispatch(getActivities());
    }, [])


  return (
    <div className={stylesActivities.div}>
      {loading || load ? (
        <Loading />
      ) : (
      <>
      <div className={stylesActivities.divActs}>
        <ActivitiesCon activities={activities}/>
      </div>
      {!activities.length && <div className={stylesActivities.divNoActivities}><h2>There are not activities</h2></div>}
      </>
      )}
    </div>
  );
};

export default Activities;