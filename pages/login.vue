<template>
  <div class="container">
    <h1>Sign in to access the secret page</h1>
    <div>
      <label for="email">
        <input id="email" type="email" value="test">
      </label>
      <label for="password">
        <input id="password" type="password" value="test">
      </label>
      <button @click="postLogin">
        login
      </button>
      <p>The credentials are not verified for the example purpose.</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    postLogin() {
      setTimeout(() => {
        // we simulate the async request with timeout.
        this.$router.push("/");
      }, 1000);
    },
  },
};
</script>
