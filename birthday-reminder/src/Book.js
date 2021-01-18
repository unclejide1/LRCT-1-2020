import React from 'react'

const Book = (props) => {
  const { image, title, author } = props
  // const clickHandler = () => alert('hello world')
  return (
    <article className='book'>
      <img src={image} alt='book' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button
        type='button'
        onClick={() => {
          alert('hello world')
        }}
      ></button>
    </article>
  )
}

export default Book
