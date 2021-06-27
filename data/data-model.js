const db = require("./db-config");

module.exports = {
  findSetsTable,
  addSetsTable,
  updateSetTable,
  deleteSetTable,
  findSetsById,
};

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