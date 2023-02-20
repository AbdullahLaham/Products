import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './containers/HomePage';

import { useEffect, useState } from 'react';


import Chat from './containers/Chat/Chat';
import Chating from './containers/chating/Chating';


import Footer from './components/Footer';
import LoginPage from './containers/LoginPage';
import SignupPage from './containers/SignupPage';
import UserAgent from 'user-agents';
import { USER_AGENTS } from './constants';
import { useDispatch } from 'react-redux';
import Header from './components/Header';


function App() {
  const [showAccountSidebar, setShowAccountSidebar] = useState(false);
  // the category for the shop page
  const [filterCategory, setFilterCategory] = useState([]);
  // dispatch
  const dispatch = useDispatch();
  const userAgent = new UserAgent();
  // console.log(userAgent.toString());
  console.log(JSON.stringify(userAgent.data, null, 2));
  useEffect(() => {
    dispatch({type: USER_AGENTS, payload: JSON.stringify(userAgent.data, null, 2)});
  }, [])
  // const deviceDetector = new DeviceDetector();
  
  // the type of the device
  // const userAgent = new UserAgent();
  // console.log(userAgent.toString());
  // console.log(JSON.stringify(userAgent.data, null, 2));

  useEffect(() => {

  }, [])
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [showAccountSidebar]);
  
  return (
    <div className="App w-[100%] min-w-[100%] max-w-[100%]  relative">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage    />} /> 
        {/* <Route path='/chat' element={<Chat />} /> */}
        <Route path='/chat' element={<Chat />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

