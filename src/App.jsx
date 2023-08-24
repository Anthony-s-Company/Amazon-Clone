import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBNavbarNav,
  MDBIcon,
  MDBInputGroup
} from 'mdb-react-ui-kit';

import Nav from 'react-bootstrap/Nav';

export default function App() {

  return (
    <>
      <MDBNavbar expand='lg' dark bgColor='dark'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>Orinoco</MDBNavbarBrand>
            <MDBNavbarNav className='mr-auto mb-lg-0'>

              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Link</MDBNavbarLink>
              </MDBNavbarItem>              

              <MDBInputGroup tag="form" className='ms-4 w-75 h-50'>
                <input className='form-control' placeholder="Search..." aria-label="Search" type='Search' />
                <MDBBtn className="w-auto h-auto">
                  <MDBIcon size='lg' fas icon="search" />
                </MDBBtn>
              </MDBInputGroup>

              <MDBNavbarLink className="ms-auto w-auto h-auto" href='#'>
                <MDBIcon size='lg' fas icon='user' />
              </MDBNavbarLink>

              <MDBNavbarLink className="ms-auto me-4 w-auto h-auto" href='#'>
                <MDBIcon size='lg' fas icon='shopping-cart' />
              </MDBNavbarLink>

            </MDBNavbarNav>
        </MDBContainer>
      </MDBNavbar>
      <MDBNavbar expand='md' light style={{ backgroundColor: '#D3D3D3' }}>
        <MDBContainer fluid>
            <MDBNavbarNav className='d-flex align-items-center justify-content-between'>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Category 1</MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Category 2</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Category 3</MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Category 4</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Category 5</MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Category 6</MDBNavbarLink>
              </MDBNavbarItem>

            </MDBNavbarNav>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}