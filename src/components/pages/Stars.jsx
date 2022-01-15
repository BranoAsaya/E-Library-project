import React from 'react'

function Stars({ num }) {
  let stars = ''
  switch (num) {
    case 1:
      stars = (
        <>
          {' '}
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />{' '}
        </>
      )
      break
    case 2:
      stars = (
        <>
          {' '}
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />{' '}
        </>
      )
      break
    case 3:
      stars = (
        <>
          {' '}
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />{' '}
        </>
      )
      break
    case 4:
      stars = (
        <>
          {' '}
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />{' '}
        </>
      )
      break
    case 5:
      stars = (
        <>
          {' '}
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />{' '}
        </>
      )
      break
    default:
      stars = (
        <>
          {' '}
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />{' '}
        </>
      )
      break
  }
  return <>{stars}</>
}

export default Stars
