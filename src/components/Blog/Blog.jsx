import { FaRegBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookMarks, handleMarkAsRead }) => {
    // console.log(blog)
    const {id, cover, author_img, author, posted_date, title, hashtags, reading_time } = blog
    return (
        <div className="border p-3 bg-gray-100">
            <img className="w-full" src={cover} alt="Cover..." />
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 my-3">
                    <img className="w-10 h-10" src={author_img} alt="Author..." />
                    <div>
                        <p className="font-bold">{author}</p>
                        <span className="text-gray-500 text-sm">{posted_date}</span>
                    </div>
                </div>
                <div className="flex">
                    <span className="text-gray-500 text-sm">{reading_time} min read</span>
                    <button onClick={() => handleAddToBookMarks(blog)}><FaRegBookmark /></button>
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