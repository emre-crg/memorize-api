const express = require("express");
const router = express.Router();

const DM = require("../data-model");

// SetId'si verilen Cardları geri döner.
router.get("/setId/:setId", (req, res, next) => {
  const { setId } = req.params;

  console.log(setId)
  DM.findCardTable(setId)
  .then(item => {
    if(item) {
      res.status(200).json(item)
    } else {
      next({
        statusCode: 400,
        errorMessage: 'Card bulunamadı.'
      })
    }
  })
  .catch(err =>{
    next({
      statusCode: 500,
      errorMessage: "Card bulunurken hata oluştu.",
      err,
    })
  })
})

// Bütün kard ları getir.
router.get("/all", (req, res, next) => {
  DM.findCardAllTable()
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      next({
        statusCode: 500,
        errorMessage: "Cardlar tablosu getirilirken hata oluştu.",
        err,
      });
    });
});

// Id'si verilen card'ı gerir
router.get("/:id", (req, res, next) => {
  const {id} = req.params;

  console.log("CerdId", id);

  DM.findCardById(id)
    .then((item) => {
      if(item) {
        res.status(200).json(item);
      } else {
        next({
          statusCode: 400,
          errorMessage: 'Card bulunamadı.'
        })
      }
    })
    .catch((err) => {
      next({
        statusCode: 500,
        errorMessage: "Cardlar tablosu getirilirken hata oluştu.",
        err,
      });
    });
});


router.post("/:setId", (req, res, next) => {
  const createCard = req.body;
  const {setId} = req.params;
  createCard.sets_id = setId;

  const { term, definition, sets_id } = createCard;

  if(!term || !definition || !sets_id) {
    res.status(401).json({ errorMessage: "Zorunlu alanlar: 'title', 'author' veya 'statement' eksik."})
  } else {
    
    DM.addCardTable(createCard)
    .then((item) => {
      res.status(201).json(item);
    })
    .catch((err) => {
      next({
        statusCode: 500,
        errorMessage: "Set oluşturulurken hata oluştu.",
        err,
      });
    });
  }
});




module.exports = router;