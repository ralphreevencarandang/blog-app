import Button from "./Button";
import { motion } from "motion/react";
const Card = ()=>{

    return(
        <motion.div className="card cursor-pointer"
        initial={{
            scale:1
        }}
        whileHover={{
            scale: 1.05
        }}

        
        >
            <p className="font-inter pt-2 text-xl">Title</p>
            <p className="text-light font-inter py-4 text-justify text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa sequi dolores ducimus, facere quis incidunt, expedita iure fuga consequatur fugit possimus architecto! Vero aut illum doloremque vel cumque modi quis minus excepturi corporis voluptates voluptatibus, fugit veniam beatae culpa quasi aliquam sunt iste nulla repellendus...</p>

            <Button label='View Blog'/>
        </motion.div>
    );
}

export default Card