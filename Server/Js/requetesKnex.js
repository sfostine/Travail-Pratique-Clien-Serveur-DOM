const path = require("path");

const knex = require("knex") ({
    client:"sqlite3",
    connection: {
        filename: path.join(__dirname, "../Database/Database.sqlite")
    },
    useNullAsDefault: false
});

function voirUtilisateurs() {
    return knex("Utilisateurs");
}

function ajouterUnUtilisateur(utilisateur) {
    return knex("Utilisateurs").insert(utilisateur);
}

module.exports = {
    ajouterUnUtilisateur,
    voirUtilisateurs
}