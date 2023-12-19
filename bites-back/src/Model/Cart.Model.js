const { default: mongoose } = require("mongoose");

const CartSchema = mongoose.Schema({
  cart_item_name: { String },
  cart_item_price: { Number },
  cart_item_image: { String },
  cart_item_quantity: { Number },
});

module.exports = mongoose.model("Cart", CartSchema);
