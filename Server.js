const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Successfully connected to MongoDB."))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to the Travel Management System!");
});

// Import and use the routes
const routes = require("./Routes/routes");
app.use("/api", routes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
