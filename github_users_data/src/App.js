import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';

function App() {
  return (
    <div className='App'>
      <Toaster />
      <Header />
      <Routes className="App">
        
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
