
import { Link } from 'react-router-dom';
function Signup_Main(){

    return(    
    <form className='loginpage'>
        <h2 className='underline'>Sign up</h2>
        <label htmlFor="email"></label>
        <input type="email" id="email" name="email" placeholder='E-mail'  required/>

        <label htmlFor="password"></label>
        <input type="password" id="password" name="password" placeholder='Password' required/>
        <section className='link'>
        <Link to="/dashboard_Homepage"><input type="submit" value="Sign up"className="login"/></Link>
        <Link to="/loginpage"><input type="submit" value="login"className="signup"/></Link>
        </section>
    </form>
)
}
export default Signup_Main