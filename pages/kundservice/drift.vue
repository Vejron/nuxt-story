<template>
  <div class="row-container">
    <iframe
      class="map-fill"
      src="https://driftinfo10.surge.sh/"
      title="fake map"
    ></iframe>
  </div>
</template>

<style lang="scss" scoped>
.row-container {
  display: flex;
  width: 100%;
  height: calc(100vh - 128px);
  flex-direction: column;
  background-color: rgb(180, 180, 180);
  overflow: hidden;
}
.map-fill {
  flex-grow: 1;
  border: none;
  margin: 0;
  padding: 0;
}
</style>