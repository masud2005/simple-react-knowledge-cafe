
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {

  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookMarks = (blog) => {
    // console.log(blog);
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = (id, time) => {
    // console.log("Mark as Read clicked", time);
    setReadingTime(readingTime + time);
    console.log(id)
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }

  return (
    <>
      <Header></Header>
      <div className='container mx-auto grid grid-cols-12 gap-5 my-10'>
        <div className='col-span-8'>
          <Blogs
            handleAddToBookMarks={handleAddToBookMarks}
            handleMarkAsRead={handleMarkAsRead}
          ></Blogs>
        </div>
        <div className='col-span-4'>
          <Bookmarks
            bookmarks={bookmarks}
            readingTime={readingTime}
          ></Bookmarks>
        </div>
      </div>
    </>
  )
}

export default App
