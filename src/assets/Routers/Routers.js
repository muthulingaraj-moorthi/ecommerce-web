import { Routes, Route } from "react-router-dom";
import Home from "../Page/Home";
import Category from "../Page/Category";
import EndPoints from "../Components/EndPoints";

function Routers(){
 
    return(
        <div>
            <Routes>
                <Route path={EndPoints.DEFAULT} element={<Home />} />
                <Route path={EndPoints.HOME} element={<Home />} />
                <Route path={EndPoints.CATEGORY} element ={<Category />} />
            </Routes>
        </div>
    )

}

export default Routers;