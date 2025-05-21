import { Link } from "react-router";

const NotFoundPage = ()=>{

    return(
        <section className="max-container padding-x h-[86.2vh] grid place-content-center text-center gap-2">
            
            <h1 className="text-9xl font-inter font-bold text-primary">404</h1>
            <h3 className="text-4xl ">Oops, This Page Not Found!</h3>
            <p className="text-light text-lg">The link might be corrupted.</p>
            <p className="text-light text-lg">or the page may have been removed.</p>
            <Link to='/' className="border-1 bg-primary text-white py-1 px-2 rounded hover:bg-blue-500">Return Home</Link>
        </section>
    );
}

export default NotFoundPage