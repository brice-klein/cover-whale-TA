var faker = require('faker')
const { v4: uuidv4 } = require('uuid');

const generateUsers = () => {
  var queries = ``
  for (var i = 0; i < 1000; i++) {
    var id = uuidv4()
    var name = faker.name.findName().replaceAll(`'`, `''`)
    var email = faker.internet.email()
    var password = faker.internet.password()
    var remember_token = null
    var company_name = faker.company.companyName().replaceAll(`'`, `''`)
    var company_street = faker.address.streetName().replaceAll(`'`, `''`)
    var company_city = faker.address.cityName().replaceAll(`'`, `''`)
    var company_zipcode = faker.address.zipCode()
    var created_at = new Date().toISOString()
    var updated_at = new Date().toISOString()
    var query = `INSERT INTO users(
    id,
    name,
    email,
    password,
    remember_token,
    company_name,
    company_street,
    company_city,
    company_zipcode,
    created_at,
    updated_at
  ) VALUES(
    '${id}',
    '${name}',
    '${email}',
    '${password}',
    ${remember_token},
    '${company_name}',
    '${company_street}',
    '${company_city}',
    '${company_zipcode}',
    '${created_at}',
    '${updated_at}'
  );`
    // console.log(i)
    queries = queries + query
    // if (i === 0) {
    //   console.log(query)
    // }
  }
  // console.log(queries)
  return queries
}

const generateQuotes = () => {
  var queries = ``
  for (var i = 0; i < 1000; i++) {
    var id = uuidv4()
    var dot_number = Math.floor(Math.random() * 99999999)
    var nbr_of_power_units = Math.floor(Math.random() * 3)
    var value_of_power_units = Math.floor((Math.random() * 500000) * nbr_of_power_units)
    var premium_amount = Math.floor(Math.random() * 4000) + 1000
    var premium_tax = Math.floor((Math.random() * 10) / 100) * premium_amount
    var premium_total = premium_amount + premium_tax
    var street = faker.address.streetName().replaceAll(`'`, `''`)
    var city = faker.address.cityName().replaceAll(`'`, `''`)
    var state = faker.address.state().replaceAll(`'`, `''`)
    var zipCode = faker.address.zipCode()
    var driver1_name = faker.name.findName().replaceAll(`'`, `''`)
    var driver1_age = Math.floor(Math.random() * 40) + 20
    var driver2_name = faker.name.findName().replaceAll(`'`, `''`)
    var driver2_age = Math.floor(Math.random() * 40) + 20
    var driver3_name = faker.name.findName().replaceAll(`'`, `''`)
    var driver3_age = Math.floor(Math.random() * 40) + 20
    var driver4_name = faker.name.findName().replaceAll(`'`, `''`)
    var driver4_age = Math.floor(Math.random() * 40) + 20
    var driver5_name = faker.name.findName().replaceAll(`'`, `''`)
    var driver5_age = Math.floor(Math.random() * 40) + 20
    var created_at = new Date().toISOString()
    var updated_at = new Date().toISOString()

    var query = ` INSERT INTO quotes(
      id,
      dot_number,
      nbr_of_power_units,
      value_of_power_units,
      premium_amount,
      premium_tax,
      premium_total,
      street,
      city,
      state,
      zipCode,
      driver1_name,
      driver1_age,
      driver2_name,
      driver2_age,
      driver3_name,
      driver3_age,
      driver4_name,
      driver4_age,
      driver5_name,
      driver5_age,
      created_at,
      updated_at
    ) VALUES(
      '${id}',
      '${dot_number}',
      '${nbr_of_power_units}',
      '${value_of_power_units}',
      '${premium_amount}',
      '${premium_tax}',
      '${premium_total}',
      '${street}',
      '${city}',
      '${state}',
      '${zipCode}',
      '${driver1_name}',
      '${driver1_age}',
      '${driver2_name}',
      '${driver2_age}',
      '${driver3_name}',
      '${driver3_age}',
      '${driver4_name}',
      '${driver4_age}',
      '${driver5_name}',
      '${driver5_age}',
      '${created_at}',
      '${updated_at}'
    );`
    queries = queries + query
  }
  return queries
}

exports.generateUsers = generateUsers
exports.generateQuotes = generateQuotes

// var query = {
//   `INSERT INTO users(
//     id
//     dot_number
//     nbr_of_power_units,
//     value_of_pos integer,
//     premium_amoger,
//     premium_tax,
//     premium_toter,
//     street
//     city
//     state
//     zipcode
//     driver1_namR,
//     driver1_age,
//     driver2_namR,
//     driver2_age,
//     driver3_namR,
//     driver3_age,
//     driver4_namR,
//     driver4_age,
//     driver5_namR,
//     driver5_age,
//     created_at p,
//     updated_at p)`
// }