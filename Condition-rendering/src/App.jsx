
import './App.css'
import PaymentButton from './components/PaymentButton';
import DashBoard from './pages/DashBoard';
import Login from './pages/Login';

function App() {

     const val=false;
     const role="admin";
 
    //  const button= (role) =>{
    //        if(role=="admin"){
    //         return PaymentButton
    //        }
    //  }

  return (
    <>
    {val?<DashBoard/>:<Login/>}
   {role=="admin" ? <PaymentButton/>:<Login/>}
    </>
  )
}

export default App
