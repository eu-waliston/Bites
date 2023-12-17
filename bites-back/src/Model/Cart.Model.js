const { default: mongoose } = require("mongoose");

const CartSchema = mongoose.Schema({
  food_name: { String },
  food_price: { Number },
  food_image: { String },
});

module.exports = mongoose.model("Cart", CartSchema);
