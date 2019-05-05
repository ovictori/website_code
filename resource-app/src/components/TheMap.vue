<template>
  <div>
    <iframe
      class="map-container"
      src="https://www.google.com/maps/d/embed?mid=1mtHsMcQ3DxAAGU3gKVgslfIsO6Uxv8IZ"
      width="640"
      height="480"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "TheMap",
  props: {},
  data: function() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.map-container {
  height: 50vh;
  width: 100vw;
}
</style>
