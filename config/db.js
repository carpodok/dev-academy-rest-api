const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DATABASE CONNECTED"))
  .catch((err) => {
    console.log("DATABSE ERROR!", err);
    process.exit(1);
  });
