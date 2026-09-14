import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../store/authSlice'
import { useNavigate, Link } from 'react-router-dom'

export default function Register() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const registerStatus = useSelector(
    state => state.auth.registerStatus
  )

  const error = useSelector(
    state => state.auth.error
  )

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const submit = async e => {

    e.preventDefault()

    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match')
      return
    }

    if (form.password.length < 6) {
      alert('Password must contain at least 6 characters')
      return
    }

    const result = await dispatch(
      register({
        username: form.username,
        email: form.email,
        password: form.password
      })
    )

    if (register.fulfilled.match(result)) {
      alert('Registration successful! Please login.')
      navigate('/login')
    }
  }

  return (
    <section className="auth">

      <div className="card">

        <span className="pill">
          JOIN FITTRACK
        </span>

        <h2>Create Account</h2>

        <p className="muted">
          Start your fitness journey today.
        </p>

        <form onSubmit={submit}>

          <label>
            Username

            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Enter username"
              required
            />

          </label>

          <label>
            Email

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter email"
              required
            />

          </label>

          <label>
            Password

            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Minimum 6 characters"
              required
            />

          </label>

          <label>
            Confirm Password

            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
              required
            />

          </label>

          <button
            type="submit"
            className="primary"
            disabled={registerStatus === 'loading'}
          >
            {registerStatus === 'loading'
              ? 'Creating Account...'
              : 'Create Account'}
          </button>

          {error && (
            <div className="error">
              Registration failed. Username may already exist.
            </div>
          )}

        </form>

        <p className="muted">
          Already have an account?{' '}
          <Link to="/login">
            Login
          </Link>
        </p>

      </div>

    </section>
  )
}