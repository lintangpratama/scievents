<template>
  <Navbar />
  <div class="bg-white">
    <div
      class="max-w-2xl mx-auto py-16 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <h2 class="text-2xl mb-10 font-extrabold tracking-tight text-gray-900">
        All <span class="text-main">Events</span>
      </h2>
      <div
        v-if="events.length !== 0"
        class="
          mt-2
          grid grid-cols-1
          gap-y-10 gap-x-6
          sm:grid-cols-2
          lg:grid-cols-4
          xl:gap-x-8
        "
      >
        <div v-for="product in events" :key="product.id" class="group relative">
          <div
            class="
              w-full
              min-h-80
              aspect-w-1 aspect-h-1
              rounded-md
              bg-gray-100
              overflow-hidden
              group-hover:opacity-75
              lg:h-80 lg:aspect-none
            "
          >
            <img
              :src="product.imageUrl"
              alt="events"
              class="
                w-full
                h-full
                object-center object-contain
                lg:w-full lg:h-full
              "
            />
          </div>
          <div class="mt-4 flex justify-center">
            <div>
              <h3 class="text-sm text-gray-700">
                <router-link :to="'/events/' + product.id">
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ product.title }}
                </router-link>
              </h3>
              <p class="mt-1 text-sm text-gray-500">{{ product.organizer }}</p>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="text-center mt-16">There's no event available.</div>
    </div>
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
</script>

<script>
import DataService from "../utils/firestoreDb";

export default {
  data() {
    return {
      events: [],
    };
  },
  async mounted() {
    const service = new DataService();
    if (this.$route.query.organizer) {
      const data = await service.getDataByOrganizer(
        this.$route.query.organizer
      );
      this.events = data;
    } else {
      const data = await service.getAll();
      this.events = data;
      console.log(data);
    }
  },
};
</script>