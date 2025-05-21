import { Link } from "react-router";

const Header = ()=>{
    return(
        <header className="w-full bg-primary sticky top-0">
            <div className="max-container padding-x flex justify-between items-center">
                <div className="py-3">
                    <Link to='/'>
                        <h1 className="font-inter font-bold text-white text-3xl  cursor-pointer hover:bg-blue-800 px-2 py-1 rounded">B</h1>
                    </Link>
                </div>
                  
                <ul className="flex justify-between items-center gap-5 text-white font-inter cursor-pointer">
                            <li className="hover:bg-blue-800 px-2 py-1 rounded">Browse</li>
                            <li className="hover:bg-blue-800 px-2 py-1 rounded">Add</li>
                </ul>

            </div>

        </header>
    );
}

export default Header;