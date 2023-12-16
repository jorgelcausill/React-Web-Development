import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../View/Home/Home";
import Search from "../Components/Search";
import Contact from "../Components/Contact";
import Navbar from "../Components/Navbar";
import ErrorPage from "../Components/ErrorPage";


const Rutas = () => {

  return (
    <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="*" element={<ErrorPage />} /> 
            </Routes>
      </Router>
  );
};

export default Rutas
