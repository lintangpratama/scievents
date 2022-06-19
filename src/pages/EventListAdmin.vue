<template>
  <NavbarAdmin />
  <EventsGroupAdmin :data="events" />
</template>

<script setup>
import EventsGroupAdmin from "../components/EventGroupAdmin.vue";
import NavbarAdmin from "../components/NavbarAdmin.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
</script>

<script>
import DataService from "../utils/firestoreDb";

export default {
  data() {
    return {
      events: [],
    };
  },
  methods: {
    async getData(organizer) {
      const service = new DataService();
      const data = await service.getDataByOrganizer(organizer);
      this.events = data;
      console.log(data);
    },
  },
  async mounted() {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        console.log(user);
        this.getData(user.displayName);
      } else {
        window.location.href = "/login";
      }
    });
  },
};
</script>