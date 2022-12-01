import Logo from "../images/icons8-online-store-96.png"
import { useEffect, useState } from "react"

export default function Header(){
    const [category, setCategory] = useState([]);
    const [isToggle, setToggle] = useState(false);

    async function fetchData(url){
        let response = await fetch(url);
        let data =  await response.json();
        setCategory(data);
    }

    function toggle(event){
        setToggle(!isToggle)
    }

    useEffect(() =>{
        let url = 'https://fakestoreapi.com/products/categories';
        // fetch(url)
        // .then((respose) => {
        //     return respose.json();
        // })
        // .then((data) =>{
        //     setCategory(data);
        // })
        fetchData(url);
    },[]);

    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand d-flex align-items-center" href="#home">
                        <img alt="Logo" src={Logo} width="30" height="24" className="d-inline-block align-text-top" />
                        <span className="fw-bold">
                            Ecommerce
                        </span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-toggle="collapse" data-target="/navbarNav" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
                    onClick={toggle}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`${isToggle ? 'collapse':''} navbar-collapse justify-content-end`} id="navbarNav">
                        <ul className="navbar-nav">
                            {
                                category.map((data,index)=>(
                                    <li className="nav-item" key={index}>
                                        <a href={`#${data}`} className="nav-link fw-bold text-capitalize">{data}</a>
                                    </li>
                                ))
                            }
                            {/* <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#Home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#featrure">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Price">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#category">Disabled</a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}