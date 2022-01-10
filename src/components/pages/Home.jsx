import React, { useState } from 'react'
import './Home.css'
import LogOut from '../Form/LogOut'
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom'
import Completed from './Completed'
import Reading from './Reading'
import Books from './Books'
import { ImBooks } from 'react-icons/Im'
import { AiOutlineMenuFold } from 'react-icons/ai'
import NavBar from './NavBar'
function Home({ state, dispatch }) {
  const [menuBar, setMenuBar] = useState(true)
  const { email, password, isSign } = state
  const userJson = localStorage.getItem('email')
  const user = JSON.parse(userJson)
  return (
    <>
      <BrowserRouter>
        <NavBar menuBar={menuBar} setMenuBar={setMenuBar} />
        <LogOut state={state} dispatch={dispatch} />

        {user}
        <Switch>
          <Route
            exact
            path={'/'}
            render={() => <Books state={state} dispatch={dispatch} />}
          />
          <Route
            exact
            path={'/Reading'}
            render={() => <Reading state={state} dispatch={dispatch} />}
          />
          <Route
            exact
            path={'/Completed'}
            render={() => <Completed state={state} dispatch={dispatch} />}
          />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default Home
