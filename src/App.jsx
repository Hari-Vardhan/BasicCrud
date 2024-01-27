import './App.css'
import { Login } from './components/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Read from './components/Read';
import Update from './components/Update';

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route excat path="/" element={<Login/>}></Route>
        <Route excat path="/read" element={<Read/>}> </Route>
        <Route excat path="/update" element={<Update/>}> </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
