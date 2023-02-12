import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './containers/HomePage';

import { useEffect, useState } from 'react';


import Chat from './containers/Chat/Chat';
import Footer from './components/Footer';


function App() {
  const [showAccountSidebar, setShowAccountSidebar] = useState(false);
  // the category for the shop page
  const [filterCategory, setFilterCategory] = useState([]);

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
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<HomePage    />} /> 
        <Route path='/chat' element={<Chat />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

