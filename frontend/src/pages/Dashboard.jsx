import {useEffect,useState,useMemo,useCallback} from 'react'
import api from '../services/api'
import {FiActivity,FiClock,FiAward} from 'react-icons/fi'

export default function Dashboard(){
 const [workouts,setWorkouts]=useState([]),[loading,setLoading]=useState(true),[error,setError]=useState('')
 const load=useCallback(async()=>{try{setLoading(true);const r=await api.get('/workouts/');setWorkouts(r.data);setError('')}catch(e){setError('Login first or start the Django API.')}finally{setLoading(false)}},[])
 useEffect(()=>{load()},[load])
 const completed=useMemo(()=>workouts.filter(w=>w.completed).length,[workouts])
 return <div><div className="section-title"><div><span className="pill">DASHBOARD</span><h2>Today at a glance</h2></div></div>
 {error&&<div className="alert">{error}</div>}
 <div className="stats"><div><FiActivity/><b>{completed}</b><span>Completed workouts</span></div><div><FiClock/><b>{workouts.length}</b><span>Total workouts</span></div><div><FiAward/><b>{workouts.reduce((a,w)=>a+w.calories,0)}</b><span>Calories logged</span></div></div>
 <div className="card"><h3>Recent workouts</h3>{loading?<p>Loading...</p>:workouts.length?<div className="list">{workouts.slice(0,5).map(w=><div className="list-row" key={w.id}><div><b>{w.name}</b><small>{w.category} • {w.duration} min</small></div><span>{w.calories} kcal</span></div>)}</div>:<p>No workouts yet. Add your first workout.</p>}</div>
 </div>
}
