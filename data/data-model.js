const db = require("./db-config");

module.exports = {
  findSetsTable,
  // findPosts,
};

function findSetsTable() {
  //  db.select('sets')
  return db('sets');
}


// function findPosts() {
//   return db("post");
// }