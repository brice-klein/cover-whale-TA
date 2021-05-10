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
      console.log("onLogin: data- ", data);
      this.userData = data;
      this.loggedIn = true;
    },
    logout() {
      this.loggedIn = false;
      this.userData = {};
    },
  },
  computed: {},
  watch: {
    userData(newUserData, oldUserData) {
      this.userData = newUserData;
      console.log(
        "new- ",
        newUserData,
        " oldUserData- ",
        oldUserData,
        " this.userData- ",
        this.userData
      );
    },
  },
  created() {
    console.log("localStorage- ", localStorage.getItem("remember_token"));
    if (localStorage.getItem("remember_token")) {
      var token = localStorage.getItem("remember_token");
      fetch(`http://localhost:3000/user?token=${token}`, {
        mode: "no-cors",
      })
        .then((res) => {
          res.json();
        })
        .then((data) => (this.userData = data))
        .catch((err) => {
          if (err) {
            throw err;
          }
        });
      this.loggedIn = true;
    }
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
