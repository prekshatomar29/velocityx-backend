const Cart = require("../models/Cart");

const getCart = async (req, res) => {
  try {
    const cartItems = await Cart.find({
      user: req.user._id,
    }).populate("product");

    res.json(cartItems);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const addToCart = async (req, res) => {
  try {
    const { productId } = req.body;

    const existingItem = await Cart.findOne({
      user: req.user._id,
      product: productId,
    });

    if (existingItem) {
      existingItem.quantity += 1;

      await existingItem.save();

      return res.json(existingItem);
    }

    const cartItem = await Cart.create({
      user: req.user._id,
      product: productId,
      quantity: 1,
    });

    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const removeCartItem = async (req, res) => {
  try {
    const cartItem = await Cart.findById(req.params.id);

    if (!cartItem) {
      return res.status(404).json({
        message: "Cart item not found",
      });
    }

    await Cart.findByIdAndDelete(req.params.id);

    res.json({
      message: "Item removed from cart",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const updateCartQuantity = async (req, res) => {
  try {
    const { quantity } = req.body;

    const cartItem = await Cart.findById(req.params.id);

    if (!cartItem) {
      return res.status(404).json({
        message: "Cart item not found",
      });
    }

    cartItem.quantity = quantity;

    await cartItem.save();

    res.json(cartItem);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getCart,
  addToCart,
  removeCartItem,
  updateCartQuantity,
};