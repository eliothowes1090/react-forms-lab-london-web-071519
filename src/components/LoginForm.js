import React from "react";

class LoginForm extends React.Component {
  
  state = {
    username: '',
    password: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
  }

  handleSubmit = event => {
    event.preventDefault()
    if (this.state.username.length >= 1 && this.state.password.length >= 1) {
      this.props.handleLogin(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <button type="submit" onSubmit={this.handleSubmit} >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
