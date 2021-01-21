<template>
  <div>
    <section class="max-w-6xl mx-auto">
      <div class="m-6 flex">
        <div>
          <h1
            class="leading-tight mb-4 text-4xl md:text-6xl text-green-800 font-extrabold"
          >
            Beställ 100% cirkulär energi
          </h1>
          <ul class="text-sm font-semibold list-disc list-inside ml-2 mb-4">
            <li>Välj mellan rörligt, fast och timpris</li>
            <li>Överskottet går till skrytbyggen och lokala enteprenörer*</li>
            <li>Beställ online. med lite flax fungerar det</li>
          </ul>
          <p class="mb-4">
            Är du redan kund? Logga isåfall in på
            <a
              class="text-green-800 hover:text-green-500 underline"
              href="https://www.google.se"
              >mina sidor</a
            >
            för att ändra i befintliga avtal
          </p>
          <p class="text-md font-semibold text-lg">
            Skriv in postnummer för att ta del av erbjudanden i ditt elområde
          </p>
          <input
            class="mt-4 font-semibold focus:outline-none focus:ring focus:border-blue-300 border-yellow-600 border-4 rounded-xl py-2 px-3 text-grey-darkest"
            type="text"
            name="postnummer"
            placeholder="903..."
            id=""
          />
        </div>
        <div class="flex-grow"></div>
        <img
          class="spinner hidden md:block self-start w-40"
          src="/images/s-energy.svg"
          alt="hållbar energi"
        />
      </div>
    </section>

    <section class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 mx-6 mb-40">
        <div
          v-for="avtal in avtals"
          :key="avtal.name"
          class="flex flex-col rounded overflow-hidden shadow-lg"
        >
          <div class="flex relative">
            <img
              class="w-full"
              width="600"
              height="600"
              :src="avtal.image"
              alt="nonsensbild"
            />
            <div
              class="radial-glare w-full h-full absolute text-4xl text-green-200 font-extrabold"
            >
              <div class="absolute italic ml-6 bottom-0">
                {{ avtal.price }}
                <span class="text-sm text-yellow-500">öre / kWh</span>
              </div>
            </div>
          </div>

          <div class="flex-grow px-6 py-4">
            <div class="font-bold text-xl mb-2">{{ avtal.name }}</div>
            <p class="text-gray-700 text-base">
              {{ avtal.body }}
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span
              v-for="tag in avtal.tags"
              :key="tag"
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >{{ tag }}</span
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { store } from "~/plugins/firestore.client";

export default {
  data() {
    return {
      prices: {},
      unsubscribe: null,
      avtals: [
        {
          image: "/images/timpris.jpg",
          name: "Timpris",
          price: 0.22,
          body:
            "För dig som vill ha ha det senaste och inte har problem med överraskningar, och häftiga påslag vid torka",
          tags: ["billigt", "osäkert", "spännande"],
        },
        {
          image: "/images/rorligt.jpg",
          name: "Rörligt",
          price: 0.32,
          body:
            "Det vettiga alternativet. Du betalar vad det kostar och vi tar nån procent uppepå",
          tags: ["smart", "lagom", "vettigt"],
        },
        {
          image: "/images/fast.jpg",
          name: "Fast",
          price: 0.42,
          body:
            "Är du lite feg och vill kunna göra en budget för flera år framöver. Är det viktigare att kalkylen blir rätt än att priset blir bra?",
          tags: ["trist", "dyrt", "tråkigt"],
        },
      ],
    };
  },
  mounted() {
    // Use the input event for instant update of content
    this.$storybridge.on("input", (event) => {
      if (event.story.id === this.story.id) {
        this.story.content = event.story.content;
      }
    });
    // Use the bridge to listen the events
    this.$storybridge.on(["published", "change"], (event) => {
      // window.location.reload()
      this.$nuxt.$router.go({
        path: this.$nuxt.$router.currentRoute,
        force: true,
      });
    });
    // realtime updates
    this.unsubscribe = store.collection("prices").onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      this.prices = data;
      this.avtals = data.map((avtal, index) => avtal);
      console.log("All data in 'prices' collection", data);
    });
  },

  beforeDestroy() {
    if (this.unsubscribe) this.unsubscribe();
  },

  head() {
    return {
      title: "Elpriser",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Dagens pris",
        },
      ],
    };
  },
};
</script>

<style scoped>
.radial-glare {
  background: radial-gradient(
    circle,
    rgba(2, 0, 36, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );
}

.spinner {
  animation: circle 8s infinite 4s;
}

@keyframes circle {
  0% {
    transform: rotate(0deg);
  }
  20% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>