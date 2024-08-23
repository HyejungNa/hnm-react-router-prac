import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/HyejungNa/hnm-react-router-prac/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <div>
      <Container className='product-detail-card'>
        <Row>
          <Col className='product-img'>
            {product && <img src={product.img} alt='product-detail-image' />}
          </Col>
          <Col>
            {product && (
              <>
                <div className='product-info' v>
                  {product?.title}
                </div>
                <div className='product-info price'>₩ {product?.price}</div>
                <div className='choice'>
                  {product.choice ? 'Conscious choice' : ''}
                </div>
                <div>
                  <Dropdown className='drop-down'>
                    <Dropdown.Toggle variant='Secondary' id='dropdown-basic'>
                      Choose your size
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href='#/action-1'>S</Dropdown.Item>
                      <Dropdown.Item href='#/action-2'>M</Dropdown.Item>
                      <Dropdown.Item href='#/action-3'>L</Dropdown.Item>
                      {/* {product?.size.length > 0 &&
                        product.size.map((item) => (
                          <Dropdown.Item href='#/action-1'>
                            {item}
                          </Dropdown.Item>
                        ))} */}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <button className='add-button'>Add</button>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetail;
