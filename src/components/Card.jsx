
import { motion } from "motion/react";
import { Link } from "react-router";
const Card = ({title, content, user, id})=>{

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
        <div className="max-w-[100px] mb-2">
            <Link to={`/viewpost/${id}`} className="w-full rounded ring-1 ring-blue-500 cursor-pointer bg-primary text-white px-2 py-1 hover:bg-blue-500">View post</Link>
        </div>
        </motion.div>
    );
}

export default Card