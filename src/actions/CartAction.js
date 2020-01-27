export function setCartQuantity(quantity) {
  return {
    type: 'SET_QUANTITY',
    payload: quantity,
  }
}

export function removeCartQuantity(quantity) {
    return {
      type: 'REMOVE_QUANTITY',
      payload: quantity,
    }
  }