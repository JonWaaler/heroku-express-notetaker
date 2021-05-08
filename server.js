const express = require("express");

const PORT = process.env.PORT || 3000;
const app = express();

// serve notes api
app.use("/api/notes", require("./routes/notes"));

// serve html pages
app.use("/", require("./routes/htmlroute"));

// listener
app.listen(PORT, () => {
  console.log(`Server started at: http://localhost:${PORT}/api/notes`);
});