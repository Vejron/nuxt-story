<template>
  <section>
    <div class="prose-red login-form flex flex-col items-center mx-auto sm:w-full max-w-screen-lg">
      <img class="px-4 mb-0" src="/images/Sponsor-heroimage-ansokan-ny.avif" width="1006" height="528" />
      <FormulateForm
        class="p-4 w-full max-w-screen-lg"
        @submit="submitHandler"
        #default="{ isLoading, hasErrors }"
      >
        <h2>HÅLLBAR INSATS</h2>
        <FormulateInput
          type="textarea"
          rows="6"
          name="plan"
          placeholder="Beskriv den hållbara insats ni vill genomföra och hur ni planerar att genomföra den"
          label="Plan och genomförande"
          validation="required|max:256,length"
          validation-name="planering"
          error-behavior="blur"
          :help="`Inte längre än en tweet. ${256 - value.length} kvar.`"
        />
        <FormulateInput
          type="textarea"
          rows="6"
          name="future"
          label="Hållbarhet och förbättringar"
          placeholder="Beskriv hur er insats bidrar till en hållbar framtid och en bättre Umeåregion"
          validation="required|max:2000,length"
          validation-name="hållbarhet"
          error-behavior="blur"
          :help="`Här kan du bre på. ${2000 - value.length} kvar.`"
        />
        <FormulateInput
          type="textarea"
          rows="6"
          name="cost"
          label="Kostnader"
          placeholder="Ange vilka kostnader er hållbara insats medför"
          validation="required"
          validation-name="kostnader"
          error-behavior="blur"
          help="Bör inte va allt för dyrt, vänd er då hellre till raja eller nån annan maffioso"
        />
        <FormulateInput
          label="Startdatum för insatsen"
          type="date"
          name="date"
          validation-name="datum"
          error-behavior="blur"
          :validation="`required|date|after:${new Date().toLocaleDateString()}`"
          help="Insatsen måste genomföras inom 12 månader"
        />

        <h2>KONTAKTUPPGIFTER</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 mb-8 lg:mb-0 lg:gap-8">
          <FormulateInput
            type="text"
            name="name"
            label="Namn på föreningen / laget / gruppen"
            validation="required"
            validation-name="namn"
            error-behavior="blur"
          />
          <FormulateInput
            type="text"
            name="orgnbr"
            label="Organisationsnummer"
            validation="required"
            validation-name="organsisationsnummer"
            error-behavior="blur"
          />
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-4 mb-8 lg:mb-0 lg:gap-8">
          <FormulateInput
            class="lg:col-span-2"
            type="text"
            name="address"
            label="Adress"
            validation="required"
            validation-name="adress"
            error-behavior="blur"
          />
          <FormulateInput
            type="text"
            name="postnbr"
            label="Postnummer"
            validation="required"
            validation-name="postnummer"
            error-behavior="blur"
          />
          <FormulateInput
            type="text"
            name="city"
            label="Ort"
            validation="required"
            validation-name="orten"
            error-behavior="blur"
          />
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-4 mb-8 lg:mb-0 lg:gap-8">
          <FormulateInput
            class="lg:col-span-2"
            type="text"
            name="contact"
            label="Kontaktperson"
            placeholder="Förnamn, efternamn"
            validation="required"
            validation-name="Kontaktperson"
            error-behavior="blur"
          />
          <FormulateInput
            type="tel"
            name="phone"
            label="Telefon"
            validation="required"
            validation-name="telefon"
            error-behavior="blur"
          />
          <FormulateInput
            type="email"
            name="email"
            label="mail"
            validation="required|email"
          />
        </div>
        <FormulateInput
          type="submit"
          :disabled="isLoading || hasErrors"
          :label="isLoading ? 'skickar...' : 'Skicka ansökan'"
        />
      </FormulateForm>
    </div>
  </section>
</template>

<script>
const FORMSPARK_ACTION_URL = "https://submit-form.com/SQtTfTuZ";

export default {
  data() {
    return {
      value: "",
      formValues: {},
      story: { content: {} },
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
  },
  head() {
    return {
      title: "Sponsring",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Ansök om sponsring av umeå energi",
        },
      ],
    };
  },
  asyncData(context) {},
  methods: {
    async submitHandler (data) {
      await fetch(FORMSPARK_ACTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          message: data,
        }),
      }).then(() => {
        alert("Form submitted");
      });
    }
  }
};
</script>

<style scoped>
.form-title {
  margin-top: 0;
}
.login-form::v-deep .formulate-input-wrapper {
  @apply font-sans;
}
.login-form::v-deep .formulate-input {
  @apply font-sans;
}
.login-form::v-deep .formulate-input .formulate-input-element {
  max-width: none;
  @apply font-sans;
}
</style>