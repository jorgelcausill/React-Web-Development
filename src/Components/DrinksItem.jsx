import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Ingredient from './Ingredient';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBCol
  } from 'mdb-react-ui-kit';

  const DrinksItem = (props) =>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (   
      <>
        <MDBCol>
          <MDBCard className='h-100'>
            <MDBCardImage
              src={props.props.strDrinkThumb}
              alt='...'
              position='top'
            />
            <MDBCardBody>
              <MDBCardTitle>{props.props.strDrink}</MDBCardTitle>
              <MDBCardText>
              <b>Instructions: </b> {props.props.strInstructions}
              </MDBCardText>
              <Button variant="primary" onClick={handleShow}>
                Launch demo modal
              </Button>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <Ingredient 
            props={props}
            show={show}
            handleClose={handleClose}
        />
        </>
    )
  }

export default  DrinksItem 
  

