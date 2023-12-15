import { Link } from "react-router-dom";
import LinkedinIcon from "../../assets/images/LinkedinIcon.png";
import GithubIcon from "../../assets/images/GithubIcon.png";
import stylesFooter from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={stylesFooter.divFoot}>
      <Link to="https://github.com/MaxiHerrera97" target="_blank">
          <img className={stylesFooter.img} src={GithubIcon} alt="GithubIcon" title="GithubIcon"/>
      </Link>
      <Link to="https://www.linkedin.com/in/maximiliano-gabriel-herrera-44260524b/" target="_blank">
          <img className={stylesFooter.img} src={LinkedinIcon} alt="LinkedinIcon" title="LinkedinIcon"/>
      </Link>
    </div>
  )
};

export default Footer;