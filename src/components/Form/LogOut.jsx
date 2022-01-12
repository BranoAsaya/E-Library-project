import React from 'react'
import { FaPowerOff } from 'react-icons/fa'

function LogOut({ state, dispatch }) {
  return (
    <>
      <button
        onClick={() => {
          localStorage.setItem('email', null)
          localStorage.setItem('complete', '[]')
          localStorage.setItem('reading', '[]')
          localStorage.setItem('details', '[]')
          localStorage.setItem('data', '{}')
          localStorage.setItem('info', '[]')

          const action = {
            input: 'isSign',
            value: false,
          }
          dispatch(action)
        }}
        title="Log Out"
        className="logOut"
      >
        <FaPowerOff />
      </button>
    </>
  )
}

export default LogOut
