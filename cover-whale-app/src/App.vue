<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1 v-if="!this.loaded">LOADING</h1>
    <Login v-if="!this.loggedIn" @login="onLogin" />
    <Main
      v-if="this.loggedIn && this.userData"
      v-bind:user-name="this.userData.name"
      v-bind:user-id="this.userData.id"
      @logout="logout"
    />
    <button class="primary-button" v-if="this.loaded" v-on:click="getStarted">
      Get Started
    </button>
  </div>
</template>

<script>
import Login from "./components/Login.vue";
import Main from "./components/Main.vue";
export default {
  name: "App",
  components: {
    Login,
    Main,
  },
  data() {
    return {
      userData: {},
      loggedIn: false,
      loaded: {},
    };
  },
  methods: {
    getStarted() {
      fetch("http://localhost:3000/randomUser", {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((data) => {
          console.log(data);
          var email = data.email;
          var password = data.password;
          console.log(email, " ", password);
          alert(
            `Your random credentials are- \r\n Email: ${email} \r\n Password: ${password} \r\n \r\n They are displayed in the console.logs`
          );
        })
        .catch((err) => {
          console.log(err);
        });
    },

    onLogin(data) {
      this.userData = data;
      this.loggedIn = true;

      localStorage.setItem(
        "remember_token",
        `${this.userData.email}` + `${this.userData.name}`
      );
      // var token = JSON.stringify(
      //   `${this.userData.email}` + `${this.userData.name}`
      // );

      //TO-DO: Figure out why this post doesn't seem to hit endpoint
      // fetch("http://localhost:3000/setToken", {
      //   method: "PUT",
      //   headers: {
      //     "Content-type": "application/json; charset=UTF-8",
      //   },
      //   body: token,
      // });
    },
    logout() {
      this.loggedIn = false;
      this.userData = {};
    },
  },
  computed: {},
  watch: {},
  async created() {
    this.loaded = await fetch("http://localhost:3000/api");
  },
  //TO-DO: Check locally stored token against db tokens
  // if (localStorage.getItem("remember_token")) {
  //   var token = localStorage.getItem("remember_token");
  //   fetch(`http://localhost:3000/getToken/${token}`, {
  //     method: "GET",
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   })
  //     .then((res) => {
  //       return res.clone().json();
  //     })
  //     .then((data) => (this.userData = data))
  //     .catch((err) => {
  //       if (err) {
  //         throw err;
  //       }
  //     });
  //   this.loggedIn = true;
  //
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
