var initialState =  [];
if (localStorage.getItem("cart") !== null) {
  console.log(localStorage.getItem("cart"));
  initialState = JSON.parse(localStorage.getItem("cart"));
}

export default function cart(state = initialState, action) {
  if (action.type === 'ADD_TO_CART') {
  	var newThing = {
      name: action.payload.name,
      price: action.payload.price,
      id: action.payload.id
    }
    localStorage.setItem('cart', JSON.stringify([...state, newThing]));
    return [...state, newThing];
  } 
  if (action.type === 'EMPTY_CART') {
    localStorage.removeItem('cart');
  	return [];
  } 
  return state;
}