import { useField } from "formik";

const CustomInput = ({label, ...props})=>{

    const [field, meta] = useField(props)
    console.log('Field: ', field)
    console.log('Meta: ', meta)

    return(
        <div className="mb-2 ">
            <label className="font-inter text-sm">{label}</label> <br />
            <input {...props} {...field} className={`border-1 rounded  px-2 py-1 w-full ${meta.error && meta.touched ? 'border-red-400' : 'border-slate-300'}`}/>
            {meta.error && meta.touched ?   <p className="text-xs text-red-400">{meta.error}</p> : ''}
        </div>
    );
}

export default CustomInput