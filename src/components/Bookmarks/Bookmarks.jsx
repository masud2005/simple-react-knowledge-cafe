import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {
    // console.log(bookmarks)
    return (

        <div className="bg-gray-100 border p-2">
            <h2 className="text-center text-violet-700 bg-violet-300 border border-violet-700 py-2 rounded mb-4 font-bold">Spend time on read: {readingTime} min</h2>
            <h3 className="text-center font-bold bg-gray-300 rounded py-2">Bookmarked Blogs: {bookmarks.length}</h3>
            {
                bookmarks.map(bookmark => <Bookmark 
                    bookmark={bookmark}
                    key={bookmark.id}
                ></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;