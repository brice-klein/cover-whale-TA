const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const Pool = require('pg').Pool
const generators = require('./setup')

const app = express()

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'postgres',
  port: 5432,
  database: 'coverwhale'
})

const PORT = 3000
const HOST = '0.0.0.0'

app.get("/", async (req, res) => {
  res.setHeader('Content-Type', 'text/html')

  const insertUsersQuery = generators.generateUsers()
  // console.log(query)
  try {
    pool.query(insertUsersQuery)
  } catch (err) {
    if (err) {
      res.send(401)
      throw err
    }
  }

  const insertQuotesQuery = generators.generateQuotes()
  try {
    pool.query(insertQuotesQuery)
  } catch (err) {
    if (err) {
      res.send(401)
      throw err
    }
  }
  res.send('<h1>A-OK</h1>')
})

app.post("/login", (req, result) => {
  console.log(req.body)
  // var data = req.body.username
  // console.log(data)
  var email = req.body.email
  var password = req.body.password
  console.log(email, password)
  pool.query(`SELECT * FROM users WHERE users.email = '${email}' AND users.password = '${password}'`)
    .then((response) => {
      console.log(response.rows[0])
      result.send(JSON.stringify(response.rows[0]))
    })
    .catch(err => console.log(err))
})

app.get('/get', (req, res) => {
  pool.query('SELECT * FROM users')
    .then(result => {
      res.send(result.rows)
    })
    .catch(err => {
      if (err) {
        throw err
      }
    })
})
app.get('/get2', (req, res) => {
  pool.query('SELECT * FROM quotes')
    .then(result => {
      res.send(result.rows)
    })
    .catch(err => {
      if (err) {
        throw err
      }
    })
})


// pool.query('SELECT * FROM users', (err, result) => {
//   if (err) {
//     throw err
//   }
//   res.send(result.rows[0])
// })

// for (var i = 0; i < 20; i++) {
//   res.write(`<h1>THis is response #${i}{</h1>`)
// }
// res.end()
//res.send('data')
app.listen(PORT, HOST)
// app.on('listening', () => {
//   const usersInsertQuery = generators.generateUsers()
//   pool.query(usersInsertQuery)
//     .then(res => {
//       if (res) {
//         const quotesInsertQuery = generators.generateQuotes()
//         pool.query(quotesInsertQuery)
//       }
//     })
// })
console.log(`App running at- http://${HOST}:${PORT}`)