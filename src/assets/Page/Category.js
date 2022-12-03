import { useEffect, useState} from "react";
import Electronics from "../images/electronics.jpg";
import Jewelery from "../images/jewelery.jpg";
import Men from "../images/mens-cloth.jpg";
import Women from "../images/women-cloth.jpg";

function Category(){
    const [category, setCategory] = useState([]);
    useEffect(()=>{
        let url = 'https://fakestoreapi.com/products/categories';
        fetch(url)
        .then((response)=>{
            return response.json();
        })
        .then((data) => {
            setCategory(data);
            console.log(data);
        })

    },[]);
    const _Category_Image_ = [
        Electronics,  Jewelery , Men, Women
    ]
    const _Content_ = [
        "Apart from the best deals, amazing offers and the latest styles online, the app also gives you the flexibility to shop at your convenience.",
        "Oriana comes with the trust and authenticity of GRT Jewellers - one of the India's foremost jewellery store having an exquisite",
        "Buy mens clothing on sale. Select a wide range of mens tshirts, shirts and jeans online - 100% original products, Shipping in 24Hr",
        "Women's clothing online : Shop the widest collection for women at the biggest discounts. Choose from a top range of casual Cloths"
    ]
    return(
        <>
            <div className="category-page">
                <div className="container">
                    <div className="category-header">
                        <h2 className="text-start">
                            Category
                        </h2>
                    </div>
                    <div className="row">
                        {
                            category.map((data, index) =>
                                <div key={index} className="col-wrapper col-lg-3 col-md-6 col-sm-12">
                                    <div className="card-section">
                                        <div className="categories-wrapper">
                                            <h6 className="text-capitalize text-white">{data}</h6>
                                            <img className="category-img" alt="Category" src={_Category_Image_[index]} />
                                            <p className="mt-2 text-white">
                                                {_Content_[index]}
                                            </p>
                                            <button type="button" className="btn btn-primary text-uppercase mt-1">Shop</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        {/* <div className="col-wrapper col-3 col-lg-3 col-md-6 col-sm">
                        col-lg-3 col-md-6 col-sm-12
                        </div>
                        <div className="col-wrapper col-3 col-lg-3 col-md-6 col-sm">
                        col-lg-3 col-md-6 col-sm-12
                        </div>
                        <div className="col-wrapper col-3 col-lg-3 col-md-6 col-sm">
                        col-lg-3 col-md-6 col-sm-12
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Category;