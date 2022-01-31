<template>
  <footer v-show="!login" class="bg-blerb-dark-blue w-full text-white">
    <div class="pb-5 md:pb-7 lg:pb-16 pt-24 md:pt-36">
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        data-aos-delay="500"
        class="max-w-6xl mx-auto px-5"
      >
        <div class="text-center mt-8 mb-8">
          <p class="font-p-text text-3xl font-bold">
            Ready to take control of your brand’s online presence?
          </p>

          <button
            class="
              bg-blerb-purple
              hover:bg-blerb-light-blue
              text-white
              font-bold
              py-2
              px-4
              rounded
              mt-10
            "
          >
            <router-link to="/getstarted" class="btn btn-secondary">
              Get Started Now</router-link
            >
          </button>
        </div>
      </div>

      <div
        class="
          container
          mx-auto
          px-5
          py-6
          flex
          items-center
          justify-between
          sm:flex-row
          flex-col
        "
      >
        <router-link to="/" class="mb-4 md:mb-0"
          ><img src="/images/logo-white.svg" alt=""
        /></router-link>

        <p class="text-xs">
          © Copyright 2022 Content Pigeon Ltd | All rights reserved.
          <br />
          <a href="">Privacy Policy </a>
          |
          <a href="">Terms & Conditions </a>
        </p>

        <div class="inline-flex mt-6 sm:mt-0 justify-center md:self-end">
          <a href="#" class="mr-4"
            ><img src="images/icon-facebook.png" alt=""
          /></a>
          <a href="#"><img src="images/icon-youtube.png" alt="" /></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    login() {
      return this.$route.name.toLowerCase() === "login";
    },
  },
};
</script>
