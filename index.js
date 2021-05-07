const express = require('express')
const app = express()
const Pool = require('pg').Pool

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'postgres'
})

const PORT = 3000
const HOST = '0.0.0.0'

app.get("/", (req, res) => {
  res.setHeader('Content-Type', 'text/html')
  // var query = `CREATE TABLE IF NOT EXISTS users (
  //   id integer NOT NULL,
  //   name string,
  //   email string,
  //   password string,
  //   remember_token varchar(100),
  //   company_name string,
  //   company_street string,
  //   company_city string,
  //   company_zipcode integer,
  //   created_at timestamp,
  //   updated_at timestamp
  // );
  // CREATE TABLE IF NOT EXISTS quotes (
  //   id integer NOT NULL,
  //   dot_number integer,
  //   nbr_of_power_units integer,
  //   value_of_power_units integer,
  //   premium_amount integer,
  //   premium_tax integer,
  //   premium_total integer,
  //   street string,
  //   city string,
  //   state string,
  //   zipcode integer,
  //   driver1_name string,
  //   driver1_age integer,
  //   driver2_name string,
  //   driver2_age integer,
  //   driver3_name string,
  //   driver3_age integer,
  //   driver4_name string,
  //   driver4_age integer,
  //   driver5_name string,
  //   driver5_age integer,
  //   created_at timestamp,
  //   updated_at timestamp
  // );`
  // pool.query(query, (err, res) => {
  //   if (err) {
  //     throw err
  //   } else {
  //     for (var i = 0; i < 20; i++) {
  //       res.write(`<h1>THis is response #${i}</h1>`)
  //     }
  //     res.end()
  //   }
  // })

  pool.query('SELECT * FROM users', (err, result) => {
    if (err) {
      throw err
    }
    res.send(result.rows[0])
  })

  // for (var i = 0; i < 20; i++) {
  //   res.write(`<h1>THis is response #${i}{</h1>`)
  // }
  // res.end()
  //res.send('data')
})

app.listen(PORT, HOST)
console.log(`App running at- http://${HOST}:${PORT}`)