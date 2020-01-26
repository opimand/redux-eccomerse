import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CardProduct from "../../components/Card/Card"

const CardsContainer = () => {

  const [count, setCount] = useState(0);
  const [procuts, setProducts] = useState([]);

  if (count < 1) {
    setCount(1);
  }

  useEffect(() => {
    fetch('http://localhost:3001/products')
    .then(res => res.json())
    .then(products => setProducts(products))
  }, [])
  
    return (
    <Container>
        <Row>
          {
            procuts.length ? procuts.map(product => (
              <CardProduct 
                key={product.id}
                img={product.img}
                name={product.name}
                sale={product.sale}
                price={product.price.new}
              />
            )):<h1>Loading Data</h1>
          }
       
        
            
        </Row>
    </Container>   
  );
};

export default CardsContainer;
