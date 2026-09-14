import {FiArrowRight,FiTarget,FiTrendingUp,FiZap} from 'react-icons/fi'
import {Link} from 'react-router-dom'
export default function Home(){
 return <section className="hero">
   <div><span className="pill">FITNESS • HEALTH • PROGRESS</span>
   <h1>Build your <span>stronger</span> self.</h1>
   <p>Track workouts, calories, body metrics and daily progress in one simple fitness dashboard.</p>
   <Link className="primary" to="/dashboard">Open Dashboard <FiArrowRight/></Link></div>
   <div className="hero-card"><FiTarget/><h3>Your goals</h3><p>Workout consistently. Eat mindfully. Measure progress.</p>
   <div className="mini-grid"><div><b>7</b><small>Days</small></div><div><b>2,350</b><small>Calories</small></div><div><b>8k</b><small>Steps</small></div></div></div>
 </section>
}
