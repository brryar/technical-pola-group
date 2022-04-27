const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;
const PhoneController = require("./controllers/PhoneController");
const errorHandler = require("./middlewares/errorHandler");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Phones Server Running" });
});

app.get("/phones", PhoneController.fetchPhones);
app.get("/phones/:id", PhoneController.fetchPhoneById);
app.post("/phones", PhoneController.addPhone);
app.put("/phones/:id", PhoneController.editPhoneById);
app.delete("/phones/:id", PhoneController.deletePhoneById);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
