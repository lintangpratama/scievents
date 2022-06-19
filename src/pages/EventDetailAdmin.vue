<template>
  <div
    class="
      text-left
      mt-10
      mb-10
      mx-auto
      max-w-7xl
      px-4
      sm:mt-12 sm:px-6
      md:mt-16
      lg:mt-20 lg:px-8
      xl:mt-14
    "
  >
    <h1
      class="text-center text-3xl font-semibold mb-4 sm:mb-6 md:mb-8 lg:mb-10"
    >
      Edit <span class="text-main">Event</span>
    </h1>
    <div>
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <div class="px-4 sm:px-0">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              Event Description
            </h3>
            <p class="mt-1 text-sm text-gray-600">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
              <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div class="grid grid-cols-6 gap-6">
                  <div class="col-span-6 sm:col-span-4">
                    <label
                      for="company-website"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Title
                    </label>
                    <div class="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="text"
                        name="company-website"
                        id="company-website"
                        v-model="event.title"
                        class="
                          focus:ring-emerald-300 focus:border-emerald-300
                          flex-1
                          block
                          w-full
                          rounded-md
                          sm:text-sm
                          border-gray-300
                        "
                        placeholder="Ex: Pelatihan Dasar Adobe Premiere Pro"
                      />
                    </div>
                  </div>

                  <div class="col-span-6 sm:col-span-6">
                    <label
                      for="about"
                      class="block text-sm font-medium text-gray-700"
                    >
                      About
                    </label>
                    <div class="mt-1">
                      <textarea
                        id="about"
                        name="about"
                        rows="3"
                        v-model="event.about"
                        class="
                          shadow-sm
                          focus:ring-emerald-300 focus:border-emerald-300
                          mt-1
                          block
                          w-full
                          sm:text-sm
                          border border-gray-300
                          rounded-md
                        "
                        placeholder="you@example.com"
                      />
                    </div>
                    <p class="mt-2 text-sm text-gray-500">
                      Brief description for your organization event. Such as
                      info about event time, the speaker, your event benefit, or
                      a contact person of the event.
                    </p>
                  </div>

                  <div class="col-span-4">
                    <label
                      for="first-name"
                      class="block text-sm font-medium text-gray-700"
                      >Date</label
                    >
                    <input
                      type="date"
                      name="first-name"
                      id="first-name"
                      v-model="event.date"
                      autocomplete="given-name"
                      class="
                        mt-1
                        focus:ring-emerald-300 focus:border-emerald-300
                        block
                        w-full
                        shadow-sm
                        sm:text-sm
                        border-gray-300
                        rounded-md
                      "
                    />
                  </div>
                  <div class="col-span-3">
                    <label
                      for="first-name"
                      class="block text-sm font-medium text-gray-700"
                      >Start time</label
                    >
                    <input
                      type="time"
                      name="first-name"
                      id="first-name"
                      v-model="event.start_time"
                      autocomplete="given-name"
                      class="
                        mt-1
                        focus:ring-emerald-300 focus:border-emerald-300
                        block
                        w-full
                        shadow-sm
                        sm:text-sm
                        border-gray-300
                        rounded-md
                      "
                    />
                  </div>
                  <div class="col-span-3">
                    <label
                      for="last-name"
                      class="block text-sm font-medium text-gray-700"
                      >End time</label
                    >
                    <input
                      type="time"
                      name="last-name"
                      v-model="event.end_time"
                      id="last-name"
                      autocomplete="family-name"
                      class="
                        mt-1
                        focus:ring-emerald-300 focus:border-emerald-300
                        block
                        w-full
                        shadow-sm
                        sm:text-sm
                        border-gray-300
                        rounded-md
                      "
                    />
                  </div>
                </div>
                <div class="col-span-6 sm:col-span-4">
                  <label
                    for="email-address"
                    class="block text-sm font-medium text-gray-700"
                    >Location</label
                  >
                  <input
                    type="text"
                    name="email-address"
                    v-model="event.location"
                    id="email-address"
                    placeholder="Ex: Online via Zoom or Offline address"
                    class="
                      mt-1
                      focus:ring-emerald-300 focus:border-emerald-300
                      block
                      w-full
                      shadow-sm
                      sm:text-sm
                      border-gray-300
                      rounded-md
                    "
                  />
                </div>
                <div class="col-span-6 sm:col-span-4">
                  <label
                    for="email-address"
                    class="block text-sm font-medium text-gray-700"
                    >Registration Link</label
                  >
                  <input
                    type="text"
                    name="email-address"
                    v-model="event.link"
                    id="email-address"
                    placeholder="Ex: bit.ly/PelatihanEditingTIUINWS2022"
                    class="
                      mt-1
                      focus:ring-emerald-300 focus:border-emerald-300
                      block
                      w-full
                      shadow-sm
                      sm:text-sm
                      border-gray-300
                      rounded-md
                    "
                  />
                </div>
              </div>

              <div class="flex justify-end">
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-3">
                  <button
                    type="submit"
                    @click.prevent="deleteEvent"
                    class="
                      inline-flex
                      justify-center
                      py-2
                      px-4
                      border border-transparent
                      shadow-sm
                      text-sm
                      font-medium
                      rounded-md
                      text-white
                      bg-red-500
                      hover:bg-red-500
                      focus:outline-none
                      focus:ring-2
                      focus:ring-offset-2
                      focus:ring-red-500
                    "
                  >
                    Delete Event
                  </button>
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-3">
                  <button
                    type="submit"
                    @click.prevent="edit"
                    class="
                      inline-flex
                      justify-center
                      py-2
                      px-4
                      border border-transparent
                      shadow-sm
                      text-sm
                      font-medium
                      rounded-md
                      text-white
                      bg-main
                      hover:bg-main
                      focus:outline-none
                      focus:ring-2
                      focus:ring-offset-2
                      focus:ring-emerald-300
                    "
                  >
                    Save Edit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import DataService from "../utils/firestoreDb";
import firebaseConfig from "../../firebaseConfig";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize service db
const service = new DataService();

export default {
  data() {
    return {
      event: [],
    };
  },
  mounted() {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        console.log(user);
        this.getEventData();
      } else {
        window.location.href = "/login";
      }
    });
  },
  methods: {
    async getEventData() {
      const eventData = await service.getDataById(this.$route.params.eventId);
      this.event = eventData;
      console.log(eventData);
    },
    deleteEvent() {
      service
        .delete(this.$route.params.eventId)
        .then((res) => {
          alert("Delete event successfully");
          window.location.href = "/admin/event-list";
        })
        .catch((e) => console.log(e));
    },
    edit() {
      onAuthStateChanged(getAuth(), (user) => {
        const data = {
          title: this.event.title,
          about: this.event.about,
          date: this.event.date,
          end_time: this.event.end_time,
          start_time: this.event.start_time,
          link: this.event.link,
          location: this.event.location,
        };
        const { title, about, date, end_time, start_time, link, location } =
          data;
        if (
          title &&
          about &&
          date &&
          end_time &&
          start_time &&
          link &&
          location
        ) {
          console.log(data);
          service
            .update(this.$route.params.eventId, data)
            .then((res) => {
              alert("Edit event successfully");
              window.location.href = "/admin/event-list";
            })
            .catch((e) => console.log(e));
        } else {
          alert("Oopss! Please input all event data");
        }
      });
    },
  },
};
</script>