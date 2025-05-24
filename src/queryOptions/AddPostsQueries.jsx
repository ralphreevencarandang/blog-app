import { queryOptions } from "@tanstack/react-query";
import axios from "../axios";

const AddPostQueries = (values)=>{

    return [queryOptions({
        queryKey: ['posts'],
        queryFn: ()=> addPost(values),
        
        
        
    })]
}

export default AddPostQueries;


export const addPost = async(values)=>{

    try{

        const response = await axios.post('/posts', values)
        return response.data;
    }catch(error){
        console.log('Error: ', error)
    }
}


