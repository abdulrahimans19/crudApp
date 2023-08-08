const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("strictQuery", true);

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database connected");
  })
  .catch(() => {
    console.log("error connecting database");
  });

const studentSchema = new mongoose.Schema({
  name: String,
  mark: Number,
});

const student = mongoose.model("student", studentSchema);

module.exports = student;
