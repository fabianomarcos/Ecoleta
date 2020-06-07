const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database('./src/database/databse.db')

module.exports = db

/* db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            image TEXT,
            address TEXT,
            addressTwo TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)
})

const query = `INSERT INTO places ( image, name, address, addressTwo, state, city, items )
     VALUES (?, ?, ?, ?, ?, ?, ?);`

const values = [
    "https://unsplash.com/photos/Jwh_k0K_QOM",
    "Colectoria",
    "Rua Mariza",
    "Número 45",
    "Minas Gerais",
    "Lagoa Santa",
    "Residuos Eletrônicos"
]

function afterInsertData(err) {
    if (err) { return console.log(err) }
    
    console.log("Cadastrado com sucesso")
    console.log(this)
}

db.run(query, values, afterInsertData)
 */