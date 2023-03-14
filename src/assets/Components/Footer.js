import { Link } from "react-router-dom";
import Logo from "../images/icons8-online-store-96.png"


function Footer() {
    return (
        <>
            <div className="footer-wrapper bg-primary p-2 mt-2">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-3 col-sm-12">
                            <div className="logo-section d-flex align-items-end">
                                <img className="footer-logo" src={Logo} />
                                <span className="text-white fw-bold">Ecommerce</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="email-cp-right">
                                <p className="mb-0 fw-bold">
                                    &#169; 2023, No Copy Rights, Just Fun <br></br>
                                    <a href="https://muthu-developer.github.io/ecommerce-web/" className="text-white text-decoration-none fw-bold fst-italic" target="_blank">
                                        ecommerce.com
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-3 col-sm-12">
                            <div className="email-cp-right text-end">
                                <a href="https://www.linkedin.com/in/muthulingaraj-moorthilingam-388274168/" className="text-white text-decoration-none fw-bold" target="_blank">Muthulingaraj</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;