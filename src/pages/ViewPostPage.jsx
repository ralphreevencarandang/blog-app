import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import ViewPostsQueries from "../queryOptions/ViewPostsQueries";
import Loading from "../components/Loading";
import { Link } from "react-router";

const ViewPostPage = ()=>{

    const {id} = useParams();
    const [queryOptions] = ViewPostsQueries(id);

    const {data, error, isPending} = useQuery(queryOptions)
    console.log(data)


    return(
        <section className="max-container padding-x flex flex-col justify-center items-center">
            <h1 className="font-inter text-4xl py-5 font-bold text-primary">View Post Page</h1>
            {isPending ? (<Loading/>) : (error ? <p>{error}</p> : 
                 <div className="w-full max-w-[500px] border-1 p-5 mb-10 rounded border-slate-400 text-center">
                    <p className="font-inter font-bold pb-2">  {data.title}</p>
                    <p className="font-inter  pb-2">  {data.content}</p>

                    <div className="w-full  flex gap-2 mt-2">
                        <Link className="w-full rounded ring-1  cursor-pointer bg-red-500 text-white px-2 py-1 my-2 hover:bg-red-600">Delete</Link>
                        <Link className="w-full rounded ring-1  cursor-pointer bg-yellow-300 text-white px-2 py-1 my-2 hover:bg-yellow-400">Edit</Link>
                    </div>
                </div>
            )}

            
        </section>
    );
}

export default ViewPostPage;