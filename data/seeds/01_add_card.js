exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("card")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("card").insert([
        { sets_id: 1, term: "red", definition: "kirmizi" },
        { sets_id: 2, term: "green", definition: "yesil" },
        { sets_id: 3, term: "blue", definition: "mavi" },
      ]);
    });
};
