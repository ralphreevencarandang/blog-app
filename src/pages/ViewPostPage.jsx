import { useParams } from "react-router";
import { useMutation, useQuery } from "@tanstack/react-query";
import ViewPostsQueries from "../queryOptions/ViewPostsQueries";
import Loading from "../components/Loading";
import { Link } from "react-router";
import axios from "../axios";
import { useNavigate } from "react-router";


const ViewPostPage = ()=>{

    const navigate = useNavigate();

    const {id} = useParams();
    const [queryOptions] = ViewPostsQueries(id);
    const {data, error, isPending} = useQuery(queryOptions)

    const mutation = useMutation({
        mutationFn: ()=> deletePost(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['posts'] }); // if you have a list of posts elsewhere
            navigate('/');
        },
        onError: (err) => {
            console.error("Delete failed:", err);
        }
    });

  


    const deletePost = async()=>{
        try{
            const response = await  axios.delete(`/posts/${id}`);
            navigate('/');
        }catch(error){
            console.log(error)
        }
    }


    return(
        <section className="max-container padding-x flex flex-col justify-center items-center">
            <h1 className="font-inter text-4xl py-5 font-bold text-primary">View Post Page</h1>
            {isPending ? (<Loading/>) : (error ? <p>{error}</p> : 
                 <div className="w-full max-w-[500px] border-1 p-5 mb-10 rounded border-slate-400 text-center">
                    <p className="font-inter font-bold pb-2">  {data.title}</p>
                    <p className="font-inter  pb-2">  {data.content}</p>

                    <div className="w-full  flex gap-2 mt-2">
                        <button  onClick={() => mutation.mutate() } disabled={mutation.isPending} className="w-full rounded ring-1  cursor-pointer bg-red-500 text-white px-2 py-1 my-2 hover:bg-red-600">{mutation.isPending ? 'Deleting...' : 'Delete'}</button>
                        <Link className="w-full rounded ring-1  cursor-pointer bg-yellow-300 text-white px-2 py-1 my-2 hover:bg-yellow-400">Edit</Link>
                    </div>
                </div>
            )}
        </section>
    );
}

export default ViewPostPage;