import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../Page/Home";
import Category from "../Page/Category";
import EndPoints from "../Components/EndPoints";
import Productlist from "../Page/ProductList";
import Product from "../Page/Prdoduct";

function Routers(props){
    return(
        <div>
            <Routes>
                <Route path={EndPoints.DEFAULT} element={<Home />} />
                <Route path={EndPoints.HOME} element={<Home />} />
                <Route path={EndPoints.CATEGORY} element ={<Category />} />
                <Route path={`${EndPoints.PRODUCT_LIST}:product`} element = { <Productlist /> } />
                <Route path={`${EndPoints.PRODUCT}:id`} element = { <Product /> } />

              
                <Route path={EndPoints.LIVE_DEFAULT} element={<Home />} />
                <Route path={EndPoints.LIVE_HOME} element={<Home />} />
                <Route path={EndPoints.LIVE_CATEGORY} element ={<Category />} />
                <Route path={`${EndPoints.LIVE_PRODUCT_LIST}:product`} element = { <Productlist /> } />
                <Route path={`${EndPoints.LIVE_PRODUCT}:id`} element = { <Product /> } />
            </Routes>
        </div>
    )

}

export default Routers;