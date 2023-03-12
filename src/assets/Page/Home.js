// import { CarouselProvider,Slider,  Slide} from "pure-react-carousel";
// import 'pure-react-carousel/dist/react-carousel.es.css';
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';
import { useEffect, useState } from "react";
import Banner_1 from "../images/banner_1.jpg";
import Banner_2 from "../images/banner_2.jpg";
import Banner_3 from "../images/banner_3.jpg";
import Banner_4 from "../images/banner_4.jpg";
import Productlist from "./ProductList";
import RelatedProduct from "../Components/RealatedProduct";

function Home() {
    const [category, setCategory] = useState([]);
    const [num, setNum] = useState(0)

    async function fetchData(url) {
        let response = await fetch(url);
        let data = await response.json();
        setCategory(data);
    }

    useEffect(() => {
        let url = 'https://fakestoreapi.com/products/categories';
        fetchData(url);
        setNum((Math.floor(Math.random() * 4) + 1)-1)
    }, []);
    const images = [
        Banner_1, Banner_2, Banner_3, Banner_4
    ];
    return (
        <div className="container-fluid">
            <div className="row p-0">
                <Slide autoplay={true} duration={1000}>
                    <div className="each-slide-effect">
                        <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                            <div className="content">
                                <span className="p-3 mb-2 bg-light text-dark text-capitalize text-primary d-block">{category[0]}</span>
                                <p className="p-3 mb-2 bg-primary text-white">
                                    Apart from the best deals, amazing offers and the latest styles online, the app also gives you the flexibility to shop at your convenience.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="each-slide-effect">
                        <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                            <div className="content">
                                <span className="p-3 mb-2 bg-light text-dark text-capitalize text-primary d-block">{category[1]}</span>
                                <p className="p-3 mb-2 bg-primary text-white">
                                    Oriana comes with the trust and authenticity of GRT Jewellers - one of the India's foremost jewellery store having an exquisite
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="each-slide-effect">
                        <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                            <div className="content">
                                <span className="p-3 mb-2 bg-light text-dark text-capitalize text-primary d-block">{category[2]}</span>
                                <p className="p-3 mb-2 bg-primary text-white">
                                    Buy mens clothing on sale. Select a wide range of mens tshirts, shirts and jeans online - 100% original products, Shipping in 24Hr
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="each-slide-effect">
                        <div style={{ 'backgroundImage': `url(${images[3]})` }}>
                            <div className="content">
                                <span className="p-3 mb-2 bg-light text-dark text-capitalize text-primary d-block">{category[3]}</span>
                                <p className="p-3 mb-2 bg-primary text-white">
                                    Women's clothing online : Shop the widest collection for women at the biggest discounts. Choose from a top range of casual Cloths
                                </p>
                            </div>
                        </div>
                    </div>
                </Slide>
            </div>
            <div className="row">
                <div className="mt-2 home-realated-page">
                    {
                        <RelatedProduct category={category[num]} current_id={0} />
                    }
                </div>
            </div>
        </div>

    );
}

export default Home;