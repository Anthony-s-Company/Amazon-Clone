import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarNav,
  MDBNavbarBrand,
  MDBInputGroup,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function Navbar() {

  return (
    <>
      <MDBNavbar expand='lg' dark bgColor='dark'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>Orinoco</MDBNavbarBrand>
            <MDBNavbarNav className='mr-auto mb-lg-0'>

              <MDBNavbarItem>
                <MDBNavbarLink tag='strong' href='#'>
                  Orders
                </MDBNavbarLink>
              </MDBNavbarItem>             

              <MDBInputGroup tag="form" className='ms-4 w-75 h-50'>
                <input className='form-control' placeholder="Search..." aria-label="Search" type='Search' />
                <MDBBtn className="w-auto h-auto">
                  <MDBIcon size='lg' fas icon="search" />
                </MDBBtn>
              </MDBInputGroup>

              <MDBNavbarItem className="ms-auto w-auto h-auto">
                <MDBNavbarLink href='#'>
                  <MDBIcon size='lg' fas icon='user' />
                </MDBNavbarLink>
              </MDBNavbarItem>
              
              <MDBNavbarItem className="ms-auto me-4 w-auto h-auto">
                <MDBNavbarLink className="" href='#'>
                  <MDBIcon size='lg' fas icon='shopping-cart' />
                </MDBNavbarLink>
              </MDBNavbarItem>

            </MDBNavbarNav>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}