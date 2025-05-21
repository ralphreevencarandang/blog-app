import Button from "./Button";

const Card = ()=>{

    return(
        <div className="card">
            <p className="font-inter pt-2 text-xl">Title</p>
            <p className="text-light font-inter py-4 text-justify text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa sequi dolores ducimus, facere quis incidunt, expedita iure fuga consequatur fugit possimus architecto! Vero aut illum doloremque vel cumque modi quis minus excepturi corporis voluptates voluptatibus, fugit veniam beatae culpa quasi aliquam sunt iste nulla repellendus...</p>

            <Button label='View Blog'/>
        </div>
    );
}

export default Card