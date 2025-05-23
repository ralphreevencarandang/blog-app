import { queryOptions } from "@tanstack/react-query";
import axios from "../axios";

const ViewPostsQueries = (id)=>{
    return[queryOptions({
        queryKey:['posts', id],
        queryFn: ()=> viewPost(id)
    })]
}

export default ViewPostsQueries;

const viewPost = async(id)=>{

    try{

        const response = await axios.get(`/posts/${id}`);
        console.log('View Post: ',   response.data)
        return response.data;

    }catch(error){
        console.log('Error: ', error)
    }
}