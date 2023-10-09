import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="justify-center items-center w-full h-screen flex flex-col">
            <p className="text-4xl font-bold text-center text-red-700">404! The page has Not Found</p>
            <p className="text-3xl font-bold text-center text-red-700">Sorry, the page you are looking for could not show this page</p>
            <Link className="btn bg-lime-500 font-bold text-center my-4 text-white" to="/">Return Home</Link>
        </div>
    );
};

export default ErrorPage;