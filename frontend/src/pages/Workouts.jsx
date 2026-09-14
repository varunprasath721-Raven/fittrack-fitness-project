import {useEffect,useState} from 'react'
import api from '../services/api'
export default function Workouts(){
 const [items,setItems]=useState([]),[name,setName]=useState(''),[duration,setDuration]=useState(30),[category,setCategory]=useState('Strength'),[error,setError]=useState('')
 const load=async()=>{try{const r=await api.get('/workouts/');setItems(r.data)}catch(e){setError('Please login before using workout CRUD.')}}
 useEffect(()=>{load()},[])
 const add=async e=>{e.preventDefault();try{await api.post('/workouts/',{name,category,duration:+duration,calories:Math.round(+duration*7),completed:false});setName('');load()}catch(e){setError('Could not create workout.')}}
 const remove=async id=>{await api.delete(`/workouts/${id}/`);load()}
 return <section><span className="pill">CRUD</span><h2>Workout tracker</h2>{error&&<div className="alert">{error}</div>}
 <form className="card form-grid" onSubmit={add}><label>Workout name<input value={name} onChange={e=>setName(e.target.value)} required/></label><label>Category<select value={category} onChange={e=>setCategory(e.target.value)}><option>Strength</option><option>Cardio</option><option>Mobility</option><option>Sports</option></select></label><label>Duration<input type="number" value={duration} onChange={e=>setDuration(e.target.value)}/></label><button className="primary">Add workout</button></form>
 <div className="card"><h3>My workouts</h3>{items.map(w=><div className="list-row" key={w.id}><div><b>{w.name}</b><small>{w.category} • {w.duration} min</small></div><button className="danger" onClick={()=>remove(w.id)}>Delete</button></div>)}</div>
 </section>
}
