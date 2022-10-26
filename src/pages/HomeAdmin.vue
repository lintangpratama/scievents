<script setup>
import NavbarAdmin from "../components/NavbarAdmin.vue";
import AdminMenu from "../components/AdminMenu.vue";
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
const auth = getAuth();
</script>

<template>
  <NavbarAdmin />
  <AdminMenu />
  <div @click.prevent="create">Create displayName</div>
</template>

<script>
export default {
  methods: {
    create() {
      updateProfile(getAuth().currentUser, {
        displayName: "HMJ Fisika",
        photoURL:
          "https://firebasestorage.googleapis.com/v0/b/scievents-9ed9f.appspot.com/o/fisika.png?alt=media&token=f76027a9-47a5-44c0-9dd1-d4528217e2d9",
      })
        .then(() => {
          alert("Profile updated");
        })
        .catch((error) => {
          alert(error);
        });
    },
  },
  beforeCreate() {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        console.log(user);
      } else {
        window.location.href = "/login";
      }
    });
  },
};
</script>