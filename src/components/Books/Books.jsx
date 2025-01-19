import { useEffect, useState } from "react";
import Book from "../Book/Book";
import './Books.css'

const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div>
            <div className="mb-20">
                <h1 className="text-center">Books</h1>
            </div>
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-24">
                    {
                        books.map(book => <Book key={book.id} book={book}></Book>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Books;