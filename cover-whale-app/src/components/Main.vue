<template>
  <div class="main">
    <h1>Welcome {{ this.userName }} {{ this.userId }}</h1>
    <div class="user-quotes-container">
      <h2>Your Quotes</h2>
      <ul class="user-quotes">
        <li
          v-for="quote in userQuotes"
          v-bind:key="quote.id"
          v-bind:id="quote.id"
          v-bind:userId="quote.userId"
          v-bind:dot_number="quote.dot_number"
          v-bind:nbr_of_power_units="quote.nbr_of_power_units"
          v-bind:value_of_power_units="quote.value_of_power_units"
          v-bind:premium_amount="quote.premium_amount"
          v-bind:premium_tax="quote.premium_tax"
          v-bind:premium_total="quote.premium_total"
          v-bind:street="quote.street"
          v-bind:city="quote.city"
          v-bind:state="quote.state"
          v-bind:zipcode="quote.zipcode"
          v-bind:driver1_name="quote.driver1_age"
          v-bind:driver1_age="quote.driver1_age"
          v-bind:driver2_name="quote.driver2_name"
          v-bind:driver2_age="quote.driver2_age"
          v-bind:driver3_name="quote.driver3_name"
          v-bind:driver3_age="quote.driver3_age"
          v-bind:driver4_name="quote.driver4_name"
          v-bind:driver4_age="quote.driver4_age"
          v-bind:driver5_name="quote.driver5_name"
          v-bind:driver5_age="quote.driver5_age"
          v-bind:created_at="quote.created_at"
          v-bind:updated_at="quote.updated_at"
        ></li>
      </ul>
    </div>
    <h3 v-if="!this.hasQuotes">
      It looks like you have no quotes. You can add them with the menu below.
    </h3>
    <div class="quotes-selector">
      <h2>Add quotes here.</h2>
      <div class="search-grouping">
        <p class="search-term">State:</p>
        <input v-model="state" />
      </div>
      <div class="search-grouping">
        <p class="search-term">Zipcode:</p>
        <input v-model="zipcode" />
      </div>
      <button class="primary-button" v-on:click="submitSearch">Search</button>

      <ul class="user-quotes">
        <Quote
          v-for="quote in searchQuotes"
          v-bind:key="quote.id"
          v-bind:id="quote.id"
          v-bind:userId="quote.userId"
          v-bind:dot_number="quote.dot_number"
          v-bind:nbr_of_power_units="quote.nbr_of_power_units"
          v-bind:value_of_power_units="quote.value_of_power_units"
          v-bind:premium_amount="quote.premium_amount"
          v-bind:premium_tax="quote.premium_tax"
          v-bind:premium_total="quote.premium_total"
          v-bind:street="quote.street"
          v-bind:city="quote.city"
          v-bind:state="quote.state"
          v-bind:zipcode="quote.zipcode"
          v-bind:driver1_name="quote.driver1_age"
          v-bind:driver1_age="quote.driver1_age"
          v-bind:driver2_name="quote.driver2_name"
          v-bind:driver2_age="quote.driver2_age"
          v-bind:driver3_name="quote.driver3_name"
          v-bind:driver3_age="quote.driver3_age"
          v-bind:driver4_name="quote.driver4_name"
          v-bind:driver4_age="quote.driver4_age"
          v-bind:driver5_name="quote.driver5_name"
          v-bind:driver5_age="quote.driver5_age"
          v-bind:created_at="quote.created_at"
          v-bind:updated_at="quote.updated_at"
        ></Quote>
      </ul>
    </div>
    <button v-on:click="logout">Logout</button>
  </div>
</template>

<script>
import Quote from "./Quote.vue";
export default {
  name: "Login",
  components: { Quote },
  props: {
    userName: String,
    userId: String,
  },
  data() {
    return {
      userQuotes: [],
      searchQuotes: [],
      // noQuotesFlag: false,
      // noQuotesFound: false,
      state: "",
      zipcode: "",
    };
  },
  computed: {
    hasQuotes() {
      return this.userQuotes.length >= 1;
    },
  },
  methods: {
    logout() {
      this.$emit("logout");
    },
    submitSearch() {
      fetch(`http://localhost:3000/search/${this.state}`)
        .then((response) => {
          return response.clone().json();
        })
        .then((data) => {
          console.log("Main, quotes query- ", data);
          this.searchQuotes = data;
          console.log(this.searchQuotes[10]);
        });
    },
  },
  mounted() {
    fetch(`http://localhost:3000/quotes/${this.userId}`, {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        console.log("Main, fetch quotes- ", response);
        return response.clone().json();
      })
      .then((data) => {
        console.log("Main, quotes/userId data- ", data);
      });
  },
};

//  if (response && response.status === 200) {
//           var quotes = response.json().rows;
//           for (var i = 0; i < quotes.length; i++) {
//             this.quotes.push(quotes[i]);
//           }
//         } else {
//           this.noQuotesFound = true;
//         }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>