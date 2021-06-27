exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("sets")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("sets").insert([
        {
          id: 1,
          title: "Fiiller Seviye 1",
          creator_name: "emre_crg",
          statement: "lorem ipsum sid amed",
        },
        {
          id: 2,
          title: "Fiiller Seviye 2",
          creator_name: "emre_crg",
          statement: "lorem ipsum sid amed",
        },
        {
          id: 3,
          title: "Fiiller Seviye 3",
          creator_name: "emre_crg",
          statement: "lorem ipsum sid amed",
        },
      ]);
    });
};
