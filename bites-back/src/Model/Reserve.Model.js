const { default: mongoose, mongo } = require("mongoose");

const ReserveSchema = mongoose.Schema({
  reserve_table: { Number },
  reserve_date: { Date },
  reserve_hour: { String },
});

module.exports = mongoose.model("Reserve", ReserveSchema);
