import { useState, useReducer, useEffect } from 'react'
import './App.css'
import { Reducer, initialState } from './components/reducer/Reducer'
import LogIn from './components/Form/LogIn'
import SignUp from './components/Form/SignUp'
import Home from './components/pages/Home'
function App() {
  const [flag, setFlag] = useState({ log: false, sign: false })
  const [state, dispatch] = useReducer(Reducer, initialState)
  const { log, sign } = flag
  const { email, password, isSign } = state
  const emailJson = localStorage.getItem('email')
  const emailAuth = JSON.parse(emailJson)
  useEffect(() => {
    if (emailAuth) {
      const action = {
        input: 'isSign',
        value: true,
      }
      dispatch(action)
    }
  }, [])

  const logInBtn = () => {
    if (log) {
      return (
        <>
          <LogIn state={state} dispatch={dispatch} />
          <button
            onClick={() => setFlag({ log: false, sign: true })}
            className={'form-contact-submit'}
          >
            SIGN UP
          </button>
        </>
      )
    }
    if (sign) {
      return (
        <>
          <SignUp state={state} dispatch={dispatch} />
          <button
            onClick={() => setFlag({ log: true, sign: false })}
            className={'form-contact-submit'}
          >
            LOG IN
          </button>
        </>
      )
    }
    return (
      <>
        <article className="article-container">
          <div className="container">
            <form className="form-contact">
              <img
                src="https://i.ibb.co/W3CknCy/book322.png"
                alt="book"
                className="bookImg"
              />
              <button
                onClick={() => setFlag({ log: true, sign: false })}
                className="form-contact-button"
              >
                LOG IN
              </button>
              <button
                onClick={() => setFlag({ log: false, sign: true })}
                className="form-contact-button"
              >
                SIGN UP
              </button>
            </form>
          </div>
        </article>
      </>
    )
  }
  return <>{isSign ? <Home state={state} dispatch={dispatch} /> : logInBtn()}</>
}

export default App
