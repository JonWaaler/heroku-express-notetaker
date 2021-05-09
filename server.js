const express = require("express");

const PORT = process.env.PORT || 3000;
const app = express();

// serve html pages
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// serve notes api
app.use("/api", require("./routes/notes")); // api route
app.use("/", require("./routes/htmlroute"));

// listener
app.listen(PORT, () => {
  console.log(`Server started at: http://localhost:${PORT}/`);
});
