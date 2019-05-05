<template>
  <div class="subscribe">
    <div class="checks">
      <p-check
        class="checkline"
        v-for="(box, index) in boxes"
        :key="`content-${index}`"
        :name="box.name"
        color="primary"
        v-model="box.active"
      >
        {{ box.id }}. {{ box.name }}
      </p-check>
    </div>
    <form class="subscribe-form">
      <input v-model="email" type="text" placeholder="Enter your e-mail" />
      <button type="submit" @click="handleSubscribe">Subscribe</button>
    </form>
  </div>
</template>

<script>
import countries from "@/assets/countries.js";
import Api from "@/util/api.js";

export default {
  name: "subscribe",
  components: {},
  data: function() {
    return {
      email: "",
      boxes: countries.countries,
      api: new Api()
    };
  },
  methods: {
    handleSubscribe(e) {
      e.preventDefault();
      let activeArray = this.boxes.map(box => {
        return box.active;
      });
      this.api.postSubscription(activeArray, this.email);
      // this.$store.dispatch()
    }
  }
};
</script>

<style lang="scss" scoped>
.checks {
  display: grid;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.checkline {
  margin: 2px;
}

.subscribe-form {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
</style>
