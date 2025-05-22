const CustomInput = ({label,...props})=>{

    return(
        <div className="mb-2 ">
            <label className="font-inter text-sm">{label}</label> <br />
            <input {...props} className="border-1 rounded border-slate-300 px-2 py-1 w-full"/>
        </div>
    );
}

export default CustomInput