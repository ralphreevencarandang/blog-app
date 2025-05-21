import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import Header from "../sections/Header";
import Blogs from "../sections/Blogs";
const HomePage = ()=>{

    return(
        <section className="bg-secondary">
      
            <div className="max-container padding-x">
                <Hero/>
                <Blogs/>
            </div>
 
          
        </section>
    );
}

export default HomePage