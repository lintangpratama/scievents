<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg text-left">
    <div class="px-4 py-5 sm:px-6">
      <div class="w-full mx-auto mb-12 text-center">
        <h2 class="text-3xl mb-2 font-extrabold tracking-tight text-gray-900">
          Hesvalsic: Sounds and Musics University Concert
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
          Organize by HMJ Kimia
        </p>
        <img
          src="https://www.haievent.com/wp-content/uploads/2019/10/Hesvalsic-UIN-Walisongo-Semarang-31-Oktober-2019.jpg"
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
            Hesvalsic: Sounds and Musics University Concert
          </dd>
        </div>
        <div
          class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">About</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
            incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
            consequat sint. Sit id mollit nulla mollit nostrud in ea officia
            proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit
            deserunt qui eu.
          </dd>
        </div>
        <div
          class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">Date</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            Wednesday, 13 January 2022
          </dd>
        </div>
        <div
          class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">Time</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            12.00 - 16.00
          </dd>
        </div>
        <div
          class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">Location</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            Gedung Teater Fakultas Sains dan Teknologi
          </dd>
        </div>
        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
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
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup>
import { PaperClipIcon } from "@heroicons/vue/solid";
</script>