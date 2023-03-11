import Star from "../images/star.png"

function Rating(props) {

    return (
        <>
            {
                props.rate.map((date,index) =>(
                    <img src={Star} key={index} style={{ width: "25px" }} alt={props.rate_count} />
                ))
            }
        </>
    )
}

export default Rating;