import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import axios from 'axios';



const Products = (props) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState();
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});
  const [edit, setEdit] = useState();
  
  const getProducts = () => {
    axios.get("http://localhost:8000/api/products") 
      .then(res => {
        console.log(res.data);
        setProducts(res.data.product);
      })
      .catch(err => console.log(err));
  }
  const deleteProduct = (e, id) => {
    e.preventDefault();
    console.log("delete route", id);
    axios.delete(`http://localhost:8000/api/products/${id}`)
      .then(res => {
        console.log(res);
        getProducts();
      })
      .catch(err => console.log(err));
  }
  const showEdit = (e, prod, ) => {    
    e.preventDefault();
    setProduct(prod.product)
    setPrice(prod.price)
    setDescription(prod.description)
    setEdit(prod._id);
    document.getElementById("edit").style.display = "block";
  }

  const hideEdit = () => {
    document.getElementById("edit").style.display = "none";
  }

  const editProduct = (e, id) => {
    console.log("the war ofstars",id);
    e.preventDefault()
    let Product = { product, price, description };
    console.log("in the edit",Product, id);
    axios.put(`http://localhost:8000/api/products/${id}`, Product)
     .then(res => {
        console.log(res);
        if (res.data.errors) {
          setErrors(res.data.errors);
        }
        else {
          hideEdit();
          getProducts();
        }
      })
      .catch(err => console.log(err));
  }
  
  useEffect(() => {
    getProducts();
  }, [props]);

  return (
    <div>
     <h3 className="p-4 my-5 mx-3 text-center bg-secondary">Product Manager</h3> 
      <div className="d-flex flex-row justify-content-center">
        
        <table className="table table-striped table-responsive col-8">
          <thead className="thead-inverse">
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {products.map(product => 
                
              <tr key = {product._id}>
                  <td> { product.product } </td> 
                  <td>{ product.price }</td>
                  <td>{product.description}</td>
                  <td>
                    <a href="#" onClick={(e) =>  showEdit(e, product) }>edit</a>
                      {" | "}
                    <a href="#" onClick={(e) => deleteProduct(e, product._id)}>delete</a>
                  </td>
              </tr>
              )}
            </tbody>
        </table>
        <div id="edit">
          <h4 onClick={ hideEdit }className="float-right m-2">&times;</h4>
          <div className="d-flex justify-content-center">
            <form className="form-group" onSubmit={(e) => editProduct(e, edit)}>
              <h4 className="m-4">Edit Product</h4>
              <input className="m-2 form-control" value={ product } type="text" onChange={(e) => setProduct(e.target.value) } />
                {errors.product ? <p className="text-danger">{errors.product.message}</p> : ""}
              <input className="m-2 form-control" value={ price } type="number" onChange={(e) => setPrice(e.target.value) } />
                {errors.price ? <p className="text-danger">{errors.product.message}</p> : ""}
              <input className="m-2 form-control" value={description} type="text" onChange={(e) => setDescription(e.target.value) }/>
                {errors.description ? <p className="text-danger">{errors.product.message} </p> : ""}
              <button className="m-2"> submit </button>
            </form>
          </div>
        </div>
      </div>
     </div>
   
  );
}
export default Products;