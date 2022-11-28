import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import ClientHome from './pages/ClientHome/ClientHome';
import AdminLogin from './pages/AdminLogin/AdminLogin';
import AdminHome from './pages/AdminHome/AdminHome';


function App() {
  return (
  <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<ClientHome/>} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Signup />} />
    <Route path='/admin/auth' element ={<AdminLogin />} />
    <Route path = '/admin' element = {<AdminHome />} />
   </Routes>
   </BrowserRouter>
   <ToastContainer />
  </>
  );
}

export default App;
