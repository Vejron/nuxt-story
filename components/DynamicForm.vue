<template>
  <div v-editable="blok">
    <FormulateForm
      class="p-4 w-full max-w-screen-lg"
      @submit="submitHandler"
      #default="{ isLoading, hasErrors }"
    >
      <template v-for="blok in blok.inputs">
        <template v-if="blok.component === 'input-field'">
          <FormulateInput
            :key="blok._uid"
            class=""
            :type="blok.type"
            :name="blok.name"
            :placeholder="blok.placeholder"
            :label="blok.label"
            :validation="blok.validators"
            :help="blok.help"
            error-behavior="blur"
          />
        </template>
        <template v-else-if="blok.component === 'responsive-grid'">
          <responsive-grid :blok="blok" :key="blok._uid">

          </responsive-grid>
        </template>
      </template>
      <FormulateInput
        type="submit"
        :disabled="isLoading || hasErrors"
        :label="isLoading ? 'skickar...' : blok.submitButtonText"
      />
    </FormulateForm>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  methods: {
    async submitHandler(data) {
      console.log('form data: ', data);
      await fetch(this.blok.endpoint, {
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
    },
  },
};
</script>