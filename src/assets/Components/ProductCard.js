import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EndPoints from "./EndPoints";
import Rating from "./Rating";


function ProductCard(props) {

    const [rating, setRating] = useState([]);
    const [rateCount, setRateCount] = useState(0)
    useEffect(() => {
        // console.log(props.data.rating.rate.toFixed());
        let rate = props.data.rating.rate;
        setRateCount(rate.toFixed());
        if (rate.toFixed() <= 2 || rate.toFixed() <= 2.9) {
            let newrating = new Array("1", "2");
            setRating(newrating)
        }
        else if (rate.toFixed() === 3 || rate.toFixed() <= 3.9) {
            let newrating = new Array("1", "2", "3");
            setRating(newrating)
        }
        else if (rate.toFixed() === 4 || rate.toFixed() <= 4.9) {
            let newrating = new Array("1", "2", "3", "4");
            setRating(newrating)
        }
        else if (rate.toFixed() === 5 || rate.toFixed() <= 5) {
            let newrating = new Array("1", "2", "3", "4", "5");
            setRating(newrating)
        }

    }, [props])
    return (
        <>
            <div className="col-lg-4">
                <div className="product_card_wrapper">
                    <div className="wrapper_card">
                        <Link to={`${EndPoints.PRODUCT}${props.data.id}`} className="text-decoration-none product-card-href">
                            <div>
                                <div className="card border-1 p-2 mb-5 rounded">
                                    <p className="product_name d-flex align-items-center">{props.data.title}</p>
                                    <div className="d-flex justify-content-center">
                                        <img className="product-img" alt={props.data.title} src={props.data.image} />
                                    </div>
                                    <button className="btn btn-primary w-50 m-auto mt-3 mb-2">
                                        Rs: {props.data.price}
                                    </button>
                                    {/* <p>
                                    {props.data.description}
                                </p> */}
                                    <>
                                        Rating: {rateCount}
                                        <div className="d-flex justify-content-center">
                                            <Rating rate_count={rateCount} rate={rating} />
                                        </div>
                                    </>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard;