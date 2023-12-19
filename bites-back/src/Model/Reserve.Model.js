const { default: mongoose, mongo } = require("mongoose");

const ReserveSchema = mongoose.Schema({
  table_number: { Number },
  reserve_date: { Date },
  reserve_hour: { String },
  reserve_name: { String },
  table_status: [String],
});

module.exports = mongoose.model("Reserve", ReserveSchema);
