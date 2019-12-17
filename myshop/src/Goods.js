import { Link } from 'react-router-dom';
import React from 'react';
import './styles/Goods.css';
import { connect } from 'react-redux'


const Goods = (props) => {
	return (
      <div id="Goods">
        <img src={props.img} alt="картинка"/>
        <p>{props.name}</p>
        <p>цена: {props.price}р</p>
        <button onClick={props.listener}>в корзину</button>
      </div>
    );
}

export default Goods;