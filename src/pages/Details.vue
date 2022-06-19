<template>
  <Navbar />
  <div
    class="max-w-2xl mx-auto py-6 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8"
  >
    <DetailEvent
      :title="event.title"
      :about="event.about"
      :date="event.date"
      :end_time="event.end_time"
      :start_time="event.start_time"
      :imageUrl="event.imageUrl"
      :link="event.link"
      :location="event.location"
      :organizer="event.organizer"
    />
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import DetailEvent from "../components/DetailEvent.vue";
</script>

<script>
import DataService from "../utils/firestoreDb";

export default {
  data() {
    return {
      event: {}
    };
  },
  async mounted() {
    const service = new DataService();
    const eventId = this.$route.params.eventId;
    const eventDetail = await service.getDataById(eventId);
    this.event = eventDetail;
  },
};
</script>