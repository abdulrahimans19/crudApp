const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb+srv://crud:crud@cluster0.ul2vgvs.mongodb.net/", {
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
