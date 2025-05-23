import Card from "../components/Card";
import { motion } from "motion/react";
import { useQuery } from "@tanstack/react-query";
import FetchPostsQueries from "../queryOptions/FetchPostsQueries";
import Loading from "../components/Loading";
const Blogs = ({isHome=false})=>{

    const [queryOptions] = FetchPostsQueries(isHome);

    const {data, error, isPending} = useQuery(queryOptions);
    console.log(data);

    return(
        <section className="mb-10 ">

            {isPending ? (<Loading/>) : (
                error ? <p >{error}</p> : 
                
                <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-7 my-5"
                initial={{
                    opacity: 0,
                    scale: 0,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 3,
                    ease: "backInOut",
                    type: "spring"
                }}
            >
                {data?.map((items, index) => 
                     <Card {...items} key={index}/>
                )}
               
              
                
            </motion.div>

            )}
            

        </section>
    );
}

export default Blogs