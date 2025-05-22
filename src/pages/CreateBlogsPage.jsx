import CustomInput from "../components/FormComponents/CustomInput";
import CustomTextarea from "../components/FormComponents/CustomTextarea";
import Button from "../components/Button";
const CreateBlogPage = ()=>{
    return (
        <section className="max-container padding-x  flex justify-center items-center flex-col h-[86vh]">
            <h1 className="text-4xl pb-10 font-bold font-inter text-primary">Create Blog Page</h1>
            <div className="w-full max-w-[500px] border-1 p-5 mb-10">
                <CustomInput label='Title' type="text" placeholder="Enter title"/>
                <CustomTextarea label='Content'  placeholder="Enter content"/>
                <Button label='Post' />
            </div>
        </section>
    );
}

export default CreateBlogPage