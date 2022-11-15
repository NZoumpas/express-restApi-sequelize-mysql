const express = require("express");
const cors = require("cors");

const app = express();

const corOptions = {
  origin: "https://localhost:8081",
};

// middleware
app.use(cors(corOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//Router
const router = require("./routes/productRouter");
app.use("/api/products", router);

//testing api
app.get("/", (req, res) => {
  res.json({ messsage: "Hello from api oeoe" });
});

//port listening
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
