const db = require("./db");

const allProducts = () => {
  return db.Item.find().then((result) => {
    if (result) {
      return {
        statusCode: 200,
        products: result,
      };
    } else {
      return {
        statusCode: 404,
        message: "No data present",
      };
    }
  });
};

const viewProduct = (id) => {
  return db.Item.findOne({
    id,
  }).then((result) => {
    if (result) {
      return {
        statusCode: 200,
        product: result,
      };
    } else {
      return {
        statusCode: 404,
        message: "No data present",
      };
    }
  });
};

const Addwishlist = (product) => {
  return db.Wishlist.findOne({
    id: product.id,
  }).then((result) => {
    if (result) {
      return {
        statusCode: 404,
        message: "Item already inside wishlist",
      };
    } else {
      let newItem = new db.Wishlist({
        title:product.title,
        id: product.id,
        type: product.type,
        description: product.description,
        filename: product.filename,
        height: product.height,
        width: product.width,
        price: product.price,
        rating: product.rating,
      });
      newItem.save()
      return {
        statusCode: 200,
        message: "Product added to the wishlist",
      };
    }
  });
};


const getWishlist = () => {
  return db.Wishlist.find().then((result) => {
    if (result) {
      return {
        statusCode: 200,
        wishlist: result,
      };
    } else {
      return {
        statusCode: 404,
        message: "No product in wishlist",
      };
    }
  });
};


const deleteWishlist = (id) =>{
  return db.Wishlist.deleteOne({id}).then((result)=>{
    if(result){
      return db.Wishlist.find().then((result) => {
        if (result) {
          return {
            statusCode: 200,
            wishlist: result,
          };
        } else {
          return {
            statusCode: 404,
            message: "No product in wishlist",
          };
        }
      });
    }
    else{
      return{
        statusCode: 404,
        message: "product not found",

      }
    }
  })
}


const getCart = () => {
  return db.Cart.find().then((result) => {
    if (result) {
      return {
        statusCode: 200,
        Cart: result,
      };
    } else {
      return {
        statusCode: 404,
        message: "No product in wishlist",
      };
    }
  });
};


const AddToCart = (product) => {
  return db.Cart.findOne({
    id: product.id,
  }).then((result) => {
    if (result) {
      return {
        statusCode: 404,
        message: "Item already inside Cart",
      };
    } else {
      let newItem = new db.Cart({
        title:product.title,
        id: product.id,
        type: product.type,
        description: product.description,
        filename: product.filename,
        height: product.height,
        width: product.width,
        price: product.price,
        rating: product.rating,
      });
      newItem.save()
      return {
        statusCode: 200,
        message: "Product added to the Cart",
      };
    }
  });
};



const deleteCart = (id) =>{
  return db.Cart.deleteOne({id}).then((result)=>{
    if(result){
      return db.Cart.find().then((result) => {
        if (result) {
          return {
            statusCode: 200,
            Cart: result,
          };
        } else {
          return {
            statusCode: 404,
            message: "No product in wishlist",
          };
        }
      });
    }
    else{
      return{
        statusCode: 404,
        message: "product not found",

      }
    }
  })
}
module.exports = {
  allProducts,
  viewProduct,Addwishlist,getWishlist,deleteWishlist,getCart,AddToCart,deleteCart
};
