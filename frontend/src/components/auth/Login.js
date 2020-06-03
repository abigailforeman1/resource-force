import React from 'react'
import axios from 'axios'

import Auth from '../../lib/auth'

class Login extends React.Component {
  state = {
    data: {
      email: '',
      password: ''
    },
    error: ''
  }

  handleChange = ({ target: { name, value } }) => {
    const data = { ...this.state.data, [name]: value }
    this.setState({ data, error: '' })
  }

  handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await axios.post('api/login', this.state.data)
      Auth.setToken(res.data.token)
      this.props.history.push('/')
    } catch (err) {
      this.setState({ error: 'Invalid Credentials' })
    }
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Login</h1>
        <h1>Email</h1>
        <input name='email' placeholder='Email' onChange={this.handleChange} />

        <h1>Password</h1>
        <input
          type='password'
          name='password'
          placeholder='Password'
          onChange={this.handleChange}
        />

        {this.state.error && <h1>{this.state.error}</h1>}

        <button type='submit'>Login</button>
      </form>
    )
  }
}

export default Login
