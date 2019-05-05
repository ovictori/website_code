<template>
  <div class="donate">
    <place-form></place-form>
  </div>
</template>

<script>
// @ is an alias to /src
import PlaceForm from "@/components/PlaceForm.vue";

export default {
  name: "donate",
  components: {
    PlaceForm
  }
};
</script>

<style lang="scss" scoped></style>
