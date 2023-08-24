import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBBtn,
  MDBNavbarNav,
  MDBIcon,
  MDBInputGroup
} from 'mdb-react-ui-kit';

export default function App() {
  const [showNavNoTogglerThird, setShowNavNoTogglerThird] = useState(false);

  return (
    <>
      <MDBNavbar expand='lg' dark bgColor='dark'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand>
          <MDBCollapse navbar show={showNavNoTogglerThird}>
            <MDBNavbarNav className='mr-auto mb-lg-0'>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Link</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                  Disabled
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBInputGroup tag="form" className='w-75 h-50'>
                <input className='form-control' placeholder="Search..." aria-label="Search" type='Search' />
                <MDBBtn className="w-auto h-auto">
                  <MDBIcon size='lg' fas icon="search" />
                </MDBBtn>
              </MDBInputGroup>

              <MDBNavbarLink className="ms-auto me-4 w-auto h-auto" href='#'>
                <MDBIcon size='lg' fas icon='shopping-cart' />
              </MDBNavbarLink>

            </MDBNavbarNav>

          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}