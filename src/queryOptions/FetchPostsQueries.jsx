import { queryOptions } from "@tanstack/react-query"
import axios from '../axios';

 const FetchPostsQueries = (isHome)=>{
    return [queryOptions({
        queryKey: ['posts'],
        queryFn: ()=> fetchPost(isHome),
    })]
    
}

export default FetchPostsQueries;

const fetchPost = async (isHome) => {
    try {
        const response = await axios.get(
            `${isHome ? '/posts?_limit=6&_expand=user' : '/posts?_expand=user'}`
        );
        console.log('Fetched posts:', response.data); // ← add this
        return response.data;
    } catch (error) {
        console.log('Error:', error);
    }
};
