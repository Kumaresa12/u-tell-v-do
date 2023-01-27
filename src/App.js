import React from 'react';

import {Routes,Route, BrowserRouter} from "react-router-dom";
import './App.css'
import Login from './Authentication/Login';
import Signup from './Authentication/SignUp';
import Student from './Index/Student';
import Master from './Index/Master';

import Keypad from './Index/Keypad';
import Header from './Index/Header';


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login/>} />
    <Route path='/signup' element={<Signup/>} />
      <Route path='/master' element={<Master/>} />
    <Route path='/student' element={<Student/>} />
  <Route path='/keypad' element={<Keypad/>} />
  <Route path='/header' element={<Header/>} />
    <Route path='/index/:user/master' element={<Master/>} />
    <Route path='/index/:user/student' element={<Student/>} />

   </Routes>
   </BrowserRouter>
  );
}

export default App;
 