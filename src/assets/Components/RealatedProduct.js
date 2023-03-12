import { useEffect, useState } from "react";
import FearureProduct from "./FeatureProduct";

function RelatedProduct(props) {

    const[related_product,setRelatedProduct] = useState([])

    async function getData(url){
        let response = await fetch(url);
        let data = await response.json();
        setRelatedProduct(data);
    }

    useEffect(()=>{
        let url = `https://fakestoreapi.com/products/category/${props.category}`;
        getData(url);
    },[props.category])

    return (
        <>
            <div className="row related-product-wrapper mt-5" style={{textAlign: "left"}}>
                <h4 className="mb-4"><b>Related product</b></h4>
                {/* <h5>{props.category}</h5>
                <h3>{props.current_id}</h3> */}
                {
                    related_product.map((data,index) =>(
                        data.id != props.current_id
                        &&
                        <FearureProduct product={data} key={index} />
                    ))
                }
            </div>
        </>
    )
}

export default RelatedProduct;