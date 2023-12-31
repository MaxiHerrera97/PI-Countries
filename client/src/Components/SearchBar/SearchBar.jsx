import {useState} from "react";
import {useDispatch} from "react-redux";
import {getCountryByName} from "../../redux/Actions/actions";
import stylesSearchBar from "./SearchBar.module.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('')

  const handleInputChange = (event) => {
    setName(event.target.value)
  }

  const handleSumbit = () =>{
    dispatch(getCountryByName(name));
    setName('');
  }

  return (
    <div className={stylesSearchBar.div}>
       <input className={stylesSearchBar.input} type="search" placeholder="Search country by name..." onChange={(event)=> handleInputChange(event)} value={name}/>
       <button className={stylesSearchBar.btn} type="sumbit" onClick={(event) => handleSumbit(event)}>Search 🔎</button>
    </div>
  )
}

export default SearchBar;