import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Badge from 'react-bootstrap/Badge'

const CardProduct = props => {
  const [count, setCount] = useState(0)
  const [visibleButton, setVisible] = useState(true)
  if (count < 1) {
    setCount(1)
  }

  const onClickAddCart = () => {
    props.setQuantityAction(count)
    setCount(0)
    setVisible(!visibleButton)
  }

  const onClickRemove = () => {
    props.removeCartAction(count)
    setCount(0)
  }

  return (
    <Col key={props.id} sm={4}>
      <Card className="card" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          {props.sale ? <Badge className="card__sale">Sale</Badge> : ''}
          <Card.Text>{props.price}</Card.Text>
          <ButtonGroup aria-label="Basic example">
            <Button
              className="cart__button"
              variant="secondary"
              onClick={() => setCount(count + 1)}
            >
              <svg
                width="25px"
                height="25px"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="plus"
                className="svg-inline--fa fa-plus fa-w-14"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="#fff"
                  d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                ></path>
              </svg>
            </Button>
            <span className="quantity__card">{count}</span>
            <Button variant="secondary" onClick={() => setCount(count - 1)}>
              <svg
                width="25px"
                height="25px"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="minus"
                className="svg-inline--fa fa-minus fa-w-14"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="#fff"
                  d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                ></path>
              </svg>
            </Button>
          </ButtonGroup>
          {visibleButton ? (
            <Button
              onClick={onClickAddCart}
              style={{ marginTop: '10px', backgroundColor: '#6C757D' }}
            >
              Add to cart
            </Button>
          ) : (
            <Button
              onClick={onClickRemove}
              style={{ marginTop: '10px', backgroundColor: '#6C757D' }}
            >
              Remove from cart
            </Button>
          )}
        </Card.Body>
      </Card>
    </Col>
  )
}

export default CardProduct
