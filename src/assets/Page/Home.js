// import { CarouselProvider,Slider,  Slide} from "pure-react-carousel";
// import 'pure-react-carousel/dist/react-carousel.es.css';
import { Slide  } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';
import { useEffect,useState } from "react";
import Logo from "../images/icons8-online-store-96.png"

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
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    ];
    return (
      <div>
        <h1>This is the home page</h1>
        {/* <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={3}
            interval={3000}
            isPlaying={true}
            infinite={true}
            playDirection='forward'
        >
            <Slider>
                <Slide index={0}>I am the first Slide.</Slide>
                <Slide index={1}>I am the second Slide.</Slide>
                <Slide index={2}>I am the third Slide.</Slide>
            </Slider>
        </CarouselProvider> */}
        <Slide autoplay={true} duration={1000} infinite={true} >
            {
                category.map((data,index) =>
                    <div key={index} className="each-slide-effect">
                        <div style={{'backgroundColor':`#FF000${index}`}}>
                            <img src={Logo} />
                            <span>{data}</span>
                        </div>
                    </div>
                )
            }
           
            {/* <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                    <span>Slide 2</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    <span>Slide 3</span>
                </div>
            </div> */}
        </Slide>
      </div>
    );
}
  
export default Home;