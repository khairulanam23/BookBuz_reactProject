import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveReadingList, saveWishList, getStoredReadingList } from "../../utility/localstorage";

const BookDetails = () => {

    const books = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const book = books.find(book => book.id === idInt);

    const { image, name, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = book;

    const handleRead = (id) => {
        const isAlreadyAddedToReadingList = getStoredReadingList('reading-list').includes(id);
        const isAlreadyAddedToWishList = getStoredReadingList('wish-list').includes(id);

        if (isAlreadyAddedToReadingList) {
            toast.error('This book is already in your Reading List.');
        } else {
            saveReadingList(id);
            toast.success('Added to Reading List.');
        }

        if (isAlreadyAddedToWishList && !isAlreadyAddedToReadingList) {
            toast.error('This book has already been added to your Wishlist.');
        }
    }

    const handleWish = (id) => {
        const isAlreadyAddedToReadingList = getStoredReadingList('reading-list').includes(id);
        const isAlreadyAddedToWishList = getStoredReadingList('wish-list').includes(id);

        if (isAlreadyAddedToReadingList) {
            toast.error('This book has already been added to your Reading List.');
        } else {
            saveWishList(id);
            toast.success('Added to Wishlist.');
        }

        if (isAlreadyAddedToWishList && !isAlreadyAddedToReadingList) {
            toast('This book is already in your Wishlist.');
        }
    }


    return (
        <div>
            <div className="container mx-auto">
                <div className="md:flex md:justify-center md:items-center">
                    <div className="container mx-auto">
                        <img src={image} />
                    </div>
                    <div className="container mx-auto w-[90vw]">
                        <h1 className="mb-4">{name}</h1>
                        <h2 className="mb-6">By: {author}</h2>
                        <hr />
                        <h2 className="my-4">
                            {category}
                        </h2>
                        <p className="my-4 text-justify">
                            {review}
                        </p>
                        <h3 className="flex gap-2">
                            <b>Tags:</b>
                            <div className="flex gap-5">
                                {tags.map((tag, index) => (
                                    <span key={index}><p className='tagClass'>{`#${tag}`}</p>&nbsp;</span>
                                ))}
                            </div>
                        </h3>
                        <div className="flex gap-x-5">
                            <div>
                                <p className="text-[#131313B2] my-2">Number of Pages:</p>
                                <p className="text-[#131313B2] my-2">Publisher:</p>
                                <p className="text-[#131313B2] my-2">Year of Publishing:</p>
                                <p className="text-[#131313B2] my-2">Rating:</p>
                            </div>
                            <div>
                                <p className="text-[#131313] font-semibold my-2">{totalPages}</p>
                                <p className="text-[#131313] font-semibold my-2">{publisher}</p>
                                <p className="text-[#131313] font-semibold my-2">{yearOfPublishing}</p>
                                <p className="text-[#131313] font-semibold my-2">{rating}</p>
                            </div>
                        </div>
                        <div className="flex gap-2 my-10">
                            <button onClick={() => handleRead(idInt)} className="btn btn-outline text-[#131313]">Read</button>
                            <button onClick={() => handleWish(idInt)} className="btn btn-info text-white">Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer autoClose={4000}/>
        </div>
    );
};

export default BookDetails;