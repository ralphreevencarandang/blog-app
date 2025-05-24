import { useField } from "formik";

const CustomTextarea = ({label, ...props})=>{

    const [field , meta] = useField(props);

    return(
        <div className="mb-2">
              <label className="font-inter text-sm">{label}</label> <br />
      
            <textarea {...props} {...field} cols="30" rows="10" className={`border-1 rounded ${meta.error && meta.touched ? 'border-red-400' : 'border-slate-300'} px-2 py-1 w-full`}></textarea>
            {meta.error && meta.touched ?   <p className="text-xs text-red-400">{meta.error}</p> : ''}

        </div>
    );

}

export default CustomTextarea