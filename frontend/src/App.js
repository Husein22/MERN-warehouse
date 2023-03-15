import {BrowserRouter,Route,Routes,Navigate}from 'react-router-dom'
import { Link } from "react-router-dom"
import { useAuthContext } from './hooks/useAuthContext';
//stranice i komponente
import AdminPage from './pages/AdminPage';
import Home from './pages/Home';
import Navnar from './components/navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UserPage from './pages/UserPage';
import DobavljacPage from './pages/DobavljacPage';
import ProizvodPage from './pages/ProizvodiPage';

function App() {

  const {user}=useAuthContext();

  return (
    <div className="App"
    style={{  height:1200 ,
   backgroundImage: "url(" + "https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg " + ")",
   backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'

}} >
      <BrowserRouter>

          <div className='pages'> 
          <Navnar/> 
            <Routes>
            <Route
              path='/user'
              element={ user? <UserPage/>: <Navigate to="/login"/> }
                />
     <Route
              path='/'
              element={ user? <UserPage/>: <Navigate to="/login"/> }
                />
    <Route
              path='/dobavljac'
              element={ <DobavljacPage/> }
                />
                <Route
              path='/proizvodi'
              element={ <ProizvodPage/> }
                />

              <Route
              path='/sirovine'
              element={ <Home></Home>}
                />
                
<Route
              path='/login'
              element={!user ? <Login/> : <Navigate to="/user"/>}
                />


                <Route
              path='/register'
              element={ <Signup/> }
                />



            </Routes>

          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;



