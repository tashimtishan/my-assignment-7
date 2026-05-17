import { Outlet } from "react-router";
import Navbar from "../Components/shared/Navbar";


const Rootlayout = () => {
    return (
        <div>
           <Navbar></Navbar>
            <Outlet></Outlet>
            <h3>Footer</h3>
        </div>
    );
};

export default Rootlayout;