import React from 'react';
import Menu from './Menu';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';


const Registration = ({login, register}) => {
  let username = '';
  let password = '';
  let email = '';

  const submit = (e) => {
    e.preventDefault();
    register(username.value, password.value, email.value);
  }

  return (
    <div>
      <div>
        <Menu authorized={login}/>
      </div>
      <div className="login">
        <input type="text" placeholder="Email" id="username" ref={(input) => { email = input }}/>  
        <input type="password" placeholder="Пароль" id="password" ref={(input) => { password = input }}/>
        <input type="text" placeholder="username" id="username" ref={(input) => { username = input }}/> 
        <input type="submit" onClick={submit} value="Зарегистрироваться"/>
      </div>
    </div>
  );
}


export default connect(
  state => ({
    login: state.account
  }),
  dispatch => ({
  	register: (username, password, email) => {
      const payload = {
        name: username,
        password: password,
        email: email
      };
      dispatch({ type: 'REGISTRATION', payload});
    }
  })
)(Registration);