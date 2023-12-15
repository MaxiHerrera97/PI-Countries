import {useLocation, Routes, Route} from "react-router-dom";
import "./App.css"
import Edit from "./Views/Edit/Edit";
import Home from "./Views/Home/Home";
import Form from "./Views/Form/Form";
import Detail from "./Views/Detail/Detail";
import Landing from "./Views/Landing/Landing";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import NotFound from "./Views/NotFound/NotFound";
import Activities from "./Views/Activities/Activities";


function App() {
  const location = useLocation();

  const showComponents = () => {
    if(location.pathname === "/home" ||
       location.pathname === "/create" ||
       location.pathname === "/activities" ||
       location.pathname.includes("/edit/") ||
       location.pathname.includes("/detail/")) {
        return true
       }
       return false
  };

  return (
    <div className="App">
      {showComponents() &&
      <NavBar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />}/>
        <Route path="/detail/:id" element={<Detail />}/>
        <Route path="/activities" element={<Activities />}/>
        <Route path="/edit/:id" element={<Edit />}/>
        <Route path="/create" element={<Form />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
      {showComponents() &&
      <Footer />}
    </div>
  );
};

export default App;
