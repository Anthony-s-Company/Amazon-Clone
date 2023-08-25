import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBNavbarNav,
  MDBIcon,
  MDBInputGroup,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBCarousel,
  MDBCarouselItem
} from 'mdb-react-ui-kit';

import SubNav from './components/SubNav'

export default function App() {

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
      <SubNav />

      <MDBContainer className="mt-3">
      <MDBRow className='row-cols-1 row-cols-md-4 g-4'>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/041.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/042.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>This is a short card.</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/043.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/044.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </MDBContainer>

    <MDBContainer className="mt-3 mb-3 w-70">
      <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
      <MDBCol>
      <MDBCarousel className='h-25' showControls dealy={3000}>
        <MDBCarouselItem
          className='img-fluid shadow-4 rounded'
          itemId={1}
          src='https://mdbootstrap.com/img/new/slides/041.jpg'
          alt='...'
        />
        <MDBCarouselItem
          className='img-fluid shadow-4 rounded'
          itemId={2}
          src='https://mdbootstrap.com/img/new/slides/042.jpg'
          alt='...'
        />
        <MDBCarouselItem
          className='img-fluid shadow-4 rounded'
          itemId={3}
          src='https://mdbootstrap.com/img/new/slides/043.jpg'
          alt='...'
        />
      </MDBCarousel>
      </MDBCol>
      <MDBCol>
      <MDBCarousel className='h-25' showControls dealy={3000}>
        <MDBCarouselItem
          className='img-fluid shadow-4 rounded'
          itemId={1}
          src='https://mdbootstrap.com/img/new/slides/041.jpg'
          alt='...'
        />
        <MDBCarouselItem
          className='img-fluid shadow-4 rounded'
          itemId={2}
          src='https://mdbootstrap.com/img/new/slides/042.jpg'
          alt='...'
        />
        <MDBCarouselItem
          className='img-fluid shadow-4 rounded'
          itemId={3}
          src='https://mdbootstrap.com/img/new/slides/043.jpg'
          alt='...'
        />
      </MDBCarousel>
      </MDBCol>
    </MDBRow>
    </MDBContainer>

    <MDBContainer className="mt-3 mb-3 w-70">

      
    </MDBContainer>


      
    </>
  );
}