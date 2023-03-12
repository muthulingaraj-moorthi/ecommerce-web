import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Star from "../images/star.png";
import Logo from "../images/icons8-online-store-48.png"
import Offers from "../Components/Offers";
import RelatedProduct from "../Components/RealatedProduct";

function Product() {

    const [product, setproduct] = useState({});
    const [ratings, setrating] = useState({})

    const { id } = useParams();

    //Get Product data
    async function getProductDate(url) {
        let response = await fetch(url);
        let data = await response.json();
        setproduct(data);
        //console.log(data);
        setrating(data.rating)
    }

    //call Product API
    useEffect(() => {
        window.scrollTo(0, 0);
        let url = `https://fakestoreapi.com/products/${id}`;
        getProductDate(url)
    }, [id])
    return (
        <>
            <section className="product-details container-fluid">
                <p className="heaeding text-left pt-2 pb-4 mb-0"><b>Product:</b> <span className="text-capitalize text-primary">{product.title}</span></p>
                <div className="row">
                    <div className="image-container col-lg-5 col-sm-12 position-relative">
                        <div className="position-relative w-100 p-5 pb-2 mb-2">
                            <img className="w-75" src={product.image} />
                            {
                                product.image
                                &&
                                <div className="cart-buy mt-3">
                                    <button className="btn btn-warning" style={{ marginRight: "10px" }}><b>Add cart</b></button>
                                    <button className="btn btn-primary"><b>Buy Now</b></button>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="content-container col-lg-5 col-sm-12">
                        <div className="w-100">
                            <h6 className="text-capitalize text-primary">{product.category}</h6>
                            <h5 className="text-dark mb-0">{product.title}</h5>
                            <div className="rating-assured d-flex align-items-end mb-2">
                                <button className="btn btn-success p-1 mt-2">
                                    <span>{ratings.rate}</span>
                                    <img src={Star} alt={ratings.rate} />
                                </button>
                                <h4 className="text-success mt-0 mb-0">  <span>{`  ${ratings.count} Ratings & Reviews`}</span></h4>
                                <div className="logo-assured-wrapper d-flex align-items-center">
                                    <img className="logo-assured" src={Logo} />
                                    <span>Assured</span>
                                </div>
                            </div>
                            <h2 className="text-success"><span>₹</span>{product.price}</h2>
                            <p>
                                {product.description}
                            </p>
                            <div>
                                <Offers />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="related-product">
                    <div className="wrapper">
                        <RelatedProduct category={product.category} current_id={product.id} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Product;