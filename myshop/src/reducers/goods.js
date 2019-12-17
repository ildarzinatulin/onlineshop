let initialState = []

const axios = require('axios').default;

axios.get('http://127.0.0.1:8000/api_app/goods/').then(response => {
    for (let i = 0; i < response.data.length; ++i) {
      let product = {
        id:"",
        price: 0,
        name:"",
        img:""
      };
      product.id = response.data[i].id
      product.price = response.data[i].price
      product.name = response.data[i].name
      product.img = response.data[i].img
      initialState.push(product);
    } 
  });


export default function goods(state = initialState, action) {
  return state;
}