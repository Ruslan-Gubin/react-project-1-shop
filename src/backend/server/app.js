const express = require("express");
const mongoose = require("mongoose");
const chalk = require("chalk");
const cors = require("cors");
const productsApiRoutes = require("../routes/api-productsRoutes");
const postApiRouter = require('../routes/post');
const { MONGO_DB_PRODUCTS } = require("../../constants/namePassDb");

const errorNsg = chalk.bgKeyword("white").redBright;
const successNsg = chalk.bgKeyword("green").white;

const app = express();
app.use(cors());
app.use(express.json());



(async () => {
  await mongoose
    .connect(MONGO_DB_PRODUCTS)
    .then((res) => console.log(successNsg("DB Product ok")))
    .catch((err) => console.log(errorNsg("DB error, err")));
    
app.use(productsApiRoutes);
app.use(postApiRouter);

  app.listen(process.env.PORT || 4444, (error) => {
    error
      ? console.log(errorNsg(error))
      : console.log(successNsg(`Listening port ${process.env.PORT || 4444}`));
  });
})();


    








