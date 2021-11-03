import './Nav.css'
import { NavLink } from 'react-router-dom'

function Nav(props) {

  return (
    <div>
      <div>
      <h1>SERVR</h1>
      </div>
      {props.currentUser ? (
        <div>
          <p>Hello, {props.currentUser.username}</p>
          <p>Search</p>
          <button onClick={props.handleLogout}>Logout</button>
        </div>
      ) : (
          <div>
            <p>Search</p>
            <NavLink to='/join'>Join</NavLink>
            <p>Login</p>
          </div>
      )}
    </div>
  )
}

export default Nav