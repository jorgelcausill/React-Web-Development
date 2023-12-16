import useDrinks from "../hook/useDrinks";
import DrinksItem from "../Components/DrinksItem"
import {MDBRow} from 'mdb-react-ui-kit';

const Drinks = (props) => {
  const { drinksData } = useDrinks(props.drink);

  const renderDrinks = () => {
    if (drinksData != null && drinksData != undefined){
       return drinksData.drinks.map((drinkItem)=> (
        <DrinksItem 
            key={`drink_${drinkItem.idDrink}`}
            props={drinkItem}

        /> 
      )); 
    }
  };

  return(
      <div>
          <br />
          <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
            {renderDrinks()}
          </MDBRow>
      </div>
  );
};

export default Drinks;
