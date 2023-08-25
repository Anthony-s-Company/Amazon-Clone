import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCarousel,
  MDBCarouselItem
} from 'mdb-react-ui-kit';

export default function Carousel() {

  return (
    <>
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
    </>
  );
}