import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.Jsx";
import Footer from "./footer";
const Master = () => {
    return (
        <>
          <Navbar/>
           <div className="main">
              <Outlet/>
           </div>
           <Footer/>
        </>
    )
}

export default Master;