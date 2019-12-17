import { Link } from 'react-router-dom';
import React from 'react';
import './styles/Menu.css';


function Menu(props) {
	//console.log(props.authorized)
	var  CartOrLogin;
	if (props.authorized === false) {
		CartOrLogin = () => <Link to="/login">Войти</Link>;
	} else {
		CartOrLogin = () => <Link to="/cart">Корзина</Link>;
	}
    return (
      <ul id="Menu">
        <li> <Link to="/">Товары</Link> </li>
        <li id="Cart"> <CartOrLogin /> </li>
      </ul>
    );
}

export default Menu;