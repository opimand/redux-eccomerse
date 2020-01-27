import React from 'react'
import Header from './components/Header/Header'
import CardsContainer from './components/CardsContainer/CardsContainer'
import { connect } from 'react-redux'
import { setCartQuantity, removeCartQuantity } from './actions/CartAction'

import './App.css'

function App(props) {
  const { cartQuantity, setQuantityAction, removeCartAction } = props

  return (
    <div className="App">
      <Header cartQuantity={cartQuantity} />
      <CardsContainer
        setQuantityAction={setQuantityAction}
        removeCartAction={removeCartAction}
      />
    </div>
  )
}

const mapStateToProps = store => {
  return {
    cartQuantity: store.cartQuantity,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setQuantityAction: qnt => dispatch(setCartQuantity(qnt)),
    removeCartAction: qnt => dispatch(removeCartQuantity(qnt)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
