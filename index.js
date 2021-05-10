const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const Pool = require('pg').Pool
const generators = require('./setup')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
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

app.get("/api", async (req, res) => {
  const insertUsersQuery = generators.generateUsers()
  try {
    pool.query(insertUsersQuery)
  } catch (err) {
    if (err) {
      res.sendStatus(401)
      throw err
    }
  }

  const insertQuotesQuery = generators.generateQuotes()
  try {
    pool.query(insertQuotesQuery)
  } catch (err) {
    if (err) {
      res.sendStatus(401)
      throw err
    }
  }
})

app.get("/randomUser", (req, res) => {
  pool.query(`SELECT * FROM users`)
    .then((response) => {
      console.log('random user- ', response.rows[0])
      res.send(JSON.stringify(response.rows[0]))
    })
    .catch((err) => {
      if (err) {
        throw err
      }
    })
})

app.post("/login", (req, res) => {
  var email = req.body.email
  var password = req.body.password

  pool.query(`SELECT * FROM users WHERE users.email = '${email}' AND users.password = '${password}'`)
    .then((response) => {
      res.send(JSON.stringify(response.rows[0]))
    })
    .catch((err) => {
      if (err) {
        throw err
      }
    })
})

app.get("/getToken/:token", (req, res) => {
  var token = req.params.token
  pool.query(`SELECT * FROM users WHERE users.remember_token = '${token}'`)
    .then((response) => {
      res.send(JSON.stringify(response.rows[0]))
    })
    .catch((err) => {
      if (err) {
        throw err
      }
    })
})

app.put("/setToken", (req, res) => {
  //TODO: Figure out why this doesn't trigger
  var token = req.body.token

  pool.query(`UPDATE users SET remember_token = '${token}'`)
    .then((response) => {
      res.send(response)
    })
    .catch((err) => {
      if (err) {
        throw err
      }
    })
})

app.post("/addQuote", (req, res) => {
  var quoteId = req.body.quoteId
  var userId = req.body.userId

  pool.query(`UPDATE quotes SET user_id = '${userId}' WHERE id = '${quoteId}'`)
    .then((response) => {
      res.send(response)
    })
    .catch((err) => {
      throw err
    })
})

app.get("/quotes/:userId", (req, res) => {
  var userId = req.params.userId

  pool.query(`SELECT * FROM quotes WHERE quotes.user_id = '${userId}'`)
    .then((response) => {
      res.send(JSON.stringify(response.rows))
    })
    .catch((err) => {
      if (err) {
        throw err
      }
    })
})

app.get("/search/:state", (req, res) => {
  var state = '*'
  var zipcode = '*'
  if (req.params.state !== '') {
    state = req.params.state
  }
  if (req.params.zipcode !== '') {
    zipcode = req.params.zipcode
  }
  // AND zipcode = '${zipcode}
  pool.query(`SELECT * FROM quotes WHERE state = '${state}'`)
    .then((response) => {
      if (response.rows) {
        res.send(JSON.stringify(response.rows))
      } else {
        res.send(null)
      }
    })
    .catch(err => {
      if (err) {
        throw err
      }
    })
})

app.delete('/deleteQuote/:quoteId', (req, res) => {
  var id = req.params.quoteId
  pool.query(`DELETE FROM quotes WHERE id = '${id}'`)
    .then((response) => {
      res.send(response)
    })
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
app.listen(PORT, HOST)
console.log(`App running at- http://${HOST}:${PORT}`)