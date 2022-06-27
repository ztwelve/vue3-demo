
<template>
  <RouterView />
</template>
<script   lang="ts">
import { RouterLink, RouterView } from "vue-router";
export default {
  name: "APP",
  components: {},
  setup() {},
};
</script>
<style>
@import "@/assets/base.css";

#app {
  width: 100%;
  height: 967px;
  margin: 0 auto;
  font-weight: normal;
}
</style>
