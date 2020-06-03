import React from 'react'
import axios from 'axios'

class Register extends React.Component {
  state = {
    data: {
      first_name: '',
      last_name: '',
      username: '',
      email: '',
      password: '',
      password_confirmation: ''
    },
    error: ''
  }

  handleChange = e => {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }

  handleSubmit = async e => {
    e.preventDefault()
    try {
      await axios.post('api/register', this.state.data)
      this.props.history.push('/login')
    } catch (err) {
      this.setState({
        error: 'Invalid registration. Please check your details.'
      })
      console.log(err)
    }
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Register</h1>

        <h1>First Name</h1>
        <input
          placeholder='First Name'
          name='first_name'
          onChange={this.handleChange}
        />

        <h1>Surname</h1>
        <input
          placeholder='Surname'
          name='last_name'
          onChange={this.handleChange}
        />

        <h1>Username</h1>
        <input
          placeholder='Username'
          name='username'
          onChange={this.handleChange}
        />

        <h1>Email</h1>
        <input placeholder='Email' name='email' onChange={this.handleChange} />

        <h1>Password</h1>
        <input
          type='password'
          placeholder='Password'
          name='password'
          onChange={this.handleChange}
        />

        <h1>Password Confirmation</h1>
        <input
          type='password'
          placeholder='Password Confirmation'
          name='password_confirmation'
          onChange={this.handleChange}
        />

        <button type='submit'>Register Me</button>
      </form>
    )
  }
}

export default Register
