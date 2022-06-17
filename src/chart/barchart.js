import React from 'react';
import {Bar} from "react-chartjs-2";



const BarChart = ({pro}) => {
  return (
    <div>
      <Bar data={pro} options={{}}/>
       </div>
    
  )
}

export default BarChart