<template>
  <div class="container page-index">
    <!-- <h1 style="color:#fff">index</h1> -->
    <!-- <div class="page-top"><IndexTop /></div> -->
    <div class="page-container">
      <div class="container-left">
        <Main text="text1" >
          <div class="box1"></div>
        </Main>
      </div>
      <div class="container-center"></div>
      <div class="container-right"></div>
    </div>
    <div class="page-bottom"></div>
  </div>
</template>
<script lang="ts">
import IndexTop from "@/components/IndexTop.vue";
import Main from "@/components/Main.vue";
import { defineComponent } from "@vue/runtime-core";
// import Chart from "@/views/index/components/chart";
export default defineComponent({
  components: { IndexTop, Main },
});
</script>
<style lang="scss" scoped>
@import "@/assets/style.scss";
.box1{
  border: 1px solid red;
  height: 200px;
}
</style>