const db = require("./db-config");

module.exports = {
  findSetsTable,
  addSetsTable,
  updateSetTable,
  deleteSetTable,
  findSetsById,

  findCardById,
  findCardTable,
  findCardAllTable,
  addCardTable,
};


/** SETS METODLARI */

function findSetsById(id) {
  return db("sets").where({id}).first();
}

function findSetsTable() {
  //  db.select('sets')
  return db("sets");
}

function addSetsTable(newSets) {
  return db("sets")
    .insert(newSets, "id")
    .then(([id]) => {
      return db("sets").where({ id }).first();
    });
}

function updateSetTable(updateSet, id) {
  return db("sets")
  .update(updateSet)
  .where({ id })
  .then(index => {
    if(index) {
      return db("sets").where( { id } )
    }
  })
}

function deleteSetTable(id) {
  return db("sets")
  .del("sets").where( {id} )
}


/** CARD METODLARI */

function findCardById(id) {
  // console.log(db("card").where({id}).first())
  return db("card").where({id}).first();
}

function findCardAllTable() {
  //  db.select('sets')
  return db("card");
}

function findCardTable(sets_id) {
  //  db.select('sets')
  return db("card").where({sets_id});
}

function addCardTable(newCard) {
  return db("card")
    .insert(newCard, "id")
    .then(([id]) => {
      return db("card").where({ id }).first();
    });
}