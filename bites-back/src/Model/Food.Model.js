const { default: mongoose } = require("mongoose");

const FoodSchema = mongoose.Schema({
  food_name: { String },
  food_rate: { Number },
  food_description: { String },
  food_price: { Number },
  food_flag: [String],
  food_image: { String },
});

module.exports = mongoose.model("Food", FoodSchema);
