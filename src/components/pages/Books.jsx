import React, { useEffect, useState } from 'react'
import API_FIREBASE from '../../api/api_key'
import axios from 'axios'

function Books({ state, dispatch }) {
  const [books, setBooks] = useState([])
  const { reading } = state
  useEffect(() => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=javascript&key=${API_FIREBASE}&maxResults=40`
    axios
      .get(url)
      .then((response) => {
        setBooks(response.data.items)
      })
      .catch((error) => {
        console.log(error)
      })
      .then(() => {})
  }, [])
  const addBookToList = (i) => {
    const redingList = [...books]
    const BooksJson = localStorage.getItem('reading')
    let BookList = JSON.parse(BooksJson)

    if (BooksJson === '[]') {
      BookList = new Array()
    }
    const book = redingList[i]
    BookList.push(book)
    const jsonBook = JSON.stringify(BookList)
    localStorage.setItem('reading', jsonBook)

    const action = {
      input: 'reading',
      value: BookList,
    }
    dispatch(action)
  }
  const handelSubmit=(e)=>{
    e.preventDefault()
 const {search}= e.target
 const url = `https://www.googleapis.com/books/v1/volumes?q=${search.value}&key=${API_FIREBASE}&maxResults=40`
 axios
   .get(url)
   .then((response) => {
     setBooks(response.data.items)
   })
   .catch((error) => {
     console.log(error)
   })
   .then(() => {})

  }
  const booksList = books.map((book, i) => {
    if (book.volumeInfo.imageLinks?.thumbnail) {
      return (
        <div key={i}>
          <img key={book.id} src={book.volumeInfo.imageLinks.thumbnail} />
          <p>{book.volumeInfo.title}</p>
          <button onClick={() => addBookToList(i)}>ADD</button>
        </div>
      )
    }
  })
  

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input type="text" placeholder="SEARCH" name='search'/>
        <input type="submit" />
      </form>
      <h1>Books</h1>
      {booksList}
    </div>
  )
}

export default Books

