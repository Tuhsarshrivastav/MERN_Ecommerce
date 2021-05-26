const express = require("express");
const {
  addOrderItem,
  getOrderById,
  updateOrderToPaid
} = require("../controllers/orderController");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

//craete new order
router.route("/").post(protect, addOrderItem);
router.route("/:id").all(protect, getOrderById);
router.route("/:id/pay").put(protect, updateOrderToPaid);
module.exports = router;
