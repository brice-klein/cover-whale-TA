<template>
  <div class="main">
    <h1>Welcome {{ this.userName }}</h1>
    <div class="user-quotes-container">
      <h2>Your Quotes</h2>
      <ul class="user-quotes">
        <Quote
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
          v-bind:driver1_name="quote.driver1_name"
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
          v-bind:allowAdd="false"
          v-bind:allowUpdate="true"
          v-bind:callback="updateUserQuotes"
        ></Quote>
      </ul>
    </div>
    <h3 v-if="!this.hasQuotes">
      It looks like you have no quotes. You can add them with the menu below.
    </h3>
    <div class="quotes-selector">
      <h2>Add quotes here</h2>
      <div class="search-grouping">
        <p class="search-term">State:</p>
        <input v-model="state" />
      </div>
      <!-- <div class="search-grouping">
        <p class="search-term">Zipcode:</p>
        <input v-model="zipcode" />
      </div> -->
      <button class="primary-button" v-on:click="submitSearch">Search</button>
      <button class="primary-button" v-on:click="searchQuotes = []">
        Clear
      </button>

      <ul class="user-quotes">
        <Quote
          v-for="quote in searchQuotes"
          v-bind:key="quote.id"
          v-bind:id="quote.id"
          v-bind:userId="userId"
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
          v-bind:driver1_name="quote.driver1_name"
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
          v-bind:allowAdd="true"
          v-bind:callback="updateUserQuotes"
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
      state: "",
      // zipcode: "",
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

    async updateUserQuotes() {
      fetch(`http://localhost:3000/quotes/${this.userId}`, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => {
          return response.clone().json();
        })
        .then((data) => {
          this.userQuotes = data;
        });
    },

    submitSearch() {
      //TO-DO: Add option to include zip to limit search
      fetch(`http://localhost:3000/search/${this.state}`)
        .then((response) => {
          return response.clone().json();
        })
        .then((data) => {
          this.searchQuotes = data;
        });
    },
  },
  mounted() {
    try {
      this.updateUserQuotes();
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.primary-button {
  margin: 20px;
  padding: 10px;
}
</style>