<template>
  <nav v-show="!login" class="bg-white z-30">
    <div class="mx-auto container px-6 py-2 xl:py-0 max-w-5xl mt-5 z-20">
      <div class="flex items-center justify-between">
        <div class="inset-y-0 left-0 flex items-center xl:hidden">
          <div
            class="
              inline-flex
              items-center
              justify-center
              p-2
              rounded-md
              text-gray-700
              hover:text-gray-100
              focus:outline-none
              transition
              duration-150
              ease-in-out
            "
          >
            <div class="visible xl:hidden">
              <ul
                class="
                  p-2
                  border-r
                  bg-white
                  absolute
                  rounded
                  left-0
                  right-0
                  shadow
                  mt-8
                  md:mt-8
                  hidden
                  z-30
                "
              >
                <li
                  class="
                    flex
                    xl:hidden
                    cursor-pointer
                    font-p-text
                    text-gray-700 text-base
                    md:text-lg
                    leading-3
                    tracking-normal
                    mt-2
                    py-2
                    hover:text-gray-500
                    focus:text-gray-500 focus:outline-none
                  "
                >
                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-grid"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z"></path>
                      <rect x="4" y="4" width="6" height="6" rx="1"></rect>
                      <rect x="14" y="4" width="6" height="6" rx="1"></rect>
                      <rect x="4" y="14" width="6" height="6" rx="1"></rect>
                      <rect x="14" y="14" width="6" height="6" rx="1"></rect>
                    </svg>
                    <span class="ml-2 font-bold font-p-text">
                      <router-link to="/features"> Features</router-link>
                    </span>
                  </div>
                </li>
                <li
                  class="
                    xl:hidden
                    flex-col
                    cursor-pointer
                    font-p-text
                    text-gray-700 text-base
                    md:text-lg
                    leading-3
                    tracking-normal
                    mt-2
                    py-2
                    hover:text-gray-500
                    focus:text-gray-500 focus:outline-none
                    flex
                    justify-center
                  "
                  @click="dropdownHandler($event)"
                >
                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-puzzle"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z"></path>
                      <path
                        d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"
                      ></path>
                    </svg>
                    <span class="ml-2 font-bold font-p-text">
                      <router-link to="/about"> About</router-link></span
                    >
                  </div>
                </li>
                <li
                  class="
                    xl:hidden
                    cursor-pointer
                    text-gray-700 text-base
                    md:text-lg
                    leading-3
                    tracking-normal
                    mt-2
                    py-2
                    hover:text-gray-500
                    focus:text-gray-500 focus:outline-none
                    flex
                    items-center
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-compass"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <polyline points="8 16 10 10 16 8 14 14 8 16"></polyline>
                    <circle cx="12" cy="12" r="9"></circle>
                  </svg>
                  <span class="ml-2 font-bold font-p-text">
                    <router-link to="/getstarted"> Get Started</router-link>
                  </span>
                </li>
                <li
                  class="
                    xl:hidden
                    cursor-pointer
                    xl:hidden
                    cursor-pointer
                    text-gray-700 text-base
                    md:text-lg
                    leading-3
                    tracking-normal
                    mt-2
                    py-2
                    hover:text-gray-500
                    focus:text-gray-500 focus:outline-none
                    flex
                    items-center
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-code"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <polyline points="7 8 3 12 7 16"></polyline>
                    <polyline points="17 8 21 12 17 16"></polyline>
                    <line x1="14" y1="4" x2="10" y2="20"></line>
                  </svg>
                  <span class="ml-2 font-bold font-p-text">
                    <router-link to="/login"> Login</router-link>
                  </span>
                </li>
              </ul>
              <svg
                @click="MenuHandler($event, true)"
                aria-haspopup="true"
                aria-label="Main Menu"
                xmlns="http://www.w3.org/2000/svg"
                class="show-m-menu icon icon-tabler icon-tabler-menu"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z"></path>
                <line x1="4" y1="8" x2="20" y2="8"></line>
                <line x1="4" y1="16" x2="20" y2="16"></line>
              </svg>
              <div
                class="hidden close-m-menu text-gray-700"
                @click="MenuHandler($event, false)"
              >
                <svg
                  aria-label="Close"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div
          class="
            flex
            w-full
            sm:w-auto
            items-center
            sm:items-stretch
            justify-end
            sm:justify-start
          "
        >
          <div class="flex items-center">
            <router-link to="/">
              <img src="/images/logo.svg" alt="Logo" width="350"
            /></router-link>
          </div>
        </div>
        <div class="flex">
          <div class="hidden xl:flex md:mr-6 xl:mr-16">
            <a
              href="javascript: void(0)"
              class="
                flex
                px-3
                py-2
                my-6
                mx-5
                items-center
                font-p-text
                text-sm
                md:text-base
                leading-5
                text-gray-700
                hover:text-gray-500
                transition
                duration-150
                ease-in-out
              "
            >
              <span class="mr-2"> </span>
              <router-link to="/features"> Features</router-link>
            </a>
            <a
              href="javascript: void(0)"
              class="
                flex
                px-3
                py-2
                my-6
                mx-2
                items-center
                font-p-text
                text-sm
                md:text-base
                leading-5
                text-gray-700
                hover:text-gray-500
                transition
                duration-150
                ease-in-out
              "
            >
              <span class="mr-2"> </span>
              <router-link to="/about"> About</router-link>
            </a>
            <a
              href="javascript: void(0)"
              class="
                flex
                px-3
                py-2
                my-6
                mx-4
                font-bold
                items-center
                font-p-text
                text-sm
                md:text-base
                leading-5
                text-gray-700
                hover:text-gray-500
                transition
                duration-150
                ease-in-out
                border-solid border-2 border-blerb-blue
                rounded
              "
            >
              <span class=""> </span>
              <router-link to="/getstarted"> Get Started</router-link>
            </a>
            <a
              href="javascript: void(0)"
              class="
                flex
                px-3
                py-2
                my-6
                mx-2
                items-center
                font-p-text
                text-sm
                md:text-base
                leading-5
                text-gray-700
                hover:text-gray-500
                transition
                duration-150
                ease-in-out
              "
            >
              <span class="mr-2"> </span>
              <router-link to="/login"> Login</router-link>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "LightWithButton",
  data() {
    return {
      profilePhoto:
        "https://tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_1.png",
    };
  },
  computed: {
    login() {
      return this.$route.name.toLowerCase() === "login";
    },
  },
  methods: {
    dropdownHandler(event) {
      let single = event.currentTarget.getElementsByTagName("ul")[0];
      single.classList.toggle("hidden");
    },
    MenuHandler(el, val) {
      let MainList =
        el.currentTarget.parentElement.getElementsByTagName("ul")[0];
      let closeIcon =
        el.currentTarget.parentElement.getElementsByClassName(
          "close-m-menu"
        )[0];
      let showIcon =
        el.currentTarget.parentElement.getElementsByClassName("show-m-menu")[0];
      if (val) {
        MainList.classList.remove("hidden");
        el.currentTarget.classList.add("hidden");
        closeIcon.classList.remove("hidden");
      } else {
        showIcon.classList.remove("hidden");
        MainList.classList.add("hidden");
        el.currentTarget.classList.add("hidden");
      }
    },
  },
};
</script>

