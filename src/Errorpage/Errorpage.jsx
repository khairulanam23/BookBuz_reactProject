import { Link } from "react-router-dom";


const Errorpage = () => {
    return (
        <div>
            <h2 className="text-5xl"><span className="text-red">404</span>404 Page Not Found!</h2>
            <Link to ="/">Go back to <button>Home</button></Link>
        </div>
    );
};

export default Errorpage;