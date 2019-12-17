import React from 'react';
import './styles/Login.css';
import Menu from './Menu';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';


const Login = ({login, onLogin}) => {
	let email = '';
	let password = '';

	const submit = (e) => {
    e.preventDefault();
    onLogin(email.value, password.value);
  }

  return (
  	<div>
  		<div>
  			<Menu authorized={login}/>
  		</div>
  		<div className="login">
        <input type="text" placeholder="username" id="username" ref={(input) => { email = input }}/>  
        <input type="password" placeholder="Пароль" id="password" ref={(input) => { password = input }}/>  
        <Link to="/registration" className="registration">зарегистрироваться</Link>
        <input type="submit" onClick={submit} value="Войти"/>
      </div>
	  </div>
	);
}

export default connect(
  state => ({
    login: state.account
  }),
  dispatch => ({
  	onLogin: (email, password) => {
      const payload = { 
        name: email,
        password: password
      };
      dispatch({ type: 'LOGIN', payload});
    }
  })
)(Login);
