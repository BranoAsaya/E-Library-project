import React, { useState } from 'react'
import { BsFillBookmarkCheckFill } from 'react-icons/bs';

function Reading({ state, dispatch }) {
  const [newDetails, setNewDetails] = useState(false)
  const { reading, complete, details } = state
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
  }
  const showDetails = (i) => {
    const jsonBook = JSON.stringify(booksList[i])
    localStorage.setItem('details', jsonBook)
    const action = {
      input: 'details',
      value: booksList[i],
    }
    dispatch(action)
    // setNewDetails(newDetails?false: booksList[i])
    setNewDetails(booksList[i])
  }
  const readingList = booksList.map((book, i) => {
    if (book.volumeInfo.imageLinks?.thumbnail) {
      return (
        <div className="column" key={i}>
          <figure className="flex">
            <div
              style={{
                backgroundImage: `url(${book.volumeInfo.imageLinks.thumbnail})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
              }}
              onClick={() => showDetails(i)}
            />
            <div>
              <h3>{book.volumeInfo.title}</h3>
              <p>{book.volumeInfo.authors}</p>
              <p>{book.volumeInfo.description} </p>
              <button onClick={() => addToCompleted(i)}><BsFillBookmarkCheckFill/></button>
            </div>
          </figure>
        </div>
      )
    }
  })
  const bookDetails = newDetails ? (
    <>
      <div>{newDetails.volumeInfo.description}</div>
      <button onClick={() => setNewDetails(false)}>X</button>
    </>
  ) : (
    ''
  )
  console.log(newDetails)
  return (
    <div>
      <h1>Reading</h1>
      {bookDetails}
      {readingList}
    </div>
  )
}

export default Reading
