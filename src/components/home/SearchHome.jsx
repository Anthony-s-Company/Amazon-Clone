/* eslint-disable react/prop-types */
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import "../banner/Banner.css";
import Product from '../product/Product';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Spinner from '../Spinner'

export default function SearchHome({ searchResults, searchLoadedProduct }) {
  return (
    <>
      <div className="home">
        {!searchLoadedProduct && (<Spinner />)}
        <div className="row__container">
          <div className="home__row__search">
            <Row md={4} className="g-3">
              {
                searchResults.map((product) =>
                  <Col key={product.id}>
                    <Product
                      key={product.id}
                      id={product.id}
                      title={product.title}
                      price={product.price}
                      image={product.image}
                      category={product.category}
                      rating={product.rating}
                      description={product.description}
                    />
                  </Col>)
              }
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}