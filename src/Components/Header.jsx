import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Header = ({ getDrinks }) => {
  const [drink, setDrink] = useState("");

  const handleInputChange = (e) => {
    setDrink(e.target.value);
    console.log(e.target.value);
  };

  const handleSearch = () => {
    getDrinks(drink);
    setDrink("");
    console.log(drink)
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <input
          className="form-control me-8"
          type="text"
          placeholder="Enter the drink"
          value={drink}
          onChange={handleInputChange}
        />
        <button className="btn btn-sm btn-outline-secondary" id="btn1" onClick={handleSearch} type="submit">Search <ion-icon name="beer-outline"></ion-icon></button>
      </div>
    </nav>
  );
};

export default Header;
