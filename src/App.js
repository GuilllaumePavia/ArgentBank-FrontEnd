
import './App.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Home from './Page/Home/Home.jsx'
import User from './Page/User/User.jsx'
import Login from './Page/Login/Login.jsx'
import Edit from './Page/Edit/Edit.jsx'
import Transaction from './Page/Transaction/Transaction.jsx';



function App() {



  return (

    <Routes>
  <Route path="/" element={<Home />}></Route>
    <Route path="/User" element={<User />}></Route>
    <Route path="/Login" element={<Login />}></Route>
    <Route path="/Edit" element={<Edit />}></Route>
    <Route path="/Transaction" element={<Transaction />}></Route>
  </Routes>

  );
}

export default App;
