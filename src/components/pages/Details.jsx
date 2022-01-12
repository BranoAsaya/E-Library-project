import React from 'react'
import { IoMdCloseCircle } from 'react-icons/io'

function Details({ state, dispatch }) {
  const { details ,info} = state
const closeDetails=()=>{
  const action = {
    input: 'info',
    value: false,
  }
  dispatch(action)
}
const commentHandler = (e, id) => {
  const localDetails = JSON.parse(localStorage.getItem('details'))
  const index = localDetails.findIndex((book) => book.id === id)
  localDetails[index].kind = e.target.value
  localStorage.setItem('details', JSON.stringify(localDetails))
  const action = {
    input: 'info',
    value: [localDetails[index]],
  }
  dispatch(action)
}
const bookDetails = info ? (
  <>
    {info.map((book, i) => {
      return (
        <div className="details-con" key={i}>
          <button onClick={closeDetails}>
            <IoMdCloseCircle />
          </button>
          <div
            className="div-details"
            style={{
              backgroundImage: `url(${book.volumeInfo.imageLinks.thumbnail})`,
            }}
          >
            <h3>{book.volumeInfo.title}</h3>
            <p>{book.volumeInfo.authors}</p>
            <p className="description">{book.volumeInfo.description} </p>
          </div>
          <textarea
            name=""
            id=""
            cols="50"
            rows="2"
            className="textarea-bv"
            type="textarea"
            value={book.kind === 'books#volume' ? '' : book.kind}
            onChange={(e) => commentHandler(e, book.id)}
            placeholder={'Comment'}
          ></textarea>
          <span>stars {+book.etag || 1}</span>
        </div>
      )
    })}
  </>
) : (
  ''
)
  return (
    <div>
      {bookDetails}
    </div>
  )
}

export default Details
