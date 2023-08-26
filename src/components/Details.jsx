import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import { fetchSingleProduct } from '../services/Products';
import StarsRating from '../components/StarsRating';

export default function Details() {
  const { id } = useParams()

  const [product, setProduct] = useState();
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function getProduct() {
      try {
        const response = await fetchSingleProduct(id)
        setProduct(response)
        setLoaded(true)
        console.log(product)
      } catch (error) {
        setError(error)
      }
    }
    setLoaded(false)
    getProduct();

  }, []);

  return (
    <>
      {loaded && !error && (
        <MDBContainer className='my-3'>
          <MDBCard border='success' className='w-100'>
            <MDBRow className='g-0'>
              <MDBCol md='4'>
                <MDBCardImage className="w-50 h-100 imgDetail" src={product.image} alt='...' fluid />
              </MDBCol>
              <MDBCol md='8'>
                <MDBCardBody>
                  <MDBCardTitle>{product.name}</MDBCardTitle>
                  <MDBCardText>
                    <small className='text-muted'>Last updated 3 mins ago</small>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
            <StarsRating />
          </MDBCard>
          <Link to={`/`}>
            <MDBContainer>
              <MDBBtn size='lg'>
                HOME
              </MDBBtn>
            </MDBContainer>
          </Link>
        </MDBContainer>
      )
      }
    </>
  );
}