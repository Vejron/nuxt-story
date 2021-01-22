<template>
  <section class="max-w-6xl mx-auto">
    <div class="m-6 flex flex-col">
      <h1 class="text-center text-2xl sm:text-6xl font-black mb-6">
        Pris<span class="text-green-600 italic">Administration</span>
      </h1>
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th
              scope="col"
              class="px-2 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Område
            </th>
            <th
              scope="col"
              class="px-2 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Fast
            </th>
            <th
              scope="col"
              class="px-2 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Rörligt
            </th>
            <th
              scope="col"
              class="px-2 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Timpris
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="price in prices" :key="price.id">
            <td class="px-2 md:px-6 py-4 whitespace-nowrap">
              <div
                class="text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                SE{{ price.id }}
              </div>
            </td>
            <td class="px-2 md:px-6 py-4 whitespace-nowrap">
              <input
                v-model="price.sek[0]"
                class="w-full font-semibold focus:outline-none focus:ring focus:border-blue-300 border-yellow-600 border-2 rounded-xl py-1 px-2 text-grey-darkest"
                type="number"
                name="postnummer"
                id=""
              />
            </td>
            <td class="px-2 md:px-6 py-4 whitespace-nowrap">
              <input
                v-model="price.sek[1]"
                class="w-full font-semibold focus:outline-none focus:ring focus:border-blue-300 border-yellow-600 border-2 rounded-xl py-1 px-2 text-grey-darkest"
                type="number"
                name="postnummer"
                id=""
              />
            </td>
            <td class="px-2 md:px-6 py-4 whitespace-nowrap">
              <input
                v-model="price.sek[2]"
                class="w-full font-semibold focus:outline-none focus:ring focus:border-blue-300 border-yellow-600 border-2 rounded-xl py-1 px-2 text-grey-darkest"
                type="number"
                name="postnummer"
                id=""
              />
            </td>
          </tr>
        </tbody>
      </table>

      <div class="my-4 mx-2 md:mx-6 flex justify-end">
        <button
          :disabled="!changesPending"
          :class="{'update-disabled': !changesPending}"
          @click="updatePrice"
          class="w-full md:w-auto uppercase font-semibold focus:outline-none focus:ring focus:border-blue-300 border-2 rounded-xl py-2 px-4 text-grey-darkest text-white bg-green-500 border-transparent shadow-md hover:bg-green-700"
        >
          Updatera priserna
        </button>
      </div>
    </div>

    <div class="h-screen">
    </div>
  </section>
</template>

<script>
import { store } from "~/plugins/firestore.client";

export default {
  data() {
    return {
      changesPending: false,
      avtals: [],
      unsubscribe: null,
      prices: [
        {
          id: 1,
          sek: [0, 0, 0],
        },
        {
          id: 2,
          sek: [0, 0, 0],
        },
        {
          id: 3,
          sek: [0, 0, 0],
        },
        {
          id: 4,
          sek: [0, 0, 0],
        },
      ],
    };
  },

  watch: {
    prices: {
      deep: true,
      handler() {
        console.log('prices changed');
        this.changesPending = true;
      }
    },
  },

  mounted() {
    // realtime updates
    this.unsubscribe = store.collection("prices").onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      this.avtals = data.map((avtal, index) => avtal);
      const prices = this.avtals.map((avtal) => avtal.prices);
      const se1 = { id: 1, sek: [prices[0][0], prices[1][0], prices[2][0]] };
      const se2 = { id: 2, sek: [prices[0][1], prices[1][1], prices[2][1]] };
      const se3 = { id: 3, sek: [prices[0][2], prices[1][2], prices[2][2]] };
      const se4 = { id: 4, sek: [prices[0][3], prices[1][3], prices[2][3]] };
      this.prices = [se1, se2, se3, se4];
      setTimeout(() => {
        this.changesPending = false;
      }, 10);
      console.log("All data in 'prices' collection", [se1, se2, se3, se4]);
    });
  },

  beforeDestroy() {
    if (this.unsubscribe) this.unsubscribe();
  },

  methods: {
    updatePrice() {
      const batch = store.batch();
      const fastRef = store.collection("prices").doc("fast");
      const prices1 = [
        this.prices[0].sek[0],
        this.prices[1].sek[0],
        this.prices[2].sek[0],
        this.prices[3].sek[0],
      ];
      const rorligtRef = store.collection("prices").doc("rorligt");
      const prices2 = [
        this.prices[0].sek[1],
        this.prices[1].sek[1],
        this.prices[2].sek[1],
        this.prices[3].sek[1],
      ];
      const timprisRef = store.collection("prices").doc("timpris");
      const prices3 = [
        this.prices[0].sek[2],
        this.prices[1].sek[2],
        this.prices[2].sek[2],
        this.prices[3].sek[2],
      ];
      batch.update(fastRef, {
        prices: prices1,
      });
      batch.update(rorligtRef, {
        prices: prices2,
      });
      batch.update(timprisRef, {
        prices: prices3,
      });

      batch
        .commit()
        .then(function () {
          console.log("Document successfully updated!");
        })
        .catch(function (error) {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
        });
    },
  },

  head() {
    return {
      title: "Administration",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Ändra på ditt och datt",
        },
      ],
    };
  },
};
</script>

<style scoped>
.update-disabled {
  @apply bg-gray-400;
}
</style>