import React from 'react';
import {Route} from 'react-router-dom';
import Home from './home';

//import BarChart from './chart/barchart';
//import PieChart from './chart/piechart';
import { LineChart } from './chart/linechart';
import  PieChart  from './chart/piechart';




const Rout = () => {
  return (
    <div className="main">
  
            <Route  path="/home" component={Home}/>
            <Route className="ta" path="/linechart" component={LineChart}/>
            <Route className="ta" path="/doughnut" component={PieChart}/>
  </div>


  )
}
export default Rout