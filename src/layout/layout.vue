<template>
  <a-layout class="layout">
    <a-layout-header>
      <div class="top">
        <a-menu mode="horizontal" theme="dark" v-model:selectedKeys="current">
          <a-menu-item key="Index">首页</a-menu-item>
          <a-menu-item key="1">menu-1</a-menu-item>
        </a-menu>
        <!-- <IndexTop /> -->
      </div>
    </a-layout-header>
    <div class="container">
      <router-view></router-view>
    </div>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import IndexTop from "@/components/IndexTop.vue";
export default defineComponent({
  name: "layout",
  components: { IndexTop },
  setup() {
    let current = ref<string[]>(["index"]);
    let stat = reactive({});
    return {
      stat,
      current,
    };
  },
});
</script>
<style lang="scss" scoped>
.top {
  height: 80px;
  width: 100%;
  backdrop-filter: saturate(150%) contrast(50%) blur(10px);
}
.container {
  height: 900px;
}
</style>