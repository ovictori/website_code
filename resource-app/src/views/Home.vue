<template>
  <div class="home">
    <p class="home__text">
      a volunteer-based service to get people the sanitary products they need.
      run for people, by people.
    </p>
    <the-map class="the-map"></the-map>
    <subscribe class="subscribe"></subscribe>
  </div>
</template>

<script>
import TheMap from "@/components/TheMap";
import Subscribe from "@/components/Subscribe";

export default {
  name: "home",
  components: {
    TheMap,
    Subscribe
  }
};
</script>

<style lang="scss" scoped>
.home__text {
  font-family: "Helvetica Neue";
  font-size: 1em;
  margin: 0.5vh;
}

.the-map {
}

.subscribe {
  height: 20vh;
  position: relative;
}
</style>
