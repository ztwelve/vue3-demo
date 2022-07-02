<template>
  <div class="container">
    <Map />
    <div class="page-index">
      <div class="page-container">
        <div class="container-left">
          <Main title="概要">
            <div class="box1"></div>
          </Main>
        </div>
        <div class="container-center"></div>
        <div class="container-right"></div>
      </div>
      <div class="page-bottom"></div>
    </div>
  </div>
</template>
<script lang="ts">
import IndexTop from "@/components/IndexTop.vue";
import Main from "@/components/Main.vue";
import Map from "@/views/index/components/Map.vue";
import { defineComponent } from "vue";
// import Chart from "@/views/index/components/chart";
export default defineComponent({
  components: { IndexTop, Main, Map },
});
</script>
<style lang="scss" scoped>
@import "@/assets/style.scss";
.box1 {
  height: 200px;
}
</style>