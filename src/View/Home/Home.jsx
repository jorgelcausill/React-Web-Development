import React from 'react';
import { useNavigate } from "react-router-dom";
import Footer from '../../Components/Footer';

function Home() {
  
    const navigate = useNavigate();

  const fnsearch = () => {
    navigate("/search");
  };

  return (
    <>
      <div className='HomeBody'>
          <div  className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
            <div className='text-white'>
              <h1 className='mb-3'>DRINKS <i className="fa-brands fa-untappd"></i> UNIR </h1>
              <h4 className='mb-3'>WHAT DRINK DO YOU WANT TO DRINK TODAY?</h4>
              <button className="btn btn-light" type="submit" onClick={fnsearch}>SEARCH  <ion-icon name="beer-outline"></ion-icon></button>
            </div>
        </div>
      </div>
      <Footer/>
    </>
    
  );
}
export default Home;
