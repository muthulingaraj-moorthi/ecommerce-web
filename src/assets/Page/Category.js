import { useEffect, useState} from "react";

function Category(){
    const [category, setCategory] = useState([]);
    useEffect(()=>{
        let url = 'https://fakestoreapi.com/products/category/jewelery';
        fetch(url)
        .then((response)=>{
            return response.json();
        })
        .then((data) => {
            setCategory(data);
            console.log(data);
        })

    },[])
    return(
        <>
            {
                category.map((data, index) =>
                    <div key={index}>
                        <div className="categories-wrapper">
                            <h6>{data.category}</h6>
                            <p>
                                {data.description}
                            </p>
                            <img alt="Category" src={data.image} />
                            <h3>
                                {data.title}
                            </h3>
                        </div>
                    </div>
                )
            }
        </>
    )
}
export default Category;