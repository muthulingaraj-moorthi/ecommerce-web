import Logo from "../images/icons8-online-store-96.png"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import EndPoints from "./EndPoints";

export default function Header(){
    const [category, setCategory] = useState([]);
    const [isToggle, setToggle] = useState(true);

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
        fetchData(url);
    },[]);

    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand d-flex align-items-center" to={EndPoints.HOME}>
                        <img alt="Logo" src={Logo} width="30" height="24" className="d-inline-block align-text-top" />
                        <span className="fw-bold">
                            Ecommerce
                        </span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-toggle="collapse" data-target="/navbarNav" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
                    onClick={toggle}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`${isToggle ? 'collapse':''} navbar-collapse justify-content-end`} id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to={`${EndPoints.CATEGORY}`} className="nav-link fw-bold text-capitalize">category</Link>
                            </li>
                            {
                                category.map((data,index)=>(
                                    <li className="nav-item" key={index}>
                                        <Link to={`${EndPoints.DEFAULT}/category/${data}`} className="nav-link fw-bold text-capitalize">{data}</Link>
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