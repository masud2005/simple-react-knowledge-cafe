
const Bookmark = ({bookmark}) => {
    console.log(bookmark)
    return (
        <div className="bg-white mt-2 p-2 rounded">
            <h2 className="font-bold text-sm">{bookmark.title}</h2>
        </div>
    );
};

export default Bookmark;