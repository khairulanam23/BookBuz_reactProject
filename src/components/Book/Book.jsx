import PropTypes from 'prop-types';
import './Book.css'
import { Link } from 'react-router-dom';

const Book = ({ book }) => {

    const { id, image, tags, name, author, rating, category } = book;

    return (
        <div className='flex justify-center'>
            <Link to={`/book/${id}`}>
                <div className="card w-80 bg-base-100 shadow-xl">
                    <figure><img className='h-52' src={image} /></figure>
                    <div className="card-body">
                        <div className='flex justify-between'>
                            {tags.map((tag, index) => (
                                <span key={index}><p className='tagClass'>{tag}</p></span>
                            ))}
                        </div>
                        <h2 className="card-title">
                            {name}
                        </h2>
                        <p>By: {author}</p>
                        <div className="card-actions justify-between">
                            <div>
                                <h3><p>{category}</p></h3>
                            </div>
                            <div className='flex'>
                                <h3><p>{rating}</p></h3>
                                <img src="./star.png" className='h-[21px]' />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.object
};

export default Book;