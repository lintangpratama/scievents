<template>
  <div class="bg-white">
    <div
      class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <h2 class="text-2xl mb-10 font-extrabold tracking-tight text-gray-900">
        Upcoming <span class="text-main">Events</span>
      </h2>

      <div
        class="
          mt-6
          grid grid-cols-1
          gap-y-10 gap-x-6
          sm:grid-cols-2
          lg:grid-cols-4
          xl:gap-x-8
        "
      >
        <div
          v-for="product in products"
          :key="product.id"
          class="group relative"
        >
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
              :src="product.imageSrc"
              :alt="product.imageAlt"
              class="
                w-full
                h-full
                object-center object-contain
                lg:w-full lg:h-full
              "
            />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <a :href="product.href">
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ product.name }}
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
            </div>
            <p class="text-sm font-medium text-gray-900">{{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const products = [
  {
    id: 1,
    name: "Helvetica",
    href: "#",
    imageSrc:
      "https://www.haievent.com/wp-content/uploads/2019/10/Hesvalsic-UIN-Walisongo-Semarang-31-Oktober-2019.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "Free",
    color: "HMJ Kimia",
  },
  {
    id: 1,
    name: "Lomba Nasional Cerpen ...",
    href: "#",
    imageSrc:
      "https://eventkampus.com/data/event/poster/poster-lomba-nasional-rangkaian-haflah-miladiyah-ke-51-pai-uin-walisongo.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "Free",
    color: "HMJ Biologi",
  },
  {
    id: 1,
    name: "Webinar Independence Day",
    href: "#",
    imageSrc:
      "https://pbs.twimg.com/media/E8AZSSWVIAAzPAa.jpg:large",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "Free",
    color: "HMJ Psikologi",
  },
  {
    id: 1,
    name: "Collaboration Compfest",
    href: "#",
    imageSrc:
      "https://media.goopps.com/upload/module/b_event/event-gallery-0-1545115816-1214.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "Rp20.000",
    color: "HMJ Fisika",
  },
];
</script>