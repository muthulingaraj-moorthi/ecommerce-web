import OfferTag from "../images/price-tag.png";
import NoCost from "../images/zero-percent.png"

function Offers() {
    return (
        <>
            <p><b>Available offers</b></p>
            <ul className="w-85 offers" style={{ listStyle: "none" }}>
                <li className="d-flex">
                    <span>
                        <img src={OfferTag} alt="OfferTag" className="mr-1" />
                    </span>
                    <b>Ecommerce Pay Later</b>?
                </li>
                <li className="d-flex">
                    <span>
                        <img src={OfferTag} alt="OfferTag" className="mr-1" />
                    </span>
                    <span>
                        <b>Bank Offer10%</b> off on ICICI Bank Credit Card Transactions,<b>up to ₹1250</b>, on orders of ₹5,000 and above
                    </span>
                </li>
                <li className="d-flex">
                    <span>
                        <img src={OfferTag} alt="OfferTag" />
                    </span>
                    <span>
                        <b>Bank Offer10%</b> off on ICICI Bank Credit Card EMI Transactions,<b>up to ₹1250</b>, on orders of ₹5,000 and above
                    </span>
                </li>
                <li className="d-flex">
                    <span>
                        <img src={OfferTag} alt="OfferTag" />
                    </span>
                    <span>
                        <b>Bank Offer10%</b> off on IDBI Bank Debit and Credit Card Transactions,<b>up to ₹500</b>. On orders of ₹1,500 and above
                    </span>
                </li>
                <li className="d-flex">
                    <span>
                        <img src={NoCost} alt="OfferTag" />
                    </span>
                    <span>
                        <b>No Cost EMI</b> on Bajaj Finserv EMI Card on cart value above ₹2999
                    </span>
                </li>
            </ul>
        </>
    )
}

export default Offers;