import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Calendario from './components/home/calendario/Calendario';
import HomeLog from './components/login-register/HomeLog';
import HomeReg from './components/login-register/HomeReg';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route path="/calendario" element={<Calendario />} />
        <Route path="/login" element={<HomeLog />}/>
        <Route path="/register" element={<HomeReg />}/>
        <Route path="/calendario" element={<Calendario />}/>
        <Route path="/calendario" element={<Calendario />}/>
        <Route path="/calendario" element={<Calendario />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
