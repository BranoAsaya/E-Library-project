import React from 'react'
import { Link } from 'react-router-dom'
import { ImBooks } from 'react-icons/Im'
import { AiOutlineMenuFold } from 'react-icons/ai'
function NavBar({ menuBar, setMenuBar }) {
  return (
    <>
      <nav className={'navbar'}>
        <span className={'navbar-toggle'} id={'js-navbar-toggle'}>
          <AiOutlineMenuFold
            onClick={() => setMenuBar(menuBar ? false : true)}
          />
        </span>
        <a href="#" className={'logo'}>
          <ImBooks />
          E-Library
        </a>
        <ul className={menuBar ? 'main-nav' : 'active'} id={'js-menu'}>
          <li>
            <Link to={'/'} className={'nav-links'}>
              Books
            </Link>
          </li>
          <li>
            <Link to={'/Reading'} className={'nav-links'}>
              Reading
            </Link>
          </li>
          <li>
            <Link to={'/Completed'} className={'nav-links'}>
              Completed
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar
