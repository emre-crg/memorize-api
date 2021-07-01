const express = require("express");
const router = express.Router();

const Sets = require("../data-model");

router.get("/", (req, res, next) => {
  Sets.findSetsTable()
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      next({
        statusCode: 500,
        errorMessage: "Setler tablosu getirilirken hata oluştu.",
        err,
      });
    });
});

router.post("/", (req, res, next) => {
  const {title, creator_name, statement} = req.body;

  if (!title || !statement || !creator_name) {
    res.status(401).json({ errorMessage: "Zorunlu alanlar: 'title', 'author' veya 'statement' eksik."})
  } else {
    Sets.addSetsTable({title, creator_name, statement})
      .then((item) => {
        res.status(201).json(item);
      })
      .catch((err) => {
        next({
          statusCode: 500,
          errorMessage: "Post set işlemi gerçekleştirilken hata oluştu.",
          err,
        });
      });
  }
});

router.patch("/:id", (req, res, next) => {
  const { id } = req.params;

  const updateSet = req.body;

  Sets.updateSetTable(updateSet, id)
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      next({
        statusCode: 500,
        errorMessage: "Setler düzemlenirken bir hata oluştu",
        err,
      });
    });
});

router.delete("/:id", (req, res, next) => {
  const { id } = req.params;

  Sets.findSetsById(id).then((deletedSet) => {
    Sets.deleteSetTable(id)
      .then((index) => {
        if (index) {
          res.status(204).end();
        }

        next({
          statusCode: 400,
          errorMessage: "Silmeye Çalıştığınız set sitemde mevcut değil",
        })
      })
      .catch((err) => {
        next({
          statusCode: 500,
          errorMessage: "Setlerin silinmesi sırasında hata oluştu",
          err,
        });
      });
  }).catch(err => {
    next({
      statusCode: 500,
      errorMessage: "Silinmeye çalışılan set bulurken hata oluştu.",
      err,
    })
  })
});

// id ile Set deri döner.
router.get("/:id", (req, res, next) => {
  const { id } = req.params;

  Sets.findSetsById(id)
  .then(set => {
    if(set) {
      res.status(200).json(set)
    } else {
      next({
        statusCode: 400,
        errorMessage: 'SET bulunamadı.'
      })
    }
  })
  .catch(err =>{
    next({
      statusCode: 500,
      errorMessage: "Set bulunurken hata oluştu.",
      err,
    })
  })
})

module.exports = router;
