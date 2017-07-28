import React from 'react'
import BookShelfChanger from './BookShelfChanger'
import './Book.css'

const Book = props => {
  const bookCoverStyles = {
    width: 128,
    height: 193,
    backgroundImage: `url(${props.book.backgroundImageUrl})`
  }

  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={bookCoverStyles}></div>
        <BookShelfChanger />
      </div>
      <div className="book-title">{props.book.title}</div>
      <div className="book-authors">{props.book.author}</div>
    </div>
  )
}

export default Book
