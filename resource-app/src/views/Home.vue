<template>
  <div class="home">
    <place-form></place-form>
  </div>
</template>

<script>
// @ is an alias to /src
import PlaceForm from "@/components/PlaceForm.vue";

export default {
  name: "home",
  components: {
    PlaceForm
  }
};
</script>

<style lang="scss" scoped></style>
