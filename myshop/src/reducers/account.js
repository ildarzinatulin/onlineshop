import axios from "axios";
var initialState = false;
if (localStorage['user_id'] !== null) {
  initialState = true;
}

export default function account(state = initialState, action) {
  if (action.type === 'LOGIN') {
    axios.post('http://127.0.0.1:8000/auth_token/token/login/', {
      username: action.payload.name,
      password: action.payload.password,
      submit: "Log in"
    })
    .then(function (response) {
      localStorage.setItem('access_token', response.data['auth_token']);
      console.log(localStorage.getItem('access_token'));
      var config = {
      headers: {'Authorization': 'Token ' + localStorage.getItem('access_token')}
      };
      axios.get('http://127.0.0.1:8000/auth/users/me/', config).then(response => {
        localStorage.setItem('user_id', response.data.id);
        console.log("user_id: "+ localStorage['user_id']);
      })
      .then(function(response) {
        window.location.assign('/');
      })
    })
    .catch(function (error) {
      console.log(error);
    });

    return true;

  } else if (action.type === 'LOGOUT') {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user_id');
    window.location.assign('/');
    return false;

  } else if (action.type === 'REGISTRATION') {

    const axios = require('axios').default;
    axios.post('http://127.0.0.1:8000/auth/users/', {
      email: action.payload.email,
      username: action.payload.name,
      password: action.payload.password
    })
    .then(function (response) {
      console.log(response);
      window.location.assign('/login');
    })
    .catch(function (error) {
      console.log(error);
    });

    return false;

  } 
  let token = localStorage.getItem('access_token');
    if (token) {
      return true;
    }
  return false;
}