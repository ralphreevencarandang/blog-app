import { Link, NavLink } from "react-router";

const Header = ()=>{

    
    const linkClass = ({isActive}) => {
        return isActive ? 'bg-blue-800 px-2 py-1 rounded' : 'hover:bg-blue-800 px-2 py-1 rounded'

    }


    return(
        <header className="w-full bg-primary sticky top-0 z-10">
            <div className="max-container padding-x flex justify-between items-center">
                <div className="py-3">
                    <Link to='/'>
                        <h1 className="font-inter font-bold text-white text-3xl  cursor-pointer hover:bg-blue-800 px-2 py-1 rounded">B</h1>
                    </Link>
                </div>
                  
                <div className="flex justify-between items-center gap-5 text-white font-inter cursor-pointer">
                           <NavLink  to='/blogs' className={ linkClass}>Browse</NavLink>
                           <NavLink to='/asd' className={linkClass}>Add</NavLink>
                         
                </div>

            </div>

        </header>
    );
}

export default Header;