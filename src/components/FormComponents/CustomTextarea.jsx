const CustomTextarea = ({label, ...props})=>{

    return(
        <div className="mb-2">
              <label className="font-inter text-sm">{label}</label> <br />
      
            <textarea {...props} cols="30" rows="10" className="border-1 rounded border-slate-300 px-2 py-1 w-full"></textarea>
        </div>
    );

}

export default CustomTextarea