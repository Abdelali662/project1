import React, { useEffect, useState } from 'react';
import axios from "axios";

function Product() {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        axios.get(`https://dummyjson.com/products`)
            .then(res => {
                const productse = res.data.products;
                setProduct(productse);
                console.log(product)
            })
    },
        []
    )
    return (
        <div>Product</div>
    )
}

export default Product