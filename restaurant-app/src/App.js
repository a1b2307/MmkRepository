import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import Orders from './Orders';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/orders' element={<Orders/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
