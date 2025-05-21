import Header from "../sections/Header";
import Footer from "../sections/Footer";
import { Outlet } from "react-router";

const MainLayout = ()=>{

    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        
        </>
    );
}

export default MainLayout;