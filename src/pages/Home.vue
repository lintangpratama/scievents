<template>
  <Navbar />
  <HeroSection />
  <EventsGroup :data="events" />
  <Category />
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import HeroSection from "../components/HeroSection.vue";
import Category from "../components/Category.vue";
import EventsGroup from "../components/EventsGroup.vue";
</script>

<script>
import DataService from "../utils/firestoreDb";

const service = new DataService();
export default {
  data() {
    return {
      events: [],
    };
  },
  mounted() {
    service
      .getSomeData(4)
      .then((value) => {
        console.log(value);
        this.events = value;
        })
      .catch((e) => console.log(e));
  },
};
</script>