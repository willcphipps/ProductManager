import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";



const Form = (props) => {
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState();
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  const addProduct = (e) => {
    e.preventDefault();
    let Product = { product, price, description }
    
    axios.post("http://localhost:8000/api/products/", Product)
      .then(res => {
        console.log(res);
        if (res.data.errors) {
          setErrors(res.data.errors);
        }
        else {
          navigate("/")
        }
      })
      .catch(err => console.log(err));
  }
  return (
    <div>
      <h3 className="p-4 my-5 mx-3 text-center bg-secondary">Add New Product</h3> 
      <div className="d-flex justify-content-center">
        <form onSubmit={ (e) => addProduct(e) } className="form-group col-3">
          <input className="m-2 form-control" type="text"  onChange = {(e)=>setProduct(e.target.value)}/>
          {errors.product ?
            <p className="text-danger">{errors.product.message}</p>
            : ""}
          <input className="m-2 form-control" type="number" onChange={(e) => setPrice(e.target.value)} />
          {errors.price ?
            <p className="text-danger">{errors.price.message}</p>
            : ""}
          <input className="m-2 form-control" type="text" onChange={(e) => setDescription(e.target.value)} />
          {errors.description ?
            <p className="text-danger">{errors.description.message}</p>
            : ""}
          <input className="m-2 btn btn-outline-dark" type="submit"/>
        </form>
      </div>
    </div>
    );
}
export default Form;