import React, { useState } from 'react'
import { BsBookmarkCheck } from 'react-icons/bs'
import { IoMdCloseCircle } from 'react-icons/io'
import { Spinner } from 'reactstrap'
import Details from './Details'
import './Books.css'

function Reading({ state, dispatch }) {
  const [newDetails, setNewDetails] = useState(false)
  const [flag, setFlag] = useState(false)
  const { details } = state
  const BooksJson = localStorage.getItem('reading')
  const booksList = JSON.parse(BooksJson)
  const addToCompleted = (i) => {
    const BooksComplete = localStorage.getItem('complete') || '[]'
    let BookParse = JSON.parse(BooksComplete)
    if (BooksComplete === '[]') {
      BookParse = new Array()
    }
    const book = booksList[i]
    BookParse.push(book)
    const jsonBook = JSON.stringify(BookParse)
    localStorage.setItem('complete', jsonBook)

    const action = {
      input: 'complete',
      value: BookParse,
    }
    dispatch(action)
    removeBook(i)
  }
  const removeBook = (i) => {
    booksList.splice(i, 1)
    const jsonBook = JSON.stringify(booksList)
    localStorage.setItem('reading', jsonBook)
    const action = {
      input: 'reading',
      value: booksList,
    }
    dispatch(action)
    alert('book complete')
  }
  const showDetails = (id) => {
    setFlag(flag ? false : true)
    const BooksDetails = JSON.parse(localStorage.getItem('details'))
    console.log(BooksDetails);
    const objBooks = BooksDetails.filter((book) => book.id === id)
    const action = {
      input: 'info',
      value: objBooks,
    }
    dispatch(action)
  }
  const readingList = booksList.map((book, i) => {
    if (book.volumeInfo.imageLinks?.thumbnail) {
      return (
        <div className="column" key={i}>
          <figure className="flex" >
            <div
              style={{
                backgroundImage: `url(${book.volumeInfo.imageLinks.thumbnail})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
              }}
              title="open details"
              className="image-box"
              onClick={() => showDetails(book.id)}
            />
            <div>
              <h3>{book.volumeInfo.title}</h3>
              <p>{book.volumeInfo.authors}</p>
              <p>{book.volumeInfo.description} </p>
              <button onClick={() => addToCompleted(i)} title="finish" className='btn'>
                <BsBookmarkCheck />
              </button>
            </div>
          </figure>
        </div>
      )
    }
  })

  const detailsBook = flag ? <Details state={state} dispatch={dispatch} /> : ''
  return (
    <div>
      <h1>Reading</h1>
      <section>
      {detailsBook}
      {readingList}   
      </section>
     
    </div>
  )
}

export default Reading
