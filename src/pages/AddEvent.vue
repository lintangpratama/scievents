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
      Add <span class="text-main">Event</span>
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
                        v-model="title"
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
                        v-model="about"
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
                      v-model="date"
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
                      v-model="start_time"
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
                      v-model="end_time"
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

                <div>
                  <label class="block text-sm font-medium text-gray-700">
                    Poster photo
                  </label>
                  <div
                    class="
                      mt-1
                      flex
                      justify-center
                      px-6
                      pt-5
                      pb-6
                      border-2 border-gray-300 border-dashed
                      rounded-md
                    "
                  >
                    <div v-if="!this.file" class="space-y-1 text-center">
                      <svg
                        class="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div class="flex text-sm text-gray-600 justify-center">
                        <label
                          for="file-upload"
                          class="
                            relative
                            cursor-pointer
                            bg-white
                            rounded-md
                            font-medium
                            text-main
                            hover:text-emerald-300
                            focus-within:outline-none
                            focus-within:ring-2
                            focus-within:ring-offset-2
                            focus-within:ring-emerald-300
                          "
                        >
                          <span>Upload an image</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            ref="poster"
                            @change="onFileChange"
                            accept="image/*"
                            class="sr-only"
                          />
                        </label>
                      </div>
                      <p class="text-xs text-gray-500">
                        PNG, JPG, JPEG up to 10MB
                      </p>
                    </div>
                    <div v-else class="space-y-1 text-center">
                      <svg
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 50 50"
                        style="
                          enable-background: new 0 0 50 50;
                          width: 60px;
                          margin: 0px auto;
                        "
                        xml:space="preserve"
                      >
                        <circle style="fill: #25ae88" cx="25" cy="25" r="25" />
                        <polyline
                          style="
                            fill: none;
                            stroke: #ffffff;
                            stroke-width: 2;
                            stroke-linecap: round;
                            stroke-linejoin: round;
                            stroke-miterlimit: 10;
                          "
                          points="
	38,15 22,33 12,25 "
                        />
                      </svg>
                      <div class="flex text-sm text-gray-600 justify-center">
                        Image <span class="text-main ml-0.5">chosen</span>
                      </div>
                      <p class="text-xs text-gray-500">
                        File name: {{ file.name }}
                      </p>
                    </div>
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
                    v-model="location"
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
                    v-model="link"
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
              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  @click.prevent="add"
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
                  Save
                </button>
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
import { getStorage, ref, uploadBytes } from "firebase/storage";
import DataService from "../utils/firestoreDb";
import firebaseConfig from "../../firebaseConfig";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize firebase storage
const storage = getStorage();
const randomString = (Math.random() + 1).toString(36).substring(7);
const storageRef = ref(storage, randomString);

export default {
  data() {
    return {
      file: null,
    };
  },
  mounted() {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        console.log(user);
      } else {
        window.location.href = "/login";
      }
    });
  },
  methods: {
    onFileChange(event) {
      this.file = event.target.files[0];
      console.log(this.file);
    },
    add() {
      onAuthStateChanged(getAuth(), (user) => {
        const service = new DataService();
        const username = user.displayName;
        const image = `https://firebasestorage.googleapis.com/v0/b/scievents-9ed9f.appspot.com/o/${randomString}?alt=media`;
        const data = {
          organizer: username,
          title: this.title,
          about: this.about,
          date: this.date,
          end_time: this.end_time,
          start_time: this.start_time,
          link: this.link,
          location: this.location,
          imageUrl: image,
        };
        const {
          organizer,
          title,
          about,
          date,
          end_time,
          start_time,
          link,
          location,
          imageUrl,
        } = data;
        if (
          title &&
          about &&
          date &&
          end_time &&
          start_time &&
          link &&
          location &&
          imageUrl &&
          organizer
        ) {
          console.log(data);
          uploadBytes(storageRef, this.file)
            .then((snapshot) => {
              service
                .create(data)
                .then(() => (window.location.href = "/admin"))
                .catch((e) => console.log(e));
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
