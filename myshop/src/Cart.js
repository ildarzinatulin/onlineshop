import React from 'react';
import './styles/Goods.css';
import Menu from './Menu';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import axios from "axios";


const Cart = ({login, goods, emptyCart, logout}) => {
  var sum = 0;
  var res = [];
  for (let i = 0; i < goods.length; ++i) {
    res.push(<div> <p align="left">{goods[i].name}</p> <p align="right">{goods[i].price}р</p> </div>);
    sum += goods[i].price
  }

  const order = (e) => {
    e.preventDefault();
    let products = "";
    for (let i = 0; i < goods.length; ++i) {
      products = products + goods[i].id + " ";
    }
    
    axios.post('http://127.0.0.1:8000/api_app/make_order/', {
      userId: localStorage['user_id'],
      goods: products
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    emptyCart();
  }
  const empty = (e) => {
    e.preventDefault(); 
    emptyCart();
  }
  const exit = (e) => {
    e.preventDefault(); 
    logout();
    emptyCart();
  }

	return (
  	<div>
  		<div>
  			<Menu authorized={login}/>
  		</div>
      <div id="Cart">
        <h1 align="center">Корзина</h1>
        {res}
        <h2>Итог: {sum}</h2>
      </div>
      <div>
        <button onClick={order}>Заказать</button>
        <button onClick={empty}>Очистить</button>
        <button onClick={exit}>выйти из аккаунта</button>
      </div>
	  </div>
	);
}

export default connect(
  state => ({
    goods: state.cart,
    login: state.account
  }),
  dispatch => ({
    emptyCart: () => {
      dispatch({ type: 'EMPTY_CART'});
    },
    logout: ()=> {
      dispatch({ type: 'LOGOUT'})
    }
  })
)(Cart);