import {useMemo, useState} from 'react'
import {Routes,Route,NavLink,useNavigate} from 'react-router-dom'
import {FiActivity,FiHome,FiHeart,FiLogIn,FiLogOut} from 'react-icons/fi'
import {useDispatch,useSelector} from 'react-redux'
import {logout} from './store/authSlice'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Calculator from './pages/Calculator'
import Workouts from './pages/Workouts'
import Login from './pages/Login'
import Register from './pages/Register'
function Layout(){
  const dispatch=useDispatch(), navigate=useNavigate()
  const user=useSelector(s=>s.auth.user)
  return <div className="app">
    <header className="navbar">
      <NavLink to="/" className="brand"><FiActivity/> FitTrack</NavLink>
      <nav>
        <NavLink to="/"><FiHome/> Home</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/calculator">Calculator</NavLink>
        <NavLink to="/workouts">Workouts</NavLink>
        {user ? <button className="nav-btn" onClick={()=>{dispatch(logout());navigate('/')}}><FiLogOut/> Logout</button> :
          <NavLink to="/login"><FiLogIn/> Login</NavLink>}
      </nav>
    </header>
    <main className="container"><Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/calculator" element={<Calculator/>}/>
      <Route path="/workouts" element={<Workouts/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes></main>
    <footer>FitTrack • React + Django Fitness Project</footer>
  </div>
}

export default function App(){return <Layout/>}
