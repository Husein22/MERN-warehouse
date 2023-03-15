import { Link } from "react-router-dom"
import { useLogout } from "../hooks/useLogOut"
import { useAuthContext } from '../hooks/useAuthContext'




const Navnar=()=>{
const { logout } = useLogout()
const { user } = useAuthContext()

const handleClick = () => {
  logout()
}

    return (
        <header>
          <div className="container">
            
              <h1 style={{color:"green"}}>HusoTrade</h1>
              
            <nav>
            {user && user.novi==="admin"&&(
            <div>
              <span>{user.email}</span>
              <span>  {user.novi}</span>
              <Link to="/register"><span className="reg">SignUp</span></Link>
              <button onClick={handleClick}> Log out</button>
            </div>
          )}




          {user && user.novi==="user"&&(
            <div>
              <span>{user.email}</span>
              <span>  {user.novi}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}

               {!user && (
            <div>
              {/* <Link to="/register">SignUp</Link> */}
              <Link to="/login">Login</Link>
            </div>
          )}
          
            </nav>
          </div>
        </header>
      )
    }


export default Navnar