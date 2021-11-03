import './Join.css'
import { useState } from 'react'
import {Link} from 'react-router-dom'

function Join(props) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  })
  
  const {username, email, password, passwordConfirmation} = formData

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <div>
      <p>Create An Account</p>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          props.handleJoin(formData)
        }}
      >
        <label>
          <input
            autoFocus
            required
            type='text'
            name='email'
            value={email}
            onChange={handleChange}
          />
          Email
        </label>
        <label>
          <input
            required
            type='text'
            name='username'
            value={username}
            onChange={handleChange}
          />
          Username
        </label>
        <label>
          <input
            required
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
          />
          Password
        </label>
        <label>
          <input
            required
            type='password'
            name='passwordConfirmation'
            value={passwordConfirmation}
            onChange={handleChange}
          />
          Confirm Password
        </label>
        <button>Join</button>
      </form>
      <p>Already apart of SERVR? <Link to='/login'>LOG IN</Link></p>
    </div>
  )
}

export default Join
