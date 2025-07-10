import { Route, Routes } from "react-router-dom";
import Master from "../layout/master";
import HomePage from "../pages/HomePage";

const FrontRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Master/>}>
               <Route index element={<HomePage/>}/>
            </Route>
        </Routes>
    )
}

export default FrontRoutes;