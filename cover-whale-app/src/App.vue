<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Login v-if="this.loggedIn" @login="onLogin" />
  </div>
</template>

<script>
import Login from "./components/Login.vue";
export default {
  name: "App",
  components: {
    Login,
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
  },
  computed: {},
  watch: {},
  created() {
    console.log(localStorage.getItem("remember_token"));
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
    }
    this.loggedIn = true;
    console.log(this.userData);
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
