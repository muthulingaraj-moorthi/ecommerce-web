import { Routes, Route } from "react-router-dom";
import Home from "../Page/Home";
import Category from "../Page/Category";

function Routers(){
 
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/category/jewelery" element ={<Category />} />
            </Routes>
        </div>
    )

}

export default Routers;