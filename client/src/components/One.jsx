import React, { useEffect, useState } from 'react';
import axios from 'axios';

const One = (props) => {
  const [product, setProduct] = useState({})
  console.log(props.id)
  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${props.id}`)
      .then(res => {
        console.log(res.data.product);
        setProduct(res.data.product)
        // setProduct(res.data.product)
      })
      .catch(err => {
        console.log(err)
      });
    
  }, [props]);

  return (
    <>
      <h3 className="m-4">Check out your product!</h3>
    <div className="border border-dark text-center m-4 py-3">
      <p >{ product.product }</p>
      <p>{ product.price }</p>
      <p>{product.description}</p>

      </div>
    </>
  );
}

export default One;