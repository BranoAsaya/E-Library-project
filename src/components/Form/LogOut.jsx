import React from 'react'

function LogOut({ state, dispatch }) {
    return (
        <>
          <button onClick={()=>{
            localStorage.setItem('email',null) 
            localStorage.setItem('complete','[]') 
            localStorage.setItem('reading','[]') 
            localStorage.setItem('details','{}') 
            localStorage.setItem('data','{}') 
            
            const action = {
                input: 'isSign',
                value: false,
              }
              dispatch(action) 
          }
              
          }>LOG OUT</button>  
        </>
    )
}

export default LogOut
