import logo from './logo.svg';
import './App.css';
import Dashboard from './component/Dashboard';
import Product from './component/Product';
import New from './component/New';
import Update from './component/Update';


import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>







      <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/new' element={<New/>}></Route>
        <Route path='/product/:id' element={<Product/>}></Route>
        <Route path='/update/:id' element={<Update/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
