<template>
  <div>
    <form>
      <dropdown
        :options="countries.countries"
        :selected="selectedCountry"
        v-on:updateOption="handleCountrySelection"
        :placeholder="'Select an Item'"
      >
      </dropdown>

      <dropdown
        :options="contents.contents"
        :selected="selectedContents"
        v-on:updateOption="handleDonationTypeSelection"
        :placeholder="'Select an Item'"
      >
      </dropdown>

      <div class="form-group">
        <button
          type="submit"
          class="btn btn-primary"
          @click="handleFormSubmission"
        >
          Donate
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import dropdown from "vue-dropdowns";
import countries from "@/assets/countries.js";
import contents from "@/assets/boxContents.js";
import Api from "@/util/api.js";

export default {
  name: "PlaceForm",
  components: {
    dropdown
  },
  props: {},
  data: function() {
    return {
      selectedCountry: { name: "Box Location" },
      countries: countries,
      selectedContents: { name: "Donation Type" },
      contents: contents,
      api: new Api()
    };
  },
  methods: {
    handleCountrySelection(payload) {
      this.selectedCountry = payload;
    },
    handleDonationTypeSelection(payload) {
      this.selectedContents = payload;
    },
    handleFormSubmission(e) {
      e.preventDefault();
      this.api.postDonation(
        this.selectedCountry.id,
        this.selectedContents.name
      );
    }
  }
};
</script>

<style lang="scss" scoped></style>
