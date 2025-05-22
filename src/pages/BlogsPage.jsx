
import Blogs from "../sections/Blogs";
import { motion } from "motion/react";
import Loading from "../components/Loading";
const BlogPage =()=>{
    return (
        <section className="max-container padding-x">
            <motion.h1 className="text-center text-6xl font-inter font-bold text-primary py-10"
            
             initial={{
                    opacity:0,
                    scale:0,
           
                }}
                animate={{
                    opacity: 1,  
                    scale: 1,
             
                }}
                transition={{
                    duration: 3,
                    ease: "ease",
                    type: "spring"
                }}
            >Blogs</motion.h1>
            <Blogs/>
        </section>
    );
}

export default BlogPage
