const Button = ({label})=>{
    return(
        <button className="w-full rounded ring-1 ring-blue-500 cursor-pointer bg-primary text-white px-2 py-1 my-2 hover:bg-blue-500">
            {label}
        </button>
    );
}

export default Button;