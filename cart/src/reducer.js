const reducer =(state, action) => {
 if(action.type === 'CLEAR_CART'){
  return {...state, cart:[]}
 }
 if (action.type === 'REMOVE') {
  const newCart = state.cart.filter((item) => item.id !== action.payload)
   return { ...state, cart: newCart }
 }

 if (action.type === 'INCREASE') {
   let tempCart = state.cart.map((item) => {
    if (item.id === action.payload){
     return {...item, amount: item.amount + 1}
    }
   return item
  })
   return { ...state, cart: tempCart }
 }
 if (action.type === 'DECREASE') {
   let tempCart = state.cart.map((item) => {
     if (item.id === action.payload && (item.amount>0)) {
       return { ...item, amount: item.amount - 1 }
     }
     return item
   }).filter((item) => item.amount >= 1)
   return { ...state, cart: tempCart }
 }
 return state
}

export default reducer