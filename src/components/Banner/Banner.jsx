import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse justify-around">
                <img src="./bannerimg.png" className="max-w-sm rounded-badge shadow-2xl" />
                <div>
                    <h1 className="text-3xl md:text-5xl font-bold md:w-[526px] title">Books to Freshen up Your Bookshelf!</h1>
                    <p className="py-6 text-sm md:text-base text-justify md:w-4/5">Embark on a journey through our curated selection of captivating reads that promise to breathe new life into your bookshelf. From gripping thrillers to heartwarming romances, each recommendation is handpicked to invigorate your reading experience and leave you eagerly turning the pages for more.</p>
                    <Link to={`/books`}><button className="btn btn-active bg-[#23BE0A] text-white">View The List</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;