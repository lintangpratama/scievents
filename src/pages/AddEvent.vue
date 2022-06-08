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

                  <div class="col-span-3">
                    <label
                      for="first-name"
                      class="block text-sm font-medium text-gray-700"
                      >Start time</label
                    >
                    <input
                      type="datetime-local"
                      name="first-name"
                      id="first-name"
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
                      type="datetime-local"
                      name="last-name"
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
                    <div class="space-y-1 text-center">
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
                      <div class="flex text-sm text-gray-600">
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
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            class="sr-only"
                          />
                        </label>
                        <p class="pl-1">or drag and drop</p>
                      </div>
                      <p class="text-xs text-gray-500">
                        PNG, JPG, JPEG up to 10MB
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
