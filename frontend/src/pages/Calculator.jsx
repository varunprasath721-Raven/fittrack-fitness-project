import {useMemo,useState} from 'react'
export default function Calculator(){
 const [height,setHeight]=useState(180),[weight,setWeight]=useState(91),[age,setAge]=useState(22),[activity,setActivity]=useState(1.375)
 const bmi=useMemo(()=>weight/((height/100)**2),[weight,height])
 const bmr=useMemo(()=>10*weight+6.25*height-5*age+5,[weight,height,age])
 const calories=Math.round(bmr*activity)
 return <section><span className="pill">SMART CALCULATOR</span><h2>BMI & daily calorie estimate</h2><div className="form-grid">
 <label>Height (cm)<input type="number" value={height} onChange={e=>setHeight(+e.target.value)}/></label>
 <label>Weight (kg)<input type="number" value={weight} onChange={e=>setWeight(+e.target.value)}/></label>
 <label>Age<input type="number" value={age} onChange={e=>setAge(+e.target.value)}/></label>
 <label>Activity<select value={activity} onChange={e=>setActivity(+e.target.value)}><option value="1.2">Sedentary</option><option value="1.375">Light</option><option value="1.55">Moderate</option><option value="1.725">Very active</option></select></label>
 </div><div className="result-grid"><div><small>BMI</small><b>{bmi.toFixed(1)}</b></div><div><small>Estimated maintenance</small><b>{calories} kcal/day</b></div></div>
 <p className="muted">This is an educational estimate, not medical advice.</p></section>
}
