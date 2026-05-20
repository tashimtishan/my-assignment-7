import { Suspense } from "react";
import Banner from "../../Components/shared/Banner/Banner";
import Friendsection from "../../Components/shared/Friendsection/Friendsection";

const HomePage = () => {
    return (
       <section>
        <Banner></Banner>
       <Suspense fallback={
          <div className="flex justify-center items-center py-20">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        }>
         <Friendsection></Friendsection>
       </Suspense>
       </section>
    );
};

export default HomePage;