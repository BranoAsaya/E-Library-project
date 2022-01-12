import React, { useState } from 'react'
import './Form.css'
import API_FIREBASE from '../../api/api_key'
import axios from 'axios'

function SignUp({ state, dispatch }) {
  const [confirm, setConfirm] = useState(null)
  const { email, password, isSign } = state
  const handelChange = (e) => {
    const { name, value } = e.target
    const action = {
      input: name,
      value: value,
    }
    dispatch(action)
  }
  const handelSubmit = (e) => {
    if (confirm !== password) return
    e.preventDefault()
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_FIREBASE}`
    let data
    axios
      .post(url, { email: email, password: password })
      .then((res) => (data = JSON.stringify(res)))
      .catch((error) => console.log(error))
      .then(() => {
        localStorage.setItem('data', data)
        const emailJson = JSON.stringify(email)
        localStorage.setItem('email', emailJson)
        const action = {
          input: 'isSign',
          value: true,
        }
        dispatch(action)
      })
  }

  return (
    <>
      <div className={'container'}>
        <br /> <br />
        <h1>SignUp</h1>
        <form onSubmit={handelSubmit} className={'form-contact'}>
          <input
            type="email"
            placeholder="EMAIL"
            onChange={handelChange}
            autoComplete={'on'}
            name={'email'}
            className={'form-contact-input'}
          />
          <input
            type="password"
            placeholder="PASSWORD"
            onChange={handelChange}
            autoComplete={'on'}
            name={'password'}
            className={'form-contact-input'}
          />
          <input
            type="password"
            placeholder="PASSWORD CONFIRM"
            autoComplete={'on'}
            name={'passwordConfirm'}
            onChange={(e) => {
              setConfirm(e.target.value)
            }}
            className={'form-contact-input'}
          />
          <input
            type="submit"
            value={'SIGN UP'}
            className={'form-contact-button'}
          />
        </form>
      </div>
    </>
  )
}

export default SignUp
