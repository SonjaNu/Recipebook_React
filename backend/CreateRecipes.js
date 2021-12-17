const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('recipes.db');

db.serialize( () => {

	let sql = "CREATE TABLE recipe (" +
			  "id integer PRIMARY KEY NOT NULL, " +
			  "nimi text NOT NULL, " +
			  "kategoria text NOT NULL, " +
			  "ainekset text NOT NULL, " +
              "ohje text NOT NULL, " +
              "allergia text NOT NULL, " +
			  "valmistusaika text NOT NULL, " +
			  "vaikeus integer NOT NULL, " +
              "arvostelut integer, " +
              "tahdet integer, " +
			  "picture text)";

              

	db.run(sql, (err) => {
		if (err) {
		  return console.log(err.message);
		}
		console.log("Taulu tehtiin");
	}); 

	sql = "INSERT INTO `recipe` (`id`, `nimi`, `kategoria`, `ainekset`, `ohje`, `allergia`, `valmistusaika`, `vaikeus`,  `arvostelut`, `tahdet`, `picture`) "+ 
	" VALUES (1, 'Banaanipannukakku', 'leivonnainen', '1 dl maitoa; 2 kpl kananmunia;', 'tee pannukakku', 'sokeriton', '20-30 min', 1, 2, 8, 'bananapancake.jpg')";
	db.run(sql, (err) => {
		if (err) {
		  return console.log(err.message);
		}
		console.log("Rivi lisättiin");
	});

	sql = "INSERT INTO `recipe` (`id`, `nimi`, `kategoria`, `ainekset`, `ohje`, `allergia`, `valmistusaika`, `vaikeus`,  `arvostelut`, `tahdet`, `picture`) "+ 
	" VALUES (2, 'Mustikkamuffinssi', 'leivonnainen', '1 dl maitoa; 2 kpl kananmunia;', 'tee muffinssit', 'sokeriton', '20-30 min', 2, 3, 15, 'blueberrymuffins.jpg')";
	db.run(sql, (err) => {
		if (err) {
			return console.log(err.message);
		}
		console.log("Rivi lisättiin");
	});

    sql = "INSERT INTO `recipe` (`id`, `nimi`, `kategoria`, `ainekset`, `ohje`, `allergia`, `valmistusaika`, `vaikeus`, `arvostelut`, `tahdet`, `picture`) "+ 
	" VALUES (3, 'Leipä', 'leivät', '1 dl maitoa; 1 pkt hiivaa;', 'tee leipä', 'vehnätön', '30-40 min', 2, 2, 10, 'bread.jpg')";
	db.run(sql, (err) => {
		if (err) {
			return console.log(err.message);
		}
		console.log("Rivi lisättiin");
	});
    

	db.each("SELECT id, nimi FROM recipe", function(err, row) {
		if (err) {
		  return console.log(err.message);
		}
		console.log(row.id + ", " + row.nimi);
	});

	db.close();
});
