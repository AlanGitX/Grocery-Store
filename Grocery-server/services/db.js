const mongoose = require("mongoose");
mongoose.set("strictQuery", false);


mongoose.connect("mongodb://localhost:27017/Grocery", () => {
  console.log("MongoDb connected");
});

const Item = mongoose.model("Item", {
  title: String,
  id: Number,
  type: String,
  description: String,
  filename: String,
  height: Number,
  width: Number,
  price: Number,
  rating: Number
  })


  const Wishlist = mongoose.model("Wishlist", {
    title: String,
    id: Number,
    type: String,
    description: String,
    filename: String,
    height: Number,
    width: Number,
    price: Number,
    rating: Number
    })

    const Cart = mongoose.model("Cart", {
      title: String,
      id: Number,
      type: String,
      description: String,
      filename: String,
      height: Number,
      width: Number,
      price: Number,
      rating: Number
      })

module.exports = {
 Item,Wishlist,Cart
};


