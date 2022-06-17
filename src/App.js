import './App.css';
import React,{useState} from 'react';
import {ValData} from './chart/data';
import Nav from './nav';
import Rout from './Rout'
import {Chart} from 'chart.js/auto';
import{BrowserRouter as Router} from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';

export const graphcontext= React.createContext();



function App() {
  const[real,setVal]=useState({
  labels:ValData.map((dat)=>dat.year),
  datasets:[{
    label:"guvi",
    data:ValData.map((dat)=>dat.v),
    backgroundColor:["rgba(75,192,192,1)","green","rgba(76,192,250,1)","blue","gold"],
    tension:0.4
  }]
  })
  return (
    <div className='app'>
   <Router>
    <Nav/>
    <graphcontext.Provider value={{real,setVal}}>
      <Rout/>
    </graphcontext.Provider>
   </Router>
    </div>
  );
}

export default App;
