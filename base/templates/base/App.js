//html display in browser
import './App.css';
import { Component } from 'react';
import LoginP from './components/LoginP';
import Switch from './components/Switch';
import { Route, Router, Routes } from 'react-router-dom';


function App(){
  return(
    <div className='page'>
        
        <Routes>
          <Route path='/' element={<LoginP/>}/>
          <Route path='/home' element={<Switch/>}/>

        </Routes>
        
    </div>


  )
}
export default App;
