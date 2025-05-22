import { queryOptions } from "@tanstack/react-query";
import axios from "../axios";
const ViewPostsQueries = ()=>{

    return[queryOptions({
        queryKey:[],
        queryFn: ()=> viewPost()
    })]
}

export default ViewPostsQueries;

const viewPost = async(id)=>{

    try{

        const response = axios.get(`/posts/${id}`);
        return response.data;

    }catch(error){
        console.log('Error: ', error)
    }
}