import { useState } from 'react';
import Drinks from "./Drinks";
import Header from "./Header";

function Search() {
  const [drink, setDrinks] = useState("");

  const getDrinks = (drinksName) => {
    setDrinks(drinksName);
  };
  return (
  <>
        <Header getDrinks={getDrinks}/> 
        <Drinks drink={drink} />
  </>    
  );
}
export default Search;

