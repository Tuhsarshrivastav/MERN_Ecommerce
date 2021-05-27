const express = require("express");
const {
  addOrderItem,
  getOrderById,
  updateOrderToPaid,
} = require("../controllers/orderController");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

//get order by id
router.route("/:id").get(protect, getOrderById);
//craete new order
router.route("/").post(protect, addOrderItem);
//update order
router.route("/:id/pay").put(protect, updateOrderToPaid);
module.exports = router;
