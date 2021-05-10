<template>
  <div class="update-modal">
    <input v-bind:dot_number="this.dot_number" label="Dot Number:" />
    {{ this.dot_number }}>
    <input
      v-bind:nbr_of_power_units="this.nbr_of_power_units"
      label="Number of Power Units:"
      {{
      this.nbr_of_power_units
      }}
    />
  </div>
</template>

<script>
export default {
  name: "UpdateModal",
  props: {
    id: String,
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
    created_at: String,
    updated_at: String,
  },
};
// <input v-bind:>label="Value of Power Units: {{ this.value_of_power_units }}</h3>
//       <input v-bind:>label="Premium Amount: {{ this.premium_amount }}</h3>
//       <input v-bind:>label="Premium Tax: {{ this.premium_tax }}</h3>
//       <input v-bind:>label="Premium Total: {{ this.premium_total }}</h3>
//       <input v-bind:>label="Street: {{ this.street }}</h3>
//       <input v-bind:>label="City: {{ this.city }}</h3>
//       <input v-bind:>label="State: {{ this.state }}</h3>
//       <input v-bind:>label="Zipcode: {{ this.zipcode }}</h3>
//       <input v-bind:>label="Driver 1 Name: {{ this.driver1_name }}</h3>
//       <input v-bind:>label="Driver 1 Age: {{ this.driver1_age }}</h3>
//       <input v-bind:>label="Driver 2 Name: {{ this.driver2_name }}</h3>
//       <input v-bind:>label="Driver 2 Age: {{ this.driver2_age }}</h3>
//       <input v-bind:>label="Driver 3 Name: {{ this.driver3_name }}</h3>
//       <input v-bind:>label="Driver 3 Age: {{ this.driver3_age }}</h3>
//       <input v-bind:>label="Driver 4 Name: {{ this.driver4_name }}</h3>
//       <input v-bind:>label="Driver 4 Age: {{ this.driver4_age }}</h3>
//       <input v-bind:>label="Driver 5 Name: {{ this.driver5_name }}</h3>
//       <input v-bind:>label="Driver 5 Age: {{ this.driver5_age }}</h3>
//       <input v-bind:>label="Created At: {{ Date(this.created_at) }}</h3>
//       <input v-bind:>label="Updated At: {{ Date(this.updated_at) }}</h3>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
