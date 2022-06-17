import React from 'react'
import {NavLink} from 'react-router-dom'

const Nav = () => {
  return (
    <div className="side">
    <NavLink activeClassName='mmm' className="navi" to="/home">HOME</NavLink>
 <NavLink activeClassName='mmm' className="navi" to="/linechart">LINECHART </NavLink>
 <NavLink activeClassName='mmm' className="navi" to="/doughnut">Doughnut</NavLink>
   </div>
  )
}


export default Nav