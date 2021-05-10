<template>
  <div class="portal">
    <h1>Hello! Welcome to Simple Insurance</h1>
    <div class="login-credentials">
      <div class="username">
        <h2>Username</h2>
        <input
          type="text"
          class="input"
          :value="email"
          v-on:change="updateEmail"
        />
      </div>
      <div class="password">
        <h2>Password</h2>
        <input
          type="text"
          class="input"
          :value="password"
          v-on:change="updatePassword"
        />
      </div>
    </div>
    <button type="submit" class="primary-button" v-on:click="tryLogin">
      Login
    </button>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {
    msg: String,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    updateEmail(e) {
      this.email = e.target.value;
    },
    updatePassword(e) {
      this.password = e.target.value;
    },
    async tryLogin() {
      var data = {
        email: this.email,
        password: this.password,
      };
      console.log(data);
      fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((data) => {
          //set user token
          console.log(data);
          this.$emit("login", data);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
