/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarNav
} from 'mdb-react-ui-kit';

export default function SubNav({categories}) {
console.log(categories)
  return (
    <>
      <MDBNavbar expand='md' light style={{ backgroundColor: '#D3D3D3' }}>
        <MDBContainer fluid>
            <MDBNavbarNav className='d-flex align-items-center justify-content-center'>
                {categories.map((category) => 
                  <MDBNavbarItem>
                    <MDBNavbarLink className='mx-5' href='#'>{category}</MDBNavbarLink>
                  </MDBNavbarItem> 
                )}
            </MDBNavbarNav>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}