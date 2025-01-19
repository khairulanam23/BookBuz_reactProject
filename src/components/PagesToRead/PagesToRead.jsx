import { useLoaderData } from "react-router-dom";
import { getStoredReadingList } from "../../utility/localstorage";
import { useEffect, useState } from "react";
import Chart from "../Chart/Chart";


const PagesToRead = () => {

    const books = useLoaderData();

    const [readingListBooks, setReadingListBooks] = useState([]);

    useEffect(() => {
        const storedReadingList = getStoredReadingList('reading-list');
        if (books.length) {
            const bookRead = books.filter(book => storedReadingList.includes(book.id));
            setReadingListBooks(bookRead);
        }
    }, [books]);


    const data = (readingListBooks) =>{
        let bookInfo = []
        readingListBooks.map(book =>{
            bookInfo.push({
                name: book.name,
                uv: book.totalPages
            })
        })
        return bookInfo;
    };
    data(readingListBooks)
    

    return (
        <div>
            <Chart data = {data(readingListBooks)}></Chart>
        </div>
    );
};

export default PagesToRead;