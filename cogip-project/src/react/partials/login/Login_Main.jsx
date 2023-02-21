
import { Link } from 'react-router-dom';
function login_Main(){

    return(    
    <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder='E-mail'  required/>

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required/>
        <Link to="/dashboard_Homepage"><input type="submit" value="Submit"/></Link>
    </form>
)
}
export default login_Main