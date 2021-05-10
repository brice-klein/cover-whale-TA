<template>
  <div class="quote-main">
    <div class="quote-info">
      <div class="primary-info">
        <div class="content-item">Dot Number: {{ this.dot_number }}</div>
        <div class="content-item">
          Number of Power Units: {{ this.nbr_of_power_units }}
        </div>
        <div class="content-item">
          Value of Power Units: ${{ this.value_of_power_units }}
        </div>
        <div class="content-item">
          Premium Amount: ${{ this.premium_amount }}
        </div>
        <div class="content-item">Premium Tax: ${{ this.premium_tax }}</div>
        <div class="content-item">Premium Total: ${{ this.premium_total }}</div>
        <div class="content-item">State: {{ this.state }}</div>
        <div class="content-item">Zipcode: {{ this.zipcode }}</div>
        <div class="content-item">
          Updated At: {{ new Date(this.updated_at) }}
        </div>
      </div>
      <div class="extra-info" v-if="this.showExtraInfo">
        <div class="content-item">Street: {{ this.street }}</div>
        <div class="content-item">City: {{ this.city }}</div>
        <div class="content-item">Driver 1 Name: {{ this.driver1_name }}</div>
        <div class="content-item">Driver 1 Age: {{ this.driver1_age }}</div>
        <div class="content-item">Driver 2 Name: {{ this.driver2_name }}</div>
        <div class="content-item">Driver 2 Age: {{ this.driver2_age }}</div>
        <div class="content-item">Driver 3 Name: {{ this.driver3_name }}</div>
        <div class="content-item">Driver 3 Age: {{ this.driver3_age }}</div>
        <div class="content-item">Driver 4 Name: {{ this.driver4_name }}</div>
        <div class="content-item">Driver 4 Age: {{ this.driver4_age }}</div>
        <div class="content-item">Driver 5 Name: {{ this.driver5_name }}</div>
        <div class="content-item">Driver 5 Age: {{ this.driver5_age }}</div>
        <div class="content-item">
          Created At: {{ new Date(this.created_at) }}
        </div>
      </div>
    </div>
    <div class="quote-options">
      <button class="primary-button" v-if="this.allowAdd" v-on:click="addQuote">
        Add Quote
      </button>
      <button
        class="primary-button"
        v-on:click="showExtraInfo = !showExtraInfo"
      >
        {{ this.extraInfoButtonCopy }}
      </button>
      <button
        class="primary-button"
        v-if="this.allowUpdate"
        v-on:click="deleteQuote"
      >
        Delete Quote
      </button>
      <!-- TO-DO: Implement updating a quote's info -->
      <!-- <button
        class="primary-button"
        v-if="this.allowUpdate"
        v-on:click="showModal = true"
      >
        Update Quote
      </button> -->
    </div>
    <UpdateModal v-if="this.showModal"></UpdateModal>
  </div>
</template>

<script>
import UpdateModal from "./UpdateModal.vue";
export default {
  name: "Quote",
  components: {
    UpdateModal,
  },
  data() {
    return {
      showModal: false,
      showExtraInfo: false,
    };
  },
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
    created_at: String,
    updated_at: String,
    callback: Function,
    allowAdd: Boolean,
    allowUpdate: Boolean,
  },
  methods: {
    addQuote() {
      var data = {
        quoteId: this.id,
        userId: this.userId,
      };
      fetch("http://localhost:3000/addQuote", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(data),
      }).then((response) => {
        if (response && response.status === 200) {
          //callback updates user's quotes
          this.callback();
          alert("Added Quote");
        }
      });
    },
    deleteQuote() {
      var id = this.id;
      fetch(`http://localhost:3000/deleteQuote/${id}`, {
        method: "DELETE",
      })
        .then((response) => {
          console.log(response);
          if (response && response.status === 200) {
            this.callback();
          }
        })
        .catch((err) => {
          if (err) {
            console.log(err);
          }
        });
    },
  },
  computed: {
    extraInfoButtonCopy() {
      return this.showExtraInfo ? "Hide extra info" : "Show extra info";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.quote-main {
  border-style: solid;
  border-width: 5px;
  border-radius: 25px;
  border-color: cadetblue;
  padding: 15px;
  margin-bottom: 5px;
}
.primary-info {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.extra-info {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.content-item {
  width: 25% !important;
  display: flex;
  margin-right: auto;
  margin-bottom: 10px;
  align-self: flex-start;
}
.quote-options {
  width: auto;
  height: auto;
  display: flexbox;
  justify-content: flex-start;
}
</style>
