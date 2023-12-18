const { default: mongoose } = require("mongoose");

const AdminSchema = mongoose.Schema({
  admin_name: { String },
  admin_email: { Number },
  admin_password: { String },
});

module.exports = mongoose.model("Admin", AdminSchema);