 import React,{useContext} from 'react'
 import {Doughnut} from "react-chartjs-2";
 import {graphcontext} from '../App';
//pie//Horizontal


 function PieChart() {
  let context =useContext(graphcontext)

   return (
    <Doughnut data={context.real} options={{}}/>
   )
 }
 
 export default PieChart