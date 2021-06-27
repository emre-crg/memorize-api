const express = require("express");
const router = express();
const cors = require("cors");
const helmet = require("helmet");

router.use(express.json());
router.use(cors());
router.use(helmet());

const setRouter = require("../data/routers/set-router");
// const userRouter = require("../data/routers/user-router");

router.use("/sets", setRouter);
// router.use("/", userRouter);

router.get("/", (req, res) => {
  res.status(200).json({ server: "up" });
});

module.exports = router;