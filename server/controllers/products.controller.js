const Product = require("../models/products.model");

module.exports.returnAllProducts = (req, res) => {
  Product.find()
    .then(allProducts => res.json({ product: allProducts }))
    .catch(err => res.json({ message: "warning... ", error: err }));
};

module.exports.createProduct = (req, res) => {
  console.log(req.body);
  Product.create(req.body)
    .then(newProduct => {
      res.json({ product: newProduct })
      console.log("in the controller");
    })
    .catch(err => res.json( err ));
};

module.exports.returnOneProduct = (req, res) => {
	Product.findOne({ _id: req.params.id })
		.then(oneProduct => res.json({ product: oneProduct }))
		.catch(err => res.json(err));
};

// module.exports.updateProduct = (req, res) => {
//   Product.findByIdAndUpdate({ _id: req.params.id }, req.body, {runValidators:true})
//     .then(editProduct => res.json({ product: editProduct }))
//     .catch(err => res.json({ message: "warning... ", error: err }));
// };

// module.exports.deleteProduct = (req, res) => {
//   Product.deleteOne({ _id: req.params.id })
//     .then(result => res.json({ result: result }))
//     .catch(err => res.json({ message: "warning... ", error: err }));
// };
