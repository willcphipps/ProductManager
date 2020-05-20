const productController = require("../controllers/products.controller");

module.exports = app => {
  app.get("/api/products/", productController.returnAllProducts);
  app.get("/api/products/:id", productController.returnOneProduct );
  app.post("/api/products/", productController.createProduct);
//   app.post("/api/products/update/:id", productController.updateProduct);
//   app.delete("/api/products/delete/:id", productController.deleteProduct);
};
