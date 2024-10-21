import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleAddToBookMarks, handleMarkAsRead}) => {

    const [blogs, setBlogs] = useState([])

    useEffect(()=> {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    return (
        <div className="grid grid-cols-2 gap-5">
            {
                blogs.map(blog => <Blog 
                    blog={blog} 
                    key={blog.id}
                    handleAddToBookMarks={handleAddToBookMarks}
                    handleMarkAsRead={handleMarkAsRead}
                ></Blog>)
            }
        </div>
    );
};

export default Blogs;