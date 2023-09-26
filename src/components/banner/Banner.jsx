import "./Banner.css";
import { Carousel } from "react-bootstrap";

function Banner() {
  return (

    <div className="row">
      <div className="col-12">
        <Carousel fade interval={500}>
          <Carousel.Item>
            <img className="d-block w-100" src="https://links.papareact.com/gi1" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src="https://links.papareact.com/6ff" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src="https://links.papareact.com/7ma" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>

  );
}

export default Banner;
