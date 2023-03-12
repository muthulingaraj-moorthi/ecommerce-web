import { useState, useEffect } from "react";
import ProductCard from "../Components/ProductCard";
import { useParams } from "react-router-dom";


function Productlist(props) {
    const [product_card, setproductCard] = useState([]);
    const [categories, setCategory] = useState("");

    //call product APIs
    async function getProduct(url) {
        let response = await fetch(`https://fakestoreapi.com/products/category/${url}`);
        let data = await response.json();
        setproductCard(data);
    }

    //get Params in react
    const { product } = useParams();

    useEffect(() => {
        getProduct(product);
        setCategory(product);
    }, [product]);

    return (
        <>
            <section className="container-fluid">
                <p className="heaeding text-left pt-2 pb-4 mb-0"><b>Category:</b> <span className=" text-capitalize text-primary">{categories}</span></p>
                <div className="row">
                    {
                        product_card.map((data, index) => (
                            <ProductCard data={data} key={index} />
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default Productlist;