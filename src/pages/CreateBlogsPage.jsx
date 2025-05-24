import CustomInput from "../components/FormComponents/CustomInput";
import CustomTextarea from "../components/FormComponents/CustomTextarea";
import Button from "../components/Button";
import { Formik, Form } from "formik";
import { validationSchema } from "../schemas";
import AddPostQueries from "../queryOptions/AddPostsQueries";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useMutation} from "@tanstack/react-query";
import { addPost } from "../queryOptions/AddPostsQueries";
const CreateBlogPage = ()=>{
    
        const mutation = useMutation({
        mutationFn: addPost,
        onSuccess: (data) => {
        console.log("Post created:", data);
        // e.g. toast message or redirect
        },
        onError: (error) => {
        console.error("Post failed:", error);
        },
  });
      

   
    return (
        <section className="max-container padding-x  flex justify-center items-center flex-col h-[86vh]">
            <h1 className="text-4xl pb-10 font-bold font-inter text-primary">Create Blog Page</h1>
            <Formik 
                initialValues= {{title:'', content:''}} 
                validationSchema={validationSchema}
               onSubmit={(values, actions) => {
                    mutation.mutate(values);
                    actions.setSubmitting(false);
                    }}
                >
                    {(props)=>(
                    <Form>
                        <div className="w-full max-w-[500px] border-1 p-5 mb-10 rounded border-slate-400">
                            <CustomInput label='Title' type="text" placeholder="Enter title" name='title'/>
                            <CustomTextarea label='Content'  placeholder="Enter content" name='content'/>
                            <Button label='Post' type='submit'  />

                        </div>
                    </Form>
                    )}
            </Formik>
           
        </section>
    );
}

export default CreateBlogPage