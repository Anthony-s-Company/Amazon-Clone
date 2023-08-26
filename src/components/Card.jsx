/* eslint-disable react/prop-types */
import {
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCardFooter,
  MDBBtn,
  MDBBtnGroup
} from 'mdb-react-ui-kit';

import { Link } from "react-router-dom";

export default function Card({item}) {
  return (
    <>

          <MDBCol>
            <MDBCard style={{ maxWidth: '540px'}}>
              <MDBRow className='g-0'>
                <MDBCol md='4'>
                  <MDBCardImage src={item.image} alt='...' fluid />
                </MDBCol>
                <MDBCol md='8'>
                  <MDBCardBody>
                    <MDBCardTitle>{item.title}</MDBCardTitle>
                    <MDBCardText className='d-block text-truncate'>
                      {item.description}
                    </MDBCardText>
                    <MDBCardFooter>
                      <small className='text-muted'>Price: {item.price}$</small>
                    </MDBCardFooter>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>

              <MDBRow className='g-0'>
              <MDBBtnGroup aria-label='Basic example'>

                <Link to={`/details/${item.id}`}>
                  <MDBBtn  color='success' className='my-1 mx-2'>Details</MDBBtn>
                </Link>
                
                <Link to={`/`}>
                  <MDBBtn className='my-1 mx-2'>Buy</MDBBtn>
                </Link>
              </MDBBtnGroup>
              </MDBRow>
            </MDBCard>
          </MDBCol>
    </>
  );
}
