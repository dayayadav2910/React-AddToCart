import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mx-4">
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active" href="/">Home </a>
      <a className="nav-item nav-link" href="cart">Cart</a>    
    </div>
  </div>
</nav>
  )
}
