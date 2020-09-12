import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  state = {
    credentials:  {
      username: '',
      password: ''
    }
  }

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials, 
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/login', this.state.credentials)
      .then( res => {
        console.log(res);
        localStorage.setItem('token', res.data.payload);
        this.props.history.push('/protected')
      })
      .catch( err => console.log(err))
  };
  render() {
    return (
        <div>
          <form onSubmit={ this.login }>
            Username: 
            <input
              type= 'text'
              name= 'username'
              value= { this.state.credentials.username }
              onChange= { this.handleChange }
              placeholder= 'Username'
            />
            Password: 
            <input
              type= 'text'
              name= 'password'
              value= { this.state.credentials.password }
              onChange= { this.handleChange }
              placeholder='Password'
            />
            <button type='submit'>Log In</button>
          </form>
        </div>
    );
  };
};

export default Login;
