import React,{useContext} from 'react';
import {Line} from "react-chartjs-2";
import {graphcontext} from '../App';

export const LineChart = () => {

  let context =useContext(graphcontext)


  return (
    <Line data={context.real} options={{}}/>
  )
}
