<template>
  <div class="chart">
    <Main>
      <div class="table">
        <span class="title">name:</span>
        <span class="content">ztwelve</span>
      </div>
    </Main>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Main from "@/components/Main.vue";
export default defineComponent({
    name:"Chart",
  components: { Main },
});
</script>
<style lang="scss" scoped>
.table{
    display: flex;
    justify-content: space-around;
    .title{
        flex: 1;
    }
    .content{
        flex: 1;
    }
}
</style>