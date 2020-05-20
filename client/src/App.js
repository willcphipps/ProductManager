import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";


function App() {
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
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="App">
      <div className="flex-column">
        <form onSubmit={ (e) => addProduct(e) } className="form-group col-3">
          <input className="form-control" type="text"  onChange = {(e)=>setProduct(e.target.value)}/>
          {errors.product ?
            <p className="text-danger">{errors.product.message}</p>
            : ""}
          <input className="form-control" type="number" onChange={(e) => setPrice(e.target.value)} />
          {errors.price ?
            <p className="text-danger">{errors.price.message}</p>
            : ""}
          <input className="form-control" type="text" onChange={(e) => setDescription(e.target.value)} />
          {errors.description ?
            <p className="text-danger">{errors.description.message}</p>
            : ""}
          <input className="btn btn-outline-dark" type="submit"/>
        </form>
      </div>
    </div>
  );
}

export default App;
