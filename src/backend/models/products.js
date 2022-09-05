const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      // required: true,
    },
    img: {
      type: String,
      required: true,
    },
    img2: {
      type: String,
    },
    img3: {
      type: String,
    },
    img4: {
      type: String,
    },
    img5: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    oldPrice: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Stationery", productsSchema);

//  const Stationery = mongoose.model("Stationery", productsSchema);

// module.exports = {
//   Stationery
// };