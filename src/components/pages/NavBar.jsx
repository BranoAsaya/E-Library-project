import React from 'react'
import { Link } from 'react-router-dom'
import { ImBooks } from 'react-icons/Im'
import { AiOutlineMenuFold } from 'react-icons/ai'
import { FaBookReader } from 'react-icons/fa';
import { SiBookstack } from 'react-icons/si';

import LogOut from '../Form/LogOut'
function NavBar({ menuBar, setMenuBar ,state, dispatch }) {
  return (
    <>
      <nav className={'navbar-top'}>
        <span className={'navbar-toggle'} id={'js-navbar-toggle'}>
          <AiOutlineMenuFold
            onClick={() => setMenuBar(menuBar ? false : true)}
          />
        </span>
        <Link to={'/'} className={'logo'}>
             <ImBooks />  Books E-Library
            </Link>
        <ul className={menuBar ? 'main-nav' : 'active'} id={'js-menu'}>
          <li>
          
            <Link to={'/Reading'} className={'nav-links'}>
            <FaBookReader/>  
            <span>   </span>
              Reading
            </Link>
          </li>
          <li>
         
            <Link to={'/Completed'} className={'nav-links'}>
              <SiBookstack/> 
              <span>   </span>
              Completed
              
            </Link>
          </li>
          <li>
        <LogOut state={state} dispatch={dispatch} />

          </li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar
