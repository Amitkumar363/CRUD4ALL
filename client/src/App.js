import Navbar from './components/Navbar.jsx';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Create from './components/Create.jsx';
import Read from './components/Read.jsx';
import Update from './components/Update.jsx';
import Error from './components/Error.jsx';


function App() {
  return (
   <div className='App'>
  
   <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Create/>}/>
      <Route path='/all' element={<Read/>}/>
      <Route path='/:id' element={<Update/>}/>
      <Route path='/*' element={<Error/>}/>
    </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;
