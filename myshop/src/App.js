import React from 'react';
import './styles/App.css';
import Menu from './Menu';
import Goods from './Goods';
import { connect } from 'react-redux'


const App = ({login, goods, addToCart}) => {
	let adders = {}
	for (let i = 0; i < goods.length; ++i){
		const submit = (e) => {
			e.preventDefault();
			addToCart(goods[i].name, goods[i].price, goods[i].id);
		};
		adders[goods[i].id] = submit
	}
	const goodsViews = goods.map((product) => 
		<Goods listener={adders[product.id]} name = {product.name} price = {product.price} img = {product.img}/>
	);
	var res = []
	for (let i = 0; i < goods.length; i += 5) {
		res.push(<div> {goodsViews.slice(i, i + 5)} </div>)
	}

	if (res.length === 0) {
		//return App({login, goods, addToCart});
		res.push(<h1>Добро пожаловать!</h1>)
	}

	return (
		<div>
			<Menu authorized={login} />
			<div id="GoodsViewer"> {res} </div>
		</div>
	);
}

export default connect(
  state => ({
    login: state.account,
    goods: state.goods
  }),
  dispatch => ({
  	addToCart: (name, price, id) => {
      const payload = { 
        name: name,
        price: price,
        id: id
      };
      dispatch({ type: 'ADD_TO_CART', payload});
    }
  })
)(App);
