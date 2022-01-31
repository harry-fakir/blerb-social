<template>
  <div class="home">
    <section class="bg-white pb-96 relative">
      <div class="hidden lg:block z-0">
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          class="absolute top-0 left-0"
        >
          <svg
            v-vpshow.right
            width="99"
            height="85"
            viewBox="0 0 99 85"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M98.8972 42.4906L74.3632 0H25.3008L49.832 42.4933L98.8972 42.4906Z"
              fill="#71B8FA"
            />
            <path
              d="M25.3008 84.9812H74.3632L98.8972 42.4906H49.832L25.3008 84.9812Z"
              fill="#1C2B45"
            />
            <path
              d="M73.3067 40.6593H24.2389L23.6785 39.686H72.7463L73.3067 40.6593ZM71.049 36.7473H21.9812L22.5443 37.7206H71.6121L71.049 36.7473ZM69.3545 33.7978H20.2867L20.847 34.7711H69.9148L69.3545 33.7978ZM67.6599 30.8484H18.5921L19.1552 31.8244H68.223L67.6599 30.8484ZM65.9653 27.915H16.8975L17.4606 28.891H66.5284L65.9653 27.915ZM64.2681 24.9656H15.2002L15.7633 25.9416H64.8311L64.2681 24.9656ZM62.5735 22.0323H13.5056L14.0687 23.0083H63.1365L62.5735 22.0323ZM60.8789 19.0828H11.811L12.3741 20.0588H61.442L60.8789 19.0828ZM59.1843 16.1468H10.1165L10.6795 17.1201H59.7474L59.1843 16.1468ZM57.4897 13.2108H8.42186L8.98496 14.1868H58.0528L57.4897 13.2108ZM55.7924 10.2614H6.72461L7.28767 11.2347H56.3555L55.7924 10.2614ZM54.0978 7.32533H5.03004L5.59311 8.30133H54.6609L54.0978 7.32533ZM52.4033 4.38931H3.33544L3.89582 5.36262H52.9636L52.4033 4.38931ZM50.7087 1.45328H1.64087L2.20394 2.42928H51.2717L50.7087 1.45328Z"
              fill="#1C2B45"
            />
            <path
              d="M2.25227 80.7206H51.3201L50.757 81.6966H1.6892L2.25227 80.7206ZM3.3838 78.7579H52.4516L53.0147 77.7819H3.94687L3.3838 78.7579ZM0.563067 83.7022H49.6309L49.0678 84.6755H0L0.563067 83.7022ZM5.08105 75.8245H54.1489L54.712 74.8512H5.64412L5.08105 75.8245ZM6.77562 72.8751H55.8435L56.4066 71.9018H7.33872L6.77562 72.8751ZM8.46754 69.9444H57.5354L58.0985 68.9711H9.03061L8.46754 69.9444ZM10.1621 67.0084H59.23L59.793 66.0351H10.7252L10.1621 67.0084ZM11.8567 64.059H60.9245L61.4876 63.083H12.4198L11.8567 64.059ZM13.5513 61.1095H62.6191L63.1822 60.1362H14.1144L13.5513 61.1095ZM15.2459 58.1735H64.3137L64.8741 57.1975H15.8063L15.2459 58.1735ZM16.9432 55.2241H66.011L66.574 54.2481H17.5062L16.9432 55.2241ZM18.6377 52.2881H67.7055L68.2686 51.3121H19.1927L18.6377 52.2881ZM20.3323 49.3386H69.4001L69.9632 48.3653H20.8954L20.3323 49.3386ZM22.0269 46.3892H71.0947L71.6578 45.4159H22.5899L22.0269 46.3892ZM23.7214 43.4532H72.7893L73.3524 42.4799H24.2872L23.7214 43.4532Z"
              fill="#5E5CC2"
            />
          </svg>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          class="absolute bottom-80 left-0"
        >
          <svg
            v-vpshow.left
            width="43"
            height="85"
            viewBox="0 0 43 85"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M42.2038 42.4906L17.6726 84.9812H-31.3926L-6.86134 42.4906H42.2038Z"
              fill="#4DE8E8"
            />
            <path
              d="M-31.3926 0H17.6726L42.2038 42.4906L-6.86134 42.4933L-31.3926 0Z"
              fill="#1C2B45"
            />
            <path
              d="M28.1001 45.2979H-20.9677L-20.4047 44.3246H28.6632L28.1001 45.2979ZM26.9686 47.258H-22.0858L-22.6489 48.2313H26.4189L26.9686 47.258ZM25.274 50.194H-23.7938L-24.3569 51.17H24.7109L25.274 50.194ZM23.5794 53.1434H-25.4884L-26.0515 54.1194H23.0163L23.5794 53.1434ZM21.8848 56.0928H-27.1803L-27.7434 57.0688H21.3244L21.8848 56.0928ZM20.1876 59.0423H-28.8803L-29.4433 60.0183H19.6245L20.1876 59.0423ZM18.493 61.9917H-30.5749L-31.1379 62.965H17.9299L18.493 61.9917ZM16.7984 64.9251H-32.2748L-32.8379 65.8983H16.23L16.7984 64.9251ZM15.1038 67.8745H-33.964L-34.5271 68.8505H14.5407L15.1038 67.8745ZM13.4092 70.8078H-35.6586L-36.2217 71.7811H12.8462L13.4092 70.8078ZM11.7147 73.7573H-37.3532L-37.9163 74.7333H11.1516L11.7147 73.7573ZM10.0174 76.7067H-39.0504L-39.6135 77.6827H9.45432L10.0174 76.7067ZM8.32281 79.6427H-40.745L-41.3054 80.6187H7.7624L8.32281 79.6427ZM6.62821 82.5921H-42.4396L-43 83.5681H6.06783L6.62821 82.5921Z"
              fill="#5E5CC2"
            />
          </svg>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          class="absolute top-0 right-16"
        >
          <svg
            v-vpshow.left
            width="50"
            height="46"
            viewBox="0 0 50 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.19964 45.9934L27.3349 0.993439H26.1352L0 45.9934H1.19964ZM4.81288 45.9934L30.9453 0.993439H29.7399L3.61324 45.9934H4.81288ZM8.42325 45.9934L34.5585 0.993439H33.3589L7.22362 45.9934H8.42325ZM12.0336 45.9934L38.1689 0.993439H36.9692L10.834 45.9934H12.0336ZM15.644 45.9934L41.7793 0.993439H40.5939L14.4472 45.9934H15.644ZM19.2573 45.9934L45.3896 0.993439H44.1928L18.0576 45.9934H19.2573ZM22.8676 45.9934L49.0028 0.993439H47.8032L21.668 45.9934H22.8676Z"
              fill="#5E5CC2"
            />
          </svg>
        </div>

        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          class="absolute top-20 right-0"
        >
          <svg
            v-vpshow.right
            width="78"
            height="86"
            viewBox="0 0 78 86"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M109.067 42.5684L84.5361 85.059H35.4709L60.0022 42.5684H109.067Z"
              fill="#4DE8E8"
            />
            <path
              d="M35.4709 0.0777588H84.5361L109.067 42.5684L60.0049 42.571L35.4709 0.0777588Z"
              fill="#5E5CC2"
            />
            <path
              d="M92.8401 39.2355H43.7723L43.2092 38.2622H92.2771L92.8401 39.2355ZM90.5852 35.3235H41.5173L42.0804 36.2968H91.1482L90.5852 35.3235ZM88.8879 32.3874H39.82L40.3831 33.3634H89.451L88.8879 32.3874ZM87.1933 29.438H38.1255L38.6885 30.414H87.7564L87.1933 29.438ZM85.4987 26.5047H36.4309L36.994 27.4807H86.0618L85.4987 26.5047ZM83.8041 23.5552H34.7363L35.2913 24.5527H84.3592L83.8041 23.5552ZM82.1096 20.6058H33.0418L33.6048 21.5818H82.6726L82.1096 20.6058ZM80.415 17.6698H31.3472L31.9102 18.6431H80.978L80.415 17.6698ZM78.7177 14.7204H29.6606L30.2237 15.6937H79.2915L78.7177 14.7204ZM77.0231 11.7843H27.9553L28.5184 12.7576H77.5862L77.0231 11.7843ZM75.3286 8.83489H26.2607L26.8238 9.81089H75.8916L75.3286 8.83489ZM73.634 5.88546H24.5661L25.1292 6.86146H74.1971L73.634 5.88546ZM71.9394 2.94943H22.8715L23.4346 3.92543H72.5025L71.9394 2.94943ZM70.2421 0H21.1743L21.7374 0.975998H70.8052L70.2421 0Z"
              fill="#71B8FA"
            />
            <path
              d="M59.8011 42.4584H10.7333L10.1702 43.4317H59.2381L59.8011 42.4584ZM58.1066 45.4079H9.03872L8.47563 46.3838H57.5435L58.1066 45.4079ZM56.412 48.3439H7.34412L6.78102 49.3199H55.8489L56.412 48.3439ZM54.7174 51.2933H5.64952L5.08649 52.2693H54.1543L54.7174 51.2933ZM53.0201 54.2427H3.9523L3.3892 55.2187H52.457L53.0201 54.2427ZM51.3255 57.1788H2.2577L1.69729 58.1548H50.7651L51.3255 57.1788ZM49.6309 60.1282H0.5631L0 61.1042H49.0678L49.6309 60.1282Z"
              fill="#5E5CC2"
            />
          </svg>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          class="absolute bottom-80 right-12"
        >
          <svg
            v-vpshow.left
            width="120"
            height="86"
            viewBox="0 0 120 86"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.4011 42.6945L49.0501 0H98.3507L73.7017 42.6972L24.4011 42.6945Z"
              fill="#71B8FA"
            />
            <path
              d="M98.3507 85.3891H49.0501L24.3984 42.6945H73.699L98.3507 85.3891Z"
              fill="#4DE8E8"
            />
            <path
              d="M47.9563 40.849H97.2596L97.8254 39.871H48.522L47.9563 40.849ZM50.2247 36.9182H99.5281L98.9623 37.8962H49.659L50.2247 36.9182ZM51.9275 33.9681H101.231L100.665 34.9488H51.3617L51.9275 33.9681ZM53.6329 31.0045H102.917L102.352 31.9852H53.0482L53.6329 31.0045ZM55.3356 28.0571H104.639L104.073 29.0378H54.7698L55.3356 28.0571ZM57.0383 25.0935H106.342L105.776 26.0742H56.4725L57.0383 25.0935ZM58.7329 22.1757H108.036L107.47 23.1564H58.1672L58.7329 22.1757ZM60.4357 19.2121H109.739L109.173 20.1901H59.8699L60.4357 19.2121ZM62.1384 16.2485H111.442L110.876 17.2265H61.5726L62.1384 16.2485ZM63.8519 13.3254H113.155L112.589 14.3033H63.2861L63.8519 13.3254ZM65.5546 10.3618H114.858L114.292 11.3425H64.9888L65.5546 10.3618ZM67.2573 7.41167H116.561L115.995 8.39235H66.6915L67.2573 7.41167ZM68.96 4.44808H118.263L117.698 5.42876H68.3942L68.96 4.44808ZM70.6627 1.48449H119.966L119.4 2.46518H70.097L70.6627 1.48449Z"
              fill="#1C2B45"
            />
            <path
              d="M71.4575 83.0317H22.1542L22.72 84.0123H72.0233L71.4575 83.0317ZM70.3179 81.0595H21.0146L20.4488 80.0788H69.7521L70.3179 81.0595ZM68.6152 78.0959H19.3118L18.7461 77.118H68.0494L68.6152 78.0959ZM66.9125 75.1458H17.6091L17.0434 74.1678H66.3467L66.9125 75.1458ZM65.199 72.2119H15.8956L15.3299 71.2339H64.6332L65.199 72.2119ZM63.4963 69.2618H14.1929L13.6272 68.2838H62.9305L63.4963 69.2618ZM61.7908 66.2982H12.4875L11.9217 65.3175H61.2251L61.7908 66.2982ZM60.0881 63.3346H10.7848L10.2217 62.3566H59.5412L60.0881 63.3346ZM58.3854 60.3845H9.08208L8.519 59.4038H57.8223L58.3854 60.3845ZM56.6827 57.4209H7.37936L6.81358 56.4402H56.1169L56.6827 57.4209ZM54.98 54.4708H5.67665L5.11086 53.4901H54.4223L54.98 54.4708ZM53.2773 51.5072H3.97393L3.40816 50.5292H52.7115L53.2773 51.5072ZM51.5745 48.5436H2.27121L1.70544 47.5656H51.0088L51.5745 48.5436ZM49.8691 45.5935H0.565796L3.05176e-05 44.6155H49.3034L49.8691 45.5935Z"
              fill="#5E5CC2"
            />
          </svg>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          class="absolute top-32 left-24"
        >
          <svg
            v-vpshow.left
            width="60"
            height="19"
            viewBox="0 0 60 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M59.8011 0H10.7333L10.1702 0.973298H59.2381L59.8011 0ZM58.1066 2.94943H9.03872L8.47563 3.92541H57.5435L58.1066 2.94943ZM56.412 5.88545H7.34412L6.78102 6.86144H55.8489L56.412 5.88545ZM54.7174 8.83488H5.64952L5.08649 9.81087H54.1543L54.7174 8.83488ZM53.0201 11.7843H3.9523L3.3892 12.7603H52.457L53.0201 11.7843ZM51.3255 14.7203H2.2577L1.69729 15.6963H50.7651L51.3255 14.7203ZM49.6309 17.6698H0.5631L0 18.6458H49.0678L49.6309 17.6698Z"
              fill="#5E5CC2"
            />
          </svg>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="2500" class="w-4/5 mx-auto">
        <h1
          class="
            py-6
            mt-8
            mb-8
            font-heading font-bold
            text-3xl
            md:text-5xl
            leading-none
            tracking-tight
            break-words
            text-center
          "
        >
          The tool that's making it easier than ever for
          <div class="blue-highlight inline-block relative">
            <span class="relative z-20">brands to build relationships.</span>
          </div>
          <br />
          with their clients, customers and end-users.
        </h1>
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
    </section>
    <section class="bg-blerb-gray pt-28 pb-10 relative">
      <div class="max-w-5xl mx-auto pr-10 pl-10">
        <!-- need to add padding to right and left side to above parent (with max-w-5xl) -->
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          class="z-20 aspect-w-16 aspect-h-9 -mt-96"
        >
          <iframe
            src="https://www.youtube.com/embed/ThiCMd5kGbE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="rounded-3xl shadow-2xl"
          ></iframe>
        </div>
      </div>

      <div class="mt-10">
        <img src="images/home/ic-asterisk.svg" alt="" class="mx-auto" />
      </div>

      <div data-aos="fade-up" data-aos-duration="2000" class="w-4/5 mx-auto">
        <h1
          class="
            py-6
            font-heading font-bold
            text-2xl
            md:text-3xl
            leading-none
            tracking-tight
            break-words
            text-center
            mb-4
          "
        >
          Now, more than ever, brands understand the importance of building
          authentic relationships with their customers, and the value of content
          that's relevant and localized.
        </h1>
        <p class="font-p-text text-center text-base md:text-lg mb-10">
          So, <strong>how</strong> do you make that connection with individual
          customers when you’re operating at scale, from a centralized point?
          And <strong>how</strong> do you make it easy for your network to
          produce their own content without losing control of quality or
          compromising your brand standards?
        </p>
      </div>
    </section>

    <section class="flex items-center relative h-72 w-full justify-center">
      <div class="bg-blerb-dark-blue absolute w-full h-full">
        <img
          src="/images/banner-2.png"
          class="object-cover opacity-100 h-full w-full"
          alt=""
        />
      </div>

      <p
        data-aos="fade-up"
        class="
          font-heading font-bold
          text-2xl
          md:text-5xl
          leading-none
          tracking-tight
          break-words
          text-center text-white
          z-20
        "
      >
        The answer? You use Content Pigeon.
      </p>
    </section>

    <section class="bg-white pb-10 relative">
      <div
        class="
          grid
          md:grid-cols-3
          sm:grid-cols-1
          gap-x-10 gap-y-20
          max-w-8xl
          mx-auto
          py-5
        "
      >
        <div data-aos="fade-up" data-aos-duration="2000" class="mt-5">
          <div>
            <img
              src="/images/home/ic-network.svg"
              alt="network"
              class="mx-auto lg:mx-0 inline"
            />
          </div>
          <h4 class="text-center text-3xl mt-10 mb-5 font-heading font-bold">
            It's a
            <div class="blue-highlight inline-block relative">
              <span class="relative z-20">network</span>
            </div>
          </h4>
          <p class="text-center text-base font-p-text px-5">
            Content Pigeon connects Head Office (your marketing team or your
            agency) to the social media accounts of each of your branches,
            stores or agents.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="750"
          class="mt-0 lg:mt-5"
        >
          <div>
            <img
              src="/images/home/ic-schedulingtool.svg"
              alt="schedulingtool"
              class="mx-auto lg:mx-0 inline"
            />
          </div>
          <h4 class="text-center text-3xl mb-5 font-heading font-bold">
            It's a
            <div class="blue-highlight inline-block relative">
              <span class="relative z-20">scheduling tool</span>
            </div>
          </h4>
          <p class="text-center text-base font-p-text px-5">
            Create brand messaging and publish it to all (or some) of your
            network with the click of a button.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="900"
          class="mt-0 lg:mt-5"
        >
          <div>
            <img
              src="/images/home/ic-assetlibrary.svg"
              alt="ic-assetlibrary"
              class="mx-auto lg:mx-0 inline"
            />
          </div>
          <h4 class="text-center text-3xl mb-5 font-heading font-bold">
            It's a
            <div class="blue-highlight inline-block relative">
              <span class="relative z-20">assest libary</span>
            </div>
          </h4>
          <p class="text-center text-base font-p-text px-5">
            Upload pre-approved templates so your branches can create their own
            locally-relevant, on-brand content.
          </p>
        </div>
      </div>
    </section>

    <section class="bg-blerb-gray pt-10 pb-10 relative">
      <div
        class="
          grid
          md:grid-cols-2
          sm:grid-cols-1
          gap-x-10 gap-y-20
          max-w-8xl
          mx-auto
          py-5
        "
      >
        <div data-aos="fade-up" data-aos-duration="2000">
          <img
            src="/images/home/features.png"
            alt="home-features"
            class="mx-auto lg:mx-0 inline"
          />
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-delay="1000"
          class="mx-auto lg:mx-0 my-auto px-4"
        >
          <h3
            class="text-left text-4xl lg:text-5xl mb-5 font-heading font-bold"
          >
            And it’s
            <div class="blue-highlight inline-block relative">
              <span class="relative z-20">total control</span>
            </div>
            over your content
          </h3>

          <p class="text-left text-base font-p-text">
            Approval settings allow you to check, edit or reject all posts from
            your team before they go live, while insightful data feeds give you
            an in-depth understanding of the performance of your content across
            your entire network.
          </p>

          <button
            class="
              hover:bg-blerb-purple hover:text-white
              bg-transparent
              border-2 border-blerb-purple
              text-black
              font-bold
              py-3
              px-8
              rounded
              mt-10
              flex
              items-start
            "
          >
            <router-link to="/features" class="btn btn-secondary">
              Features</router-link
            >
          </button>
        </div>
      </div>
    </section>

    <section class="bg-white pt-10 pb-10 relative">
      <div
        data-aos="fade-up"
        data-aos-duration="2500"
        data-aos-delay="1500"
        class="lg:px-60 px-10 pb-5"
      >
        <h3
          class="text-center text-4xl lg:text-5xl mb-5 font-heading font-bold"
        >
          Ideal for franchises and chains
        </h3>

        <p class="text-center text-base font-p-text">
          Content Pigeon is built for any chain, franchise or business wanting
          to deliver a blend of consistent, top-line brand messaging and
          locally-specific (but definitely still on-brand) content. We work with
          everyone from businesses with 2-3 locations nationally, to those with
          hundreds of sites across multiple countries.
        </p>
      </div>

      <div
        class="
          grid
          lg:grid-cols-5
          md:grid-cols-3
          grid-cols-2
          gap-x-10 gap-y-10
          max-w-6xl
          mx-auto
          py-5
          px-5
        "
      >
        <div
          data-aos="fade-right"
          data-aos-duration="2500"
          data-aos-delay="1500"
          class="bg-blerb-gray rounded px-2 py-6"
        >
          <div>
            <img
              src="/images/home/ic-franchises-1.svg"
              alt="home-features"
              class="mx-auto lg:mx-0 inline pb-4"
            />
          </div>
          <div class="text-center text-base font-p-text font-bold px-5">
            Real estate companies
          </div>
        </div>

        <div
          data-aos="fade-right"
          data-aos-duration="2500"
          data-aos-delay="1500"
          class="bg-blerb-gray rounded px-2 py-6"
        >
          <div>
            <img
              src="/images/home/ic-franchises-2.svg"
              alt="home-features"
              class="mx-auto lg:mx-0 inline pb-4"
            />
          </div>
          <div class="text-center text-base font-p-text font-bold px-5">
            Supermarket chains
          </div>
        </div>

        <div
          data-aos="fade-right"
          data-aos-duration="2500"
          data-aos-delay="1500"
          class="bg-blerb-gray rounded px-2 py-6"
        >
          <div>
            <img
              src="/images/home/ic-franchises-3.svg"
              alt="home-features"
              class="mx-auto lg:mx-0 inline pb-4"
            />
          </div>
          <div class="text-center text-base font-p-text font-bold px-5">
            Health and fitness businesses
          </div>
        </div>

        <div
          data-aos="fade-right"
          data-aos-duration="2500"
          data-aos-delay="1500"
          class="bg-blerb-gray rounded px-2 py-6"
        >
          <div>
            <img
              src="/images/home/ic-franchises-4.svg"
              alt="home-features"
              class="mx-auto lg:mx-0 inline pb-4"
            />
          </div>
          <div class="text-center text-base font-p-text font-bold px-5">
            Hair and beauty businesses
          </div>
        </div>

        <div
          data-aos="fade-right"
          data-aos-duration="2500"
          data-aos-delay="1500"
          class="bg-blerb-gray rounded px-2 py-6"
        >
          <div>
            <img
              src="/images/home/ic-franchises-5.svg"
              alt="home-features"
              class="mx-auto lg:mx-0 inline pb-4"
            />
          </div>
          <div class="text-center text-base font-p-text font-bold px-5">
            Home build companies
          </div>
        </div>

        <div
          data-aos="fade-right"
          data-aos-duration="2500"
          data-aos-delay="1500"
          class="bg-blerb-gray rounded px-2 py-6"
        >
          <div>
            <img
              src="/images/home/ic-franchises-6.svg"
              alt="home-features"
              class="mx-auto lg:mx-0 inline pb-4"
            />
          </div>
          <div class="text-center text-base font-p-text font-bold px-5">
            Eateries and hospitality
          </div>
        </div>

        <div
          data-aos="fade-right"
          data-aos-duration="2500"
          data-aos-delay="1500"
          class="bg-blerb-gray rounded px-2 py-6"
        >
          <div>
            <img
              src="/images/home/ic-franchises-7.svg"
              alt="home-features"
              class="mx-auto lg:mx-0 inline pb-4"
            />
          </div>
          <div class="text-center text-base font-p-text font-bold px-5">
            Finance and insurance brokers
          </div>
        </div>

        <div
          data-aos="fade-right"
          data-aos-duration="2500"
          data-aos-delay="1500"
          class="bg-blerb-gray rounded px-2 py-6"
        >
          <div>
            <img
              src="/images/home/ic-franchises-8.svg"
              alt="home-features"
              class="mx-auto lg:mx-0 inline pb-4"
            />
          </div>
          <div class="text-center text-base font-p-text font-bold px-5">
            Vehicle dealerships
          </div>
        </div>

        <div
          data-aos="fade-right"
          data-aos-duration="2500"
          data-aos-delay="1500"
          class="bg-blerb-gray rounded px-2 py-6"
        >
          <div>
            <img
              src="/images/home/ic-franchises-9.svg"
              alt="home-features"
              class="mx-auto lg:mx-0 inline pb-4"
            />
          </div>
          <div class="text-center text-base font-p-text font-bold px-5 mt-4">
            Retail chains
          </div>
        </div>

        <div
          data-aos="fade-right"
          data-aos-duration="2500"
          data-aos-delay="1500"
          class="bg-blerb-gray rounded px-2 py-6"
        >
          <div>
            <img
              src="/images/home/ic-franchises-10.svg"
              alt="home-features"
              class="mx-auto lg:mx-0 inline pb-4"
            />
          </div>
          <div class="text-center text-base font-p-text font-bold px-5">
            Marketing and comms agencies
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


