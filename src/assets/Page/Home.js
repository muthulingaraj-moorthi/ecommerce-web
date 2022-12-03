// import { CarouselProvider,Slider,  Slide} from "pure-react-carousel";
// import 'pure-react-carousel/dist/react-carousel.es.css';
import { Slide  } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';
import { useEffect,useState } from "react";
import Banner_1 from "../images/banner_1.jpg";
import Banner_2 from "../images/banner_2.jpg";
import Banner_3 from "../images/banner_3.jpg";
import Banner_4 from "../images/banner_4.jpg";

function Home() {
    const [category, setCategory] = useState([]);

    async function fetchData(url){
        let response = await fetch(url);
        let data =  await response.json();
        setCategory(data);
    }

    useEffect(() =>{
        let url = 'https://fakestoreapi.com/products/categories';
        fetchData(url);
    },[]);
    const images = [
       Banner_1, Banner_2, Banner_3, Banner_4
    ];
    return (
        <Slide autoplay={true} duration={1000}>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                <div className="content">
                    <span className="text-capitalize">{category[0]}</span>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    </div>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                   <div className="content">
                        <span className="text-capitalize">{category[1]}</span>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                   </div>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    <div className="content">
                        <span className="text-capitalize">{category[2]}</span>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[3]})` }}>
                    <div className="content">
                        <span className="text-capitalize">{category[3]}</span>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>
            </div>
        </Slide>
      
    );
}
  
export default Home;