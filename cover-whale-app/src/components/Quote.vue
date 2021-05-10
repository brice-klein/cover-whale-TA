<template>
  <div class="quote-main">
    <h3>Dot Number: {{ this.dot_number }}</h3>
    <h3>Number of Power Units: {{ this.nbr_of_power_units }}</h3>
    <h3>Value of Power Units: {{ this.value_of_power_units }}</h3>
    <h3>Premium Amount: {{ this.premium_amount }}</h3>
    <h3>Premium Tax: {{ this.premium_tax }}</h3>
    <h3>Premium Total: {{ this.premium_total }}</h3>
    <h3>Street: {{ this.street }}</h3>
    <h3>City: {{ this.city }}</h3>
    <h3>State: {{ this.state }}</h3>
    <h3>Zipcode: {{ this.zipcode }}</h3>
    <h3>Driver 1 Name: {{ this.driver1_name }}</h3>
    <h3>Driver 1 Age: {{ this.driver1_age }}</h3>
    <h3>Driver 2 Name: {{ this.driver2_name }}</h3>
    <h3>Driver 2 Age: {{ this.driver2_age }}</h3>
    <h3>Driver 3 Name: {{ this.driver3_name }}</h3>
    <h3>Driver 3 Age: {{ this.driver3_age }}</h3>
    <h3>Driver 4 Name: {{ this.driver4_name }}</h3>
    <h3>Driver 4 Age: {{ this.driver4_age }}</h3>
    <h3>Driver 5 Name: {{ this.driver5_name }}</h3>
    <h3>Driver 5 Age: {{ this.driver5_age }}</h3>
    <h3>Created At: {{ this.created_at }}</h3>
    <h3>Updated At: {{ this.updated_at }}</h3>
  </div>
</template>

<script>
export default {
  name: "Quote",
  props: {
    id: String,
    userId: String,
    dot_number: Number,
    nbr_of_power_units: Number,
    value_of_power_units: Number,
    premium_amount: Number,
    premium_tax: Number,
    premium_total: Number,
    street: String,
    city: String,
    state: String,
    zipcode: String,
    driver1_name: String,
    driver1_age: Number,
    driver2_name: String,
    driver2_age: Number,
    driver3_name: String,
    driver3_age: Number,
    driver4_name: String,
    driver4_age: Number,
    driver5_name: String,
    driver5_age: Number,
    created_at: Date,
    updated_at: Date,
  },
  methods: {
    addQuote() {
      //add user id to quote
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
