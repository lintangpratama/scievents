<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg text-left">
    <div class="px-4 py-5 sm:px-6">
      <div class="w-full mx-auto mb-12 text-center">
        <h2 class="text-3xl mb-2 font-extrabold tracking-tight text-gray-900">
          {{ title }}
        </h2>
        <p
          class="
            mt-1
            mb-10
            text-base text-gray-500
            sm:mt-3 sm:text-base sm:max-w-xl
            mx-auto
            md:mt-2 md:text-base
          "
        >
          Organize by {{ organizer }}
        </p>
        <img
          :src="imageUrl"
          class="mx-auto"
          width="350"
          alt="event image"
        />
      </div>
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        <span class="text-main">Event</span> Information
      </h3>
      <p class="mt-1 max-w-2xl text-sm text-gray-500">
        Event details and more information
      </p>
    </div>
    <div class="border-t border-gray-200">
      <dl>
        <div
          class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">Title</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ title }}
          </dd>
        </div>
        <div
          class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">About</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ about }}
          </dd>
        </div>
        <div
          class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">Date</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ date }}
          </dd>
        </div>
        <div
          class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">Time</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ start_time }} - {{ end_time }}
          </dd>
        </div>
        <div
          class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">Location</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
           {{ location }}
          </dd>
        </div>
        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <a target="_blank" :href="link">
            <button
              type="submit"
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
              Register Event
            </button>
          </a>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup>
import { PaperClipIcon } from "@heroicons/vue/solid";
</script>

<script>
export default {
  props: [
    'title', 
    'about',
    'date',
    'start_time',
    'end_time', 
    'location',
    'link',
    'imageUrl',
    'organizer'
  ],
}
</script>