import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarNav
} from 'mdb-react-ui-kit';

export default function SubNav() {

  return (
    <>
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