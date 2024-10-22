import { useState } from "react";
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookMarks, handleMarkAsRead }) => {
    // console.log(blog)
    const {id, cover, author_img, author, posted_date, title, hashtags, reading_time } = blog;

    const [bookmarked, setBookmarked] = useState(false);
    const handleBookmarked = (id) => {
        setBookmarked(true);
        console.log('click')

    }

    return (
        <div className="border p-1 md:p-3 bg-gray-100">
            <img className="w-full" src={cover} alt="Cover..." />
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 my-3">
                    <img className="w-10 h-10" src={author_img} alt="Author..." />
                    <div>
                        <p className="font-bold">{author}</p>
                        <span className="text-gray-500 text-sm">{posted_date}</span>
                    </div>
                </div>
                <div className="flex lg:gap-3">
                    <span className="text-gray-500 text-sm">{reading_time} min read</span>
                    {/* <button onClick={() => {handleAddToBookMarks(blog); handleBookmarked()}} className="bg-gray-300 hover:bg-violet-300 hover:border border-violet-700 p-2 rounded-full"><FaRegBookmark /></button> */}
                    <button onClick={() => {handleAddToBookMarks(blog); handleBookmarked()}} className={`p-2 rounded-full hover:bg-violet-300 hover:border border-violet-700 ${bookmarked && 'bg-violet-300 border border-violet-700'}`}><FaRegBookmark /></button>
                </div>
            </div>
            <h1 className="font-bold text-lg mb-3">{title}</h1>
            <div className="mb-2 text-gray-500 text-sm">
                {
                    hashtags.map((hashTag, idx) => <span key={idx}>#{hashTag}</span>)
                }
            </div>  
            <button onClick={() => handleMarkAsRead(id, reading_time)} className="text-violet-700 underline" href="">Mark as read</button>
        </div>
    );
};

export default Blog;