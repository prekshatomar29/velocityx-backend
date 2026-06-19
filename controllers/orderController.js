const Order = require("../models/Order");
const Cart = require("../models/Cart");

const createOrder = async (req, res) => {
  try {
    const cartItems = await Cart.find({
      user: req.user._id,
    }).populate("product");

    if (cartItems.length === 0) {
      return res.status(400).json({
        message: "Cart is empty",
      });
    }

    const totalPrice = cartItems.reduce(
      (sum, item) =>
        sum +
        item.product.price * item.quantity,
      0
    );

    const order = await Order.create({
      user: req.user._id,

      items: cartItems.map((item) => ({
        product: item.product._id,
        quantity: item.quantity,
      })),

      totalPrice,
    });

    await Cart.deleteMany({
      user: req.user._id,
    });

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      user: req.user._id,
    })
      .populate("items.product")
      .sort({ createdAt: -1 });

    res.json(orders);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createOrder,
  getMyOrders,
};