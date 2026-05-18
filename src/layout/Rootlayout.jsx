import { Outlet } from "react-router";
import Navbar from "../Components/shared/Navbar";
import Footer from "../Components/shared/Footer";


const Rootlayout = () => {
    return (
        <div className="bg-[#F8FAFC]">
           <Navbar></Navbar>
           <main>
            <Outlet></Outlet>
           </main>
            <Footer></Footer>
        </div>
    );
};

export default Rootlayout;