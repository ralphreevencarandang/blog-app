import Button from "./Button";
import { motion } from "motion/react";
const Card = ({title, content, user})=>{

    return(
        <motion.div className="card cursor-pointer"
        initial={{
            scale:1
        }}
        whileHover={{
            scale: 1.05
        }}
        >
            <p className="font-inter pt-2 text-xl">{title}</p>
            <p className="text-light font-inter py-4 text-justify text-sm">{content}</p>
            <p className="text-light font-inter py-4 text-justify text-sm">{user?.name}</p>

        <div className="max-w-[100px]">
            <Button label='View Blog'/>
        </div>
        </motion.div>
    );
}

export default Card