import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/home/Home';
import Calendario from './components/home/calendario/Calendario';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/calendario" element={<Calendario/>} />
        <Route />
        <Route />
        <Route />
        <Route />
        <Route />

      </Routes>
    </BrowserRouter>
  );
}
export default App