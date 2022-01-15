import React, { useState, useEffect } from 'react'
import { BsFillBookmarkDashFill, BsBookmarkStar } from 'react-icons/bs'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import Details from './Details'

function Completed({ state, dispatch }) {
  const [rating, setRating] = useState([])
  const { reading, complete ,info} = state
  const [flag, setFlag] = useState(false)
  const BooksJson = localStorage.getItem('complete')
  const booksList = JSON.parse(BooksJson)
  useEffect(() => {
    setRating(booksList)
  }, [])
 
  const removeBook = (i) => {
    booksList.splice(i, 1)
    const jsonBook = JSON.stringify(booksList)
    localStorage.setItem('complete', jsonBook)
    const action = {
      input: 'complete',
      value: booksList,
    }
    dispatch(action)
    alert('book deleted')
  }

  const keepRating = (e, id,i) => {
    const localDetails = JSON.parse(localStorage.getItem('details'))
    const index = localDetails.findIndex((book) => book.id === id)
    localDetails[index].etag = +e.target.value
    localStorage.setItem('details', JSON.stringify(localDetails))
    const action = {
      input: 'info',
      value: [localDetails[index]],
    }
    dispatch(action)
    const { value } = e.target
    const copyArr = [...rating]
    copyArr[i].etag = +value
    setRating(copyArr)
    const jsonBook = JSON.stringify(copyArr)
    localStorage.setItem('complete', jsonBook)
  }
  const showDetails = (id) => {
    setFlag(flag?false:true)
     const BooksDetails = JSON.parse(localStorage.getItem('details'))
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
          <figure className="flex">
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
              <button onClick={() => removeBook(i)}>
                <BsFillBookmarkDashFill />
              </button>
              <span> </span>
              <BsBookmarkStar />
              <input
                type="number"
                min="1"
                max="5"
                placeholder="1-5"
                onChange={(e) => keepRating(e, book.id,i)}
                value={+rating[i]?.etag || 1}
              />
            </div>
          </figure>
        </div>
      )
    }
  })
  const detailsBook=flag?<Details state={state} dispatch={dispatch} />:''

  return (
    <div>
      <h1>Completed</h1>
      <section>
      {detailsBook}
      {readingList}
      </section>
    </div>
  )
}

export default Completed
