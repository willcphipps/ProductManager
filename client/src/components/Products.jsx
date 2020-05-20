import React, { useState, useEffect } from "react";
import axios from 'axios';


const Products = (props) => {
  const [products, setProducts] = useState([]);
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
  // const editProduct = (e, id) => {
  //   e.preventDefault()
  //   console.log(id);
  //   axios.put(`http://localhost:8000/api/products/${id}`,{})
  // }

  useEffect(() => {
    getProducts();
  }, [props]);

  return (
    <div className="d-flex justify-content-center">
      <table className="table table-striped table-inverse table-responsive">
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
                  <a href="#" onClick={(e) => editProduct(e, product._id)}>edit</a>
                    {" | "}
                  <a href="#" onClick={(e) => deleteProduct(e, product._id)}>delete</a>
                </td>
            </tr>
             )}
            
          </tbody>
      </table>
    </div>
   
  );
}
export default Products;