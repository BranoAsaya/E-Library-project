import React from 'react'
import { IoMdCloseCircle } from 'react-icons/io'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

function Details({ state, dispatch }) {
  const { details ,info} = state
const closeDetails=()=>{
  const action = {
    input: 'info',
    value: false,
  }
  dispatch(action)
}
let num = +info[0]?.etag || 0
console.log(info[0]?.volumeInfo.infoLink);
let stars='';
switch (num) {
  case 1:stars = <> <AiFillStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/> </>  
    break;
    case 2:stars = <> <AiFillStar/><AiFillStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/> </>   
    break;
    case 3:stars = <> <AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/><AiOutlineStar/> </>   
    break;
    case 4:stars = <> <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/> </>   
    break;
    case 5:stars = <> <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/> </>   
    break;
  default:stars = <> <AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/> </>
    break;
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
          <span>stars {+book.etag || 0} {stars} <a href={book.volumeInfo.infoLink} target="_blank">more</a></span>
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
