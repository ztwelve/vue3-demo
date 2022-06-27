<template>
  <a-layout>
    <a-layout-header>
      <div class="top">
        <!-- <a-menu mode="horizontal">
          <a-menu-item :key="1">index</a-menu-item>
        </a-menu> -->
        <IndexTop />
      </div>
    </a-layout-header>
    <div class="container">
      <router-view></router-view>
    </div>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import IndexTop from "@/components/IndexTop.vue";
export default defineComponent({
  name: "layout",
  components: { IndexTop },
});
</script>
<style lang="scss" scoped>
.top {
  border: 1px solid red;
  height: 80px;
  width: 100%;
  background-color: rgb(50, 50, 50);
  backdrop-filter: saturate(150%) contrast(50%) blur(10px);
}
.container {
  height: calc(100% - 80px);
}
</style>