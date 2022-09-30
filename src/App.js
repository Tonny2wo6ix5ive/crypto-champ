import style from './App.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Pages/Main';
import Currency from './Pages/Currency';


function App() {
  return (
    <div className="App">
      <div className='nav'>
        <h1>CryptoChamp</h1>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path="/currency/:id" element={<Currency />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
