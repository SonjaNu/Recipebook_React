const express = require('express');
const app = express();

const helmet = require('helmet');
app.use(helmet());

app.use(express.json());  
app.use(express.urlencoded({limit: '5mb', extended: true}));

const cors = require('cors');
app.use(cors());

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('recipes.db');
 
app.listen(8080, () => {
    console.log('Node toimii localhost:8080');
});

app.get('/', (req, res, next) => {
    return res.status(200).json({ error: false, message: 'Toimii' })
});

app.get('/recipe/all', (req, res, next) => {
	db.all('select * from recipe', function (error, result) {
		if (error) throw error;

		return res.status(200).json(result);
	});
})

app.get('/recipe/one/:kategoria', (req, res, next) => {
	let kategoria = req.params.kategoria;

  db.get('SELECT * FROM recipe where kategoria=?', [kategoria], (error, result) => {
    if (error) throw error;

    if (typeof(result) == 'undefined')  {
      return res.status(200).send({});
    }

    return res.status(200).json(result);
  })  // db.get
})

const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, './photos')
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname)
  }
})

const upload = multer({ storage: storage })

app.post('/recipe/add',  upload.single('picture'), (req, res, next) => {
  let recipe = req.body;

  console.log(req.body);

  let picture = null;
  if (req.file) {
    picture = req.file.originalname;
  }

  db.run('INSERT INTO recipe (nimi, kategoria, ainekset, ohje, allergia, valmistusaika, vaikeus, arvostelut, tahdet, picture) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',  
    [recipe.nimi, recipe.kategoria, recipe.ainekset, recipe.ohje, recipe.allergia, recipe.valmistusaika, recipe.vaikeus, recipe.arvostelut, recipe.tahdet, picture], (error, result) => {
    if (error) throw error;

    return res.status(200).json( {count: 1} );
  })

})

app.get('/download/:nimi', (req, res, next) => {
  var file = './photos/' + req.params.nimi;
  res.download(file);
});

app.get('/recipe/delete/:id', (req, res, next) => {
  let id = req.params.id;

  db.run('DELETE FROM recipe WHERE id = ?', [id], function (error, result) {
    if (error) throw error;

    return res.status(200).json( {count: this.changes} );
  })
})

app.post('/recipe/edit/:id',  upload.single('picture'), (req, res, next) => {
	let id = req.params.id;
	let recipe = req.body;
  console.log(req.body);


  db.run('UPDATE recipe SET nimi=?, kategoria=?, ainekset=?, ohje=?, allergia=?, valmistusaika=?, vaikeus=?, arvostelut=?, tahdet=? WHERE id=?',  
    [recipe.nimi, recipe.kategoria, recipe.ainekset, recipe.ohje, recipe.allergia, recipe.valmistusaika, recipe.vaikeus, recipe.arvostelut, recipe.tahdet, id], (error, result) => {
    if (error) throw error;

    return res.status(200).json( {count: 1} );
  })
  
  })

app.get('*', (req, res, next) => {
    return res.status(404).json({ error: true, message: 'Ei pyydettyä palvelua' })
})
