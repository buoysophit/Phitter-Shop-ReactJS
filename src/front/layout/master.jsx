import { Outlet } from "react-router-dom";
import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";
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