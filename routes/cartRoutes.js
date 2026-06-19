const express = require("express");
const router = express.Router();

const {
  getCart,
  addToCart,
  removeCartItem,
  updateCartQuantity,
} = require("../controllers/cartController");

const {
  protect,
} = require("../middleware/authMiddleware");

router.get("/", protect, getCart);

router.post("/add", protect, addToCart);

router.put("/:id", protect, updateCartQuantity);

router.delete("/:id", protect, removeCartItem);

module.exports = router;