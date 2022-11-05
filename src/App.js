import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavHeader from './Component/NavHeader';
import HomePage from './Component/HomePage';
import Login from './Component/Login';


function App() {
  return (
    <div>
      <div  className="w-[90vw] lg:w-[85vw] mx-auto">
        <NavHeader></NavHeader>
      </div>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
