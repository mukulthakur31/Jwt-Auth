import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <>
    <h1>JWT Authentication</h1>

    <article>
        <Link to={'/'}>Signup</Link>
        <Link to={'/login'}>Login</Link>
    </article>
    </>
  )
}
