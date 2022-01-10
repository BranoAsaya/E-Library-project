import React, { useState, useEffect } from 'react'
import { BsFillBookmarkDashFill,BsBookmarkStar } from 'react-icons/bs';

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
        <div className="column" key={i}>
          <figure className="flex">
            <div
              style={{
                backgroundImage: `url(${book.volumeInfo.imageLinks.thumbnail})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
              }}
            />
            <div>
              <h3>{book.volumeInfo.title}</h3>
              <p>{book.volumeInfo.authors}</p>
              <p>{book.volumeInfo.description} </p>
              <button onClick={() => removeBook(i)}><BsFillBookmarkDashFill/></button>
              <span> </span>
              <input
                type="textarea"
                value={comment[i]?.kind || ''}
                onChange={(e) => addComment(e, i)}
                placeholder={'Add Comment'}
              />
              <BsBookmarkStar/>
              <input
                type="number"
                min="1"
                max="5"
                placeholder="1-5"
                onChange={(e) => keepRating(e, i)}
                value={+rating[i]?.etag || 1}
              />
            </div>
          </figure>
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
