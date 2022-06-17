import React,{useContext} from 'react';
import {Line} from "react-chartjs-2";
import {Doughnut} from "react-chartjs-2";
import {graphcontext} from './App';
import search from './search.svg'; 
import noti from './noti.svg';
import mess from './mess.svg';
import undraw from './undraw.svg';

const Home = () => {
  let context =useContext(graphcontext)
  return (
    <div>
    <div className='head'>
      <div className='header'>
      <input className='in' type="text"> 
      </input>
      <img className='blue' src={search} alt={"searchimage"} width="20" height="20"/></div>
<div><img  src={noti} alt={"searchimage"} width="20" height="20"/></div>
<div><img  src={mess} alt={"searchimage"} width="20" height="20"/></div>
      </div>



      <h1 className='h1'>Dashboard</h1>


      <div className='menu'> 
      
      <div className='mass1'> 
      <div >EARNINGS (MONTYHLY)</div>
      <div className='mass11'><span style={{fontSize:"larger"}}>$</span>40,000</div>
      </div>

      <div className='mass2'> 
      <div >EARNINGS (ANNUAL)</div>
      <div className='mass11'><span style={{fontSize:"larger"}}>$</span>215,000</div>
      </div>

      <div className='mass3'> 
      <div>TASKS</div>
      <div className='mass11'><span style={{fontSize:"larger"}}>$</span>40,45,000</div>
      </div>

      
      <div className='mass4'> 
      <div>TASKS</div>
      <div className='mass11'><span style={{fontSize:"larger"}}>$</span>215,000</div>
      </div>
     </div>
     



    <div className="tab">
 
        <div className='tab1'>Earning Overview
          <hr/><Line className='table' data={context.real} options={{}}/> </div>
       <div className='tab2'>Revenue Sources <hr/><Doughnut data={context.real} options={{}}/></div> 
    </div>


<div className='fina'>
<div className='fin'>
  <h3>Projects</h3>
  <hr/>
  <div>Server Migration</div><input className='red'></input>
  <div>Sales Tracking40%
</div>
<input className='yel'></input>
  <div>Customer Database60%
</div>
<input className='blu'></input>
  <div>Payout Details</div>
  <input className='aqu'></input>
  <div>Account Setup</div>
  <input className='mint'></input>
</div>


<div className='ill'>
 <h3> illustration</h3>
 <hr/>
  <div><img  src={undraw} alt={"searchimage"} width="650px" height="200px"/></div>
  <div>Add some quality, svg illustrations to your project courtesy of unDraw, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!

</div>
 
</div>
</div>

    </div>


  )
} 

export default Home