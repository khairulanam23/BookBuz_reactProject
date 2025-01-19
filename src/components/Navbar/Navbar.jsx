import { Link } from "react-router-dom";

const Navbar = () => {

    const links = (
        <>
            <li className="m-4">
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <button className="btn btn-outline btn-success">
                        <span className="text-[#23BE0A]">Home</span>
                    </button>
                </Link>
            </li>
            <li className="m-4">
                <Link to="/books" style={{ textDecoration: 'none' }}>
                    <button className="btn btn-outline btn-info border-none">Listed Books</button>
                </Link>
            </li>
            <li className="m-4">
                <Link to="/pages" style={{ textDecoration: 'none' }}>
                    <button className="btn btn-outline btn-info border-none">Pages to Read</button>
                </Link>
            </li>
        </>
    );


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link className="btn btn-ghost text-base md:text-3xl">BookBuzz</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex gap-2">
                    <button className="btn btn-success bg-[#23BE0A] rounded-lg text-white">Sign In</button>
                    <button className="btn btn-info bg-[#59C6D2] rounded-lg text-white">Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;