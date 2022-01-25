<template>
  <div class="bg-blerb-gray">
    <section class="flex items-center relative h-60 w-full justify-center">
      <div class="bg-blerb-dark-blue absolute w-full h-full">
        <img
          src="/images/banner-2.png"
          class="object-cover opacity-100 h-full w-full"
          alt=""
        />
      </div>

      <p
        class="
          font-heading font-bold
          text-3xl
          md:text-6xl
          leading-none
          tracking-tight
          break-words
          text-center text-white
          z-20
        "
      >
        Get started with Content Pigeon
      </p>
    </section>

    <section class="bg-blerb-gray pb-10">
      <div class="max-w-5xl mx-auto pr-10 pl-10 mb-8 mt-16">
        <p class="font-p-text text-center text-base md:text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime est
          repellendus dolorum beatae voluptas dolorem cupiditate nesciunt soluta
          deleniti ad atque dolore provident, omnis unde voluptates id porro
          quos eum. Lorem ipsuilique itaque cumque fugit dignissimos incidunt
          vitae eius fugiat.
        </p>
      </div>

      <div class="bg-blerb-gray max-w-5xl mx-auto pr-10 pl-10 mb-10 mt-16">
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST">
            <div class="shadow overflow-hidden sm:rounded-md">
              <div class="px-4 py-5 bg-white sm:p-6">
                <div class="grid grid-cols-6 gap-6">
                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="first-name"
                      class="block text-sm font-medium text-gray-700 text-left"
                      >Full name</label
                    >
                    <input
                      type="text"
                      name="full-name"
                      id="full-name"
                      autocomplete="given-name"
                      class="
                        mt-1
                        focus:ring-indigo-500 focus:border-indigo-500
                        block
                        w-full
                        shadow-sm
                        sm:text-sm
                        border-gray-300
                        rounded-md
                      "
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="title"
                      class="block text-sm font-medium text-gray-700 text-left"
                      >Title</label
                    >
                    <input
                      type="text"
                      name="title"
                      id="title"
                      class="
                        mt-1
                        focus:ring-indigo-500 focus:border-indigo-500
                        block
                        w-full
                        shadow-sm
                        sm:text-sm
                        border-gray-300
                        rounded-md
                      "
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="phone-number"
                      class="block text-sm font-medium text-gray-700"
                      >Phone Number</label
                    >
                    <div class="mt-1 relative rounded-md shadow-sm">
                      <div class="absolute inset-y-0 left-0 flex">
                        <label for="country" class="sr-only">Country</label>
                        <select
                          id="country"
                          name="country"
                          class="
                            h-full
                            py-0
                            pl-4
                            pr-8
                            border-transparent
                            bg-transparent
                            text-gray-500
                            focus:ring-indigo-500 focus:border-indigo-500
                            rounded-md
                          "
                        >
                          <option>NZ</option>
                          <option>Au</option>
                        </select>
                      </div>
                      <input
                        type="text"
                        name="phone-number"
                        id="phone-number"
                        autocomplete="tel"
                        class="
                          py-3
                          px-4
                          block
                          w-full
                          pl-20
                          focus:ring-indigo-500 focus:border-indigo-500
                          border-gray-300
                          rounded-md
                        "
                        placeholder="+1 (555) 987-6543"
                      />
                    </div>
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="email-address"
                      class="block text-sm font-medium text-gray-700 text-left"
                      >Email address</label
                    >
                    <input
                      type="text"
                      name="email-address"
                      id="email-address"
                      autocomplete="email"
                      class="
                        mt-1
                        focus:ring-indigo-500 focus:border-indigo-500
                        block
                        w-full
                        shadow-sm
                        sm:text-sm
                        border-gray-300
                        rounded-md
                      "
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="company"
                      class="block text-sm font-medium text-gray-700 text-left"
                      >Company</label
                    >
                    <input
                      type="text"
                      name="company"
                      id="company"
                      autocomplete="company"
                      class="
                        mt-1
                        focus:ring-indigo-500 focus:border-indigo-500
                        block
                        w-full
                        shadow-sm
                        sm:text-sm
                        border-gray-300
                        rounded-md
                      "
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="country"
                      class="block text-sm font-medium text-gray-700 text-left"
                      >Country/Region</label
                    >
                    <select
                      id="country"
                      name="country"
                      autocomplete="country-name"
                      class="
                        mt-1
                        block
                        w-full
                        py-2
                        px-3
                        border border-gray-300
                        bg-white
                        rounded-md
                        shadow-sm
                        focus:outline-none
                        focus:ring-indigo-500
                        focus:border-indigo-500
                        sm:text-sm
                      "
                    >
                      <option>New Zealand</option>
                      <option>Australia</option>
                      <option>United States</option>
                      <option>Canada</option>
                      <option>United Kingdom</option>
                    </select>
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="industry"
                      class="block text-sm font-medium text-gray-700 text-left"
                      >Industry</label
                    >
                    <input
                      type="text"
                      name="industry"
                      id="industry"
                      class="
                        mt-1
                        focus:ring-indigo-500 focus:border-indigo-500
                        block
                        w-full
                        shadow-sm
                        sm:text-sm
                        border-gray-300
                        rounded-md
                      "
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3"></div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="social-presences"
                      class="block text-sm font-medium text-gray-700 text-left"
                      >Number of social media account presences</label
                    >
                    <select
                      id="social-presences"
                      name="social-presences"
                      class="
                        mt-1
                        block
                        w-full
                        py-2
                        px-3
                        border border-gray-300
                        bg-white
                        rounded-md
                        shadow-sm
                        focus:outline-none
                        focus:ring-indigo-500
                        focus:border-indigo-500
                        sm:text-sm
                      "
                    >
                      <option>1-5</option>
                      <option>5-10</option>
                      <option>10-20</option>
                    </select>
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="social-users"
                      class="block text-sm font-medium text-gray-700 text-left"
                      >Number of required Content Pigeon users</label
                    >
                    <select
                      id="social-users"
                      name="social-users"
                      class="
                        mt-1
                        block
                        w-full
                        py-2
                        px-3
                        border border-gray-300
                        bg-white
                        rounded-md
                        shadow-sm
                        focus:outline-none
                        focus:ring-indigo-500
                        focus:border-indigo-500
                        sm:text-sm
                      "
                    >
                      <option>1-5</option>
                      <option>5-50</option>
                      <option>50-200</option>
                    </select>
                  </div>
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
                    bg-blerb-purple
                    hover:bg-indigo-700
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-indigo-500
                  "
                >
                  Request Demo
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>