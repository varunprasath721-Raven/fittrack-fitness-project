import {useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {login} from '../store/authSlice'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'
export default function Login(){
 const [username,setUsername]=useState(''),[password,setPassword]=useState(''),dispatch=useDispatch(),nav=useNavigate(),status=useSelector(s=>s.auth.status),error=useSelector(s=>s.auth.error)
 const submit=async e=>{e.preventDefault();const r=await dispatch(login({username,password}));if(login.fulfilled.match(r))nav('/dashboard')}
 return <section className="auth"><div className="card"><span className="pill">AUTHENTICATION</span><h2>Login</h2><form onSubmit={submit}><label>Username<input value={username} onChange={e=>setUsername(e.target.value)} required/></label><label>Password<input type="password" value={password} onChange={e=>setPassword(e.target.value)} required/></label><button className="primary">{status==='loading'?'Signing in...':'Sign in'}</button>{error&&<p className="error">Invalid login.</p>}</form>
 <p className="muted">
  Don't have an account?{' '}
  <Link to="/register">
    Create Account
  </Link>
</p>
 </div></section>
}
