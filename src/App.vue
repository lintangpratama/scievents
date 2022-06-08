<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Home from "./pages/Home.vue";
import HomeAdmin from "./pages/HomeAdmin.vue";
import Login from "./pages/Login.vue";
import AddEvent from "./pages/AddEvent.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600&display=swap");

#app {
  font-family: Montserrat, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>


<!-- <script>
  const firebase = require("../firebaseConfig.js");
</script> -->
