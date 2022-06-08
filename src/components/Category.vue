<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
        <h2 class="text-2xl mb-10 font-extrabold text-gray-900">Our <span class="text-main">Events Organizer</span></h2>

        <div
          class="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:gap-y-8"
        >
          <div
            v-for="callout in callouts"
            :key="callout.name"
            class="group relative"
          >
            <div
              class="
                relative
                w-full
                h-80
                bg-white
                rounded-lg
                overflow-hidden
                group-hover:opacity-75
                sm:aspect-w-2 sm:aspect-h-1 sm:h-64
                lg:aspect-w-1 lg:aspect-h-1
              "
            >
              <img
                :src="callout.imageSrc"
                :alt="callout.imageAlt"
                class="w-full h-full object-center object-contain"
              />
            </div>
            <h3 class="mt-6 text-sm text-gray-500">
              <a :href="callout.href">
                <span class="absolute inset-0" />
                {{ callout.name }}
              </a>
            </h3>
            <p class="text-base font-semibold text-gray-900">
              {{ callout.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const callouts = [
  {
    name: "Himpunan Mahasiswa",
    description: "Fisika",
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/scievents-9ed9f.appspot.com/o/fisika.png?alt=media&token=f76027a9-47a5-44c0-9dd1-d4528217e2d9",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Himpunan Mahasiswa",
    description: "Matematika",
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/scievents-9ed9f.appspot.com/o/matematika.png?alt=media&token=c138855d-40ae-4802-94e0-fe40ddb4f91b",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Himpunan Mahasiswa",
    description: "Teknologi Informasi",
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/scievents-9ed9f.appspot.com/o/ti.png?alt=media&token=e1aac55b-db21-4887-a912-5402ed724ced",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Himpunan Mahasiswa",
    description: "Biologi",
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/scievents-9ed9f.appspot.com/o/biologi.png?alt=media&token=8c182404-95ee-4cdb-8916-7c256bbe8100",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Eksekutif",
    description: "Dewan Eksekutif Mahasiswa FST",
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/scievents-9ed9f.appspot.com/o/dema.png?alt=media&token=97a3e86c-a86a-4b48-992d-b6103608811c",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Legislatif",
    description: "Senat Mahasiswa FST",
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/scievents-9ed9f.appspot.com/o/sema.png?alt=media&token=5e6c597b-0dcc-4841-96e6-76c3efc9351f",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Himpunan Mahasiswa",
    description: "Kimia",
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/scievents-9ed9f.appspot.com/o/kimia.png?alt=media&token=9f853df4-0f65-4979-8fc3-0efabc70502a",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
];
</script>