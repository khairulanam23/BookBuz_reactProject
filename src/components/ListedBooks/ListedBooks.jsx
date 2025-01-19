import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredReadingList } from "../../utility/localstorage";




const ListedBooks = () => {
    const books = useLoaderData();
    const [readingListBooks, setReadingListBooks] = useState([]);
    const [listValue, setListValue] = useState('reading-list');

    const handleSortBy = (sortBy) => {
        sortBy = sortBy.toLowerCase()
        if (sortBy === 'rating') {
            const sortedBooks = [...readingListBooks].sort((a, b) => b.rating - a.rating);
            setReadingListBooks(sortedBooks);
        } else if (sortBy === 'category') {
            const sortedBooks = [...readingListBooks].sort((a, b) => a.category.localeCompare(b.category));
            setReadingListBooks(sortedBooks);
        }
        // console.log(sortBy)
    };

    useEffect(() => {
        const storedReadingList = getStoredReadingList(listValue);

        if (books.length) {
            const bookRead = books.filter(book => storedReadingList.includes(book.id));
            setReadingListBooks(bookRead);
        }
    }, [books, listValue]);

    const handleList = (value) => {
        setListValue(value);
    };


    return (
        <div>
            <div className="text-center">
                <h1>Books</h1>
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="m-5"><button className="btn btn-success bg-[#23BE0A] text-white">Sort By</button></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"  >
                        <li value="rating" onClick={(e) => handleSortBy(e.currentTarget.innerText)}><a >Rating</a></li>
                        <li value="category" onClick={(e) => handleSortBy(e.currentTarget.innerText)}><a >Category</a></li>
                    </ul>
                </div>
            </div>
            <div className="section2">
                <div className="flex">
                    <button onClick={() => handleList('reading-list')} className="btn">Reading List</button>
                    <button onClick={() => handleList('wish-list')} className="btn">Wish List</button>
                </div>
                <div className="grid grid-cols-1">
                    {readingListBooks.map(book => (
                        <div key={book.id} className="hero place-items-start bg-base-200 my-10">
                            <div className="hero-content flex-col lg:flex-row gap-20">
                                <img src={book.image} className="max-w-52 max-h-52 rounded-lg shadow-2xl" />
                                <div>
                                    <h1 className="text-3xl font-bold">{book.name}</h1>
                                    <p className="py-6">By: {book.author}</p>
                                    <div className="grid md:flex gap-5">
                                        {book.tags.map((tag, index) => (
                                            <span key={index}><p className='tagClass'>{`#${tag}`}</p>&nbsp;</span>
                                        ))}
                                        <div className="flex gap-2">
                                            <img src="./location.png" className="w-5 h-5" />
                                            <p>Year of Publishing: {book.yearOfPublishing}</p>
                                        </div>
                                    </div>
                                    <div className="md:flex gap-5">
                                        <div className="flex gap-2">
                                            <img src="./people.png" className="w-5 h-5" />
                                            <p>Publisher: {book.publisher}</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <img src="./pages.png" className="w-5 h-5" />
                                            <p>Pages {book.totalPages}</p>
                                        </div>
                                    </div>
                                    <div className="grid md:flex gap-5 my-5">
                                        <button className="btn Hover:btn-outline bg-[#328EFF26] text-[#328EFF] rounded-2xl">Category: {book.category}</button>
                                        <button className="btn Hover:btn-outline bg-[#FFAC3326] text-[#FFAC33] rounded-2xl">Rating: {book.rating}</button>
                                        <button className="btn Hover:btn-outline bg-[#23BE0A] text-white rounded-2xl"><Link to={`/book/${book.id}`}>View Details</Link></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default ListedBooks;