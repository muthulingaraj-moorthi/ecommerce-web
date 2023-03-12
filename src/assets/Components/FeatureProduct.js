import Star from "../images/star.png"
import Logo from "../images/icons8-online-store-48.png"
import EndPoints from "./EndPoints";
import { Link } from "react-router-dom";

function FeatureProduct(props) {
    let ratings = props.product.rating

    return (
        <>
            <div className="feature-product col-lg-3 col-md-4 col-sm-12 mb-5 text-center">
                <div className="wrappers-ptoduct p-4">
                    <Link to={`${EndPoints.PRODUCT}${props.product.id}`}  className="text-decoration-none product-card-href">
                        <h6 className="text-black">{props.product.title}</h6>
                        <img src={props.product.image} alt="Product" className="product-img" />
                        <h5 className="text-success m-auto mt-2 w-50 p-2 rounded"><span>₹</span>{props.product.price}</h5>
                        <div className="rating-assured d-md-block d-lg-flex align-items-end mb-2 justify-content-center">
                            <button className="btn btn-success p-1 mt-2">
                                <span>{ratings.rate}</span>
                                <img src={Star} alt={ratings.rate} />
                            </button>
                            <h4 className="text-success mt-0 mb-0">  <span>{`  ${ratings.count} Ratings & Reviews`}</span></h4>
                            <div className="logo-assured-wrapper d-flex align-items-center justify-content-center justify-content-md-center">
                                <img className="logo-assured" src={Logo} />
                                <span>Assured</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default FeatureProduct;