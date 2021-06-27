const express = require("express");
const router = express.Router();

const Sets = require("../data-model");

router.get("/", (req, res) => {
  Sets.findSetsTable().then(item => {
    res.status(200).json(item)
  }).catch(err => {
    next({
      statusCode: 500,
      errorMessage: 'Setler tablosu getirilirken hata oluştu.',
      err
    })
  })
});

// router.get("/", (req, res) => {
//   res.status(200).json({
//     sets: 'deneme'
//   })
// });




module.exports = router;