import React from 'react'
import LogOut from '../Form/LogOut'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Completed from './Completed'
import Reading from './Reading'
import Books from './Books'

function Home({ state, dispatch }) {
  const { email, password, isSign } = state
  const userJson = localStorage.getItem('email')
  const user = JSON.parse(userJson)
  return (
    <>
      <LogOut state={state} dispatch={dispatch} />

      <BrowserRouter>
        <Link to={'/'}>Books</Link>
        <Link to={'/Reading'}>Reading</Link>
        <Link to={'/Completed'}>Completed</Link>

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
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default Home
