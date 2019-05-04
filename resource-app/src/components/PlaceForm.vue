<template>
  <div>
    <h1>Vue Select <small class="text-muted">In a Form</small></h1>

    <!-- Replace dropdown with box locations -->
    <!-- use boxContents for checklist -->

    <form>
      <div class="form-group">
        <label for="foo">Phone number</label>
        <input type="text" id="foo" class="form-control" />
      </div>

      <div class="form-group">
        <label>Country</label>
        <v-select :options="countries" label="name"></v-select>
      </div>

      <div class="form-group">
        <input
          type="submit"
          class="btn btn-primary"
          @submit="handleFormSubmission"
        />
      </div>
    </form>
  </div>
</template>

<script>
import countries from "@/../mockData/countries.js";

export default {
  name: "PlaceForm",
  props: {},
  data: function() {
    return {
      selectedCountry: undefined,
      countries: countries
    };
  },
  methods: {
    handleFormSubmission() {
      // api.postDonation();
    }
  }
};
</script>

<style lang="scss" scoped></style>
