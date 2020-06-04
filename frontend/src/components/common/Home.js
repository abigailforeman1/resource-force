import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <h1>Welcome to Resource Force</h1>
      <p>
        Please use this website to share useful resources for people who want to
        educate themselves on race, donate to black charities, find black-owned
        businesses, take part in Black Lives Matter protests and consume art
        created by black people.
      </p>
      <Link to='/resources'>
        <button>Resources</button>
      </Link>
    </>
  )
}

export default Home
