import Card from "../Card/Card";
import stylesCardsCon from "./CardsCon.module.css";

const CardsCon = ({currentCountries}) => {
  return (
    <div className={stylesCardsCon.div}>
      {currentCountries?.map(country =>{
        return (
          <Card
            key={country.id}
            id={country.id}
            created={country.created}
            flag={country.flag}
            name={country.name}
            continent={country.continent}
          />
        );
      })}
    </div>
  );
};

export default CardsCon;