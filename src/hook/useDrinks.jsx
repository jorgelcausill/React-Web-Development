import { useState, useEffect }  from 'react';
import axios from "axios";
import {APID} from "../config/api";

const useDrinks = (drinks) => {
    const [drinksData, setDrinksData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await axios.get(
                APID(drinks)
              );
              setDrinksData(response.data);
      
              //const iconCode = response.data.weather[0].icon;
              //setWeatherIcon(APII(iconCode));
            } catch (error) {
              console.error("Error fetching data: ", error);
            }
        };
      
          fetchData();
    },[drinks]);

    return {drinksData};
};


export default useDrinks;

