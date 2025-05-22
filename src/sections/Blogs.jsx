import Card from "../components/Card";
import { motion } from "motion/react";
const Blogs = ()=>{

    return(
        <section className="mb-10 ">
        
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
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                
            </motion.div>

        </section>
    );
}

export default Blogs