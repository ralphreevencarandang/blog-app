import { useParams } from "react-router";
import { Formik, Form } from "formik";
import { validationSchema } from "../schemas";
import CustomInput from "../components/FormComponents/CustomInput";
import CustomTextarea from "../components/FormComponents/CustomTextarea";
import Button from "../components/Button";
import { useQuery } from "@tanstack/react-query";
import ViewPostsQueries from "../queryOptions/ViewPostsQueries";
import { useMutation } from "@tanstack/react-query";
import axios from "../axios";
import { useNavigate } from "react-router";

const EditPostPage = ()=>{

    const navigate = useNavigate()
    const {id} = useParams()
    const [queryOptions] = ViewPostsQueries(id);

    const {data} = useQuery(queryOptions);
    
    const updatePost = async (id, values)=>{
        try{
             const response = await axios.put(`/posts/${id}`, values)
             navigate('/')
        }catch(error){
            console.log('Error: ', error)
        }
    }


    return(
        <>
            <section className="max-container padding-x  flex justify-center items-center flex-col h-[86vh]">
            <h1 className="text-4xl pb-10 font-bold font-inter text-primary">Create Blog Page</h1>
            <Formik 
                initialValues= {{title: data.title, content: data.content}} 
                validationSchema={validationSchema}
                onSubmit={(values, actions)=>{

                    updatePost(data.id, values)
                    navigate('/')

                }}
            
                >
                    {({isSubmitting})=>(
                    <Form>
                        <div className="w-full max-w-[500px] border-1 p-5 mb-10 rounded border-slate-400">
                            <CustomInput label='Title' type="text" placeholder="Enter title" name='title'/>
                   
                            <CustomTextarea label='Content'  placeholder="Enter content" name='content'/>
                            <Button label='Update Post' type='submit' disabled={isSubmitting} isSubmitting={isSubmitting} />

                        </div>
                    </Form>
                    )}
            </Formik>
           
        </section>
        </>
    );
}


export default EditPostPage