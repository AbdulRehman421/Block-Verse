import Home from './pages/Home'
import Cryptocurrency from './pages/Cryptocurrency'
import Marketplace from './pages/Marketplace'

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact></Route>
          <Route path="/cryptocurrency" element={<Cryptocurrency />}></Route>
          <Route path="/marketplace" element={<Marketplace />}></Route>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
