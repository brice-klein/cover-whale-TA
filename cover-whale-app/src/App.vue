<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Login v-if="!this.loggedIn" @login="onLogin" />
    <Main
      v-if="this.loggedIn && this.userData"
      v-bind:user-name="this.userData.name"
      v-bind:user-id="this.userData.id"
      @logout="logout"
    />
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
    };
  },
  methods: {
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
  created() {
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
    // }
  },
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
