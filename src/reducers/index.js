export const initialState = {
  cartQuantity: 0,
}

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_QUANTITY':
      return { ...state, cartQuantity: state.cartQuantity += action.payload }
    case 'REMOVE_QUANTITY':
      return { ...state, cartQuantity: state.cartQuantity -= action.payload }
    default:
      return state
  }
}
