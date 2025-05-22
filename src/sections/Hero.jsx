import { motion } from "motion/react";

const Hero = ()=>{
    return(
        <section className="sm:h-[500px] h-[400px] grid place-content-center  ">
            <motion.h1 
                className="text-center text-4xl sm:text-5xl md:text-7xl font-inter font-bold text-primary py-10"
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
                >
                A cat that dreams of becoming a lion must lose its appetite for rats.
            </motion.h1>

            <motion.p 
                className="text-center text-lg text-slate-500"
                  initial={{
                    opacity:0,
                    scale:0
                }}
                animate={{
                    opacity: 1,  
                    scale: 1
                }}
                transition={{
                    duration: 3,
                    ease: "ease",
                    type: "spring"
                }}
                >
                To achive greatness you must let go of old habits that could hold back your progress.
            </motion.p>
        </section>
    );

}

export default Hero;