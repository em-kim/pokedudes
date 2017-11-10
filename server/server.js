require('dotenv').config()
const { Pool } = require('pg')
var express = require("express");
var app = express();
var bodyParser = require('body-parser');

const pool = new Pool({ // find this port using \conninfo 
  user: process.env.DB_USER,
  host: process.env.HOST,
  database: process.env.DB_DB,
  password: process.env.DB_PASSWORD,
  port: 5432
})

// let query = "INSERT INTO test (name) values ('fakeName')"
//   pool.query(query, function(err, res) {
//     if (err) {
//       console.log(err)
//       //return done(err, null); // null for no user
//     } else {
//         console.log(res)
//         // additional test and error handling here
//         //return done("Password and username don't match", null)
//       }
//     }
//   );

app.use(express.static('public'));
app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));


app.get("/", function(req, res) {
    res.sendfile('index.html');
});


// `insert into pokemon(name, stats) values(${req.body.pokemon.name}, ${req.body.pokemon.stats})`

// 'insert into pokem(name, stats) values (' + req.body.pokemon.name ',' + req.body.pokemon.stats +')'

app.post('/addPokemon', function(req, res) {
  console.log("hey you--look here")
  console.log(req.body);
  pool.query(`INSERT INTO test(name, moves) VALUES ('${req.body.name}', '${req.body.moves}')`, function(err, result) { console.log(err)
  });
});

app.listen(5000, function() {
   console.log("Listening on 5000");
});