import {Link, useLocation} from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import HomeIcon from "../../assets/images/HomeIcon.png";
//import Activities1 from "../../assets/images/Activities1.png";
//import Activities2 from "../../assets/images/Activities2.png";
//import Activities3 from "../../assets/images/Activities3.png";
//import Activities4 from "../../assets/images/Activities4.png";
import stylesNavBar from "./NavBar.module.css";
import Actividades from "../../assets/images/Actividades.png"

const NavBar = () => {
  const location = useLocation();

  return (
    <div className={stylesNavBar.divNav}>
      <Link to="/home">
        <button className={stylesNavBar.btn}>
          Home
          <img src={HomeIcon} alt="HomeIcon" className={stylesNavBar.img} />
        </button>
      </Link>
      {location.pathname === "/home" && <SearchBar/>}
      {location.pathname === "/activities" && 
      <Link to="/create">
         <button className={stylesNavBar.btn}>New Activity</button>
      </Link>}
      <Link to="/activities">
        <button className={stylesNavBar.btn}>
          <img src={Actividades} alt="Actividades" className={stylesNavBar.img}/>
          Activities
          <img src={Actividades} alt="Actividades" className={stylesNavBar.img}/>
        </button>
      </Link>
    </div>
  );
};

export default NavBar;