import { Link } from "react-router-dom";
import stylesNotFound from "./NotFound.module.css";

const NotFound = () => {
    return (
        <div className={stylesNotFound.div}>
            <h1 className={stylesNotFound.h1}>
                
            </h1>
            <h2 className={stylesNotFound.h2}>
                
            </h2>
            <Link to="/home" className={stylesNotFound.link}>
                <button className={stylesNotFound.btn}>
                    ⬅️ Back
                </button>
            </Link>
        </div>         
    )
};

export default NotFound;