import React, { useState, useEffect } from 'react'

function Completed({ state, dispatch }) {
  const [comment, setComment] = useState([])
  const [rating, setRating] = useState([])
  const { reading, complete } = state
  const BooksJson = localStorage.getItem('complete')
  const booksList = JSON.parse(BooksJson)
  useEffect(() => {
    setComment(booksList)
    setRating(booksList)
  }, [])
  console.log(rating[0]?.etag)
  const removeBook = (i) => {
    booksList.splice(i, 1)
    const jsonBook = JSON.stringify(booksList)
    localStorage.setItem('complete', jsonBook)
    const action = {
      input: 'complete',
      value: booksList,
    }
    dispatch(action)
  }
  const addComment = (e, i) => {
    const { value } = e.target
    const copyArr = [...comment]
    copyArr[i].kind = value
    setComment(copyArr)
    const jsonBook = JSON.stringify(copyArr)
    localStorage.setItem('complete', jsonBook)
  }
  const keepRating = (e, i) => {
    const { value } = e.target
    const copyArr = [...rating]
    copyArr[i].etag = +value
    setRating(copyArr)
    const jsonBook = JSON.stringify(copyArr)
    localStorage.setItem('complete', jsonBook)

  }
  const readingList = booksList.map((book, i) => {
    if (book.volumeInfo.imageLinks?.thumbnail) {
      return (
        <div key={i}>
          <img key={book.id} src={book.volumeInfo.imageLinks.thumbnail} />
          <p>{book.volumeInfo.title}</p>
          <button onClick={() => removeBook(i)}>DELETE</button>
          <label>Comment</label>
          <input
            type="textarea"
            value={comment[i]?.kind || ''}
            onChange={(e) => addComment(e, i)}
          />
          <input
            type="number"
            min="1"
            max="5"
            placeholder="1-5"
            onChange={(e) => keepRating(e, i)}
            value={+rating[i]?.etag || 1}
          />
        </div>
      )
    }
  })
  return (
    <div>
      <h1>Completed</h1>
      {readingList}
    </div>
  )
}

export default Completed
