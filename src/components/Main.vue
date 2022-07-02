<template>
  <div class="box">
    <div class="title">
      <expand-outlined style="color: rgb(24, 254, 254); font-size: 24px" />
      <span class="text">{{ title }}</span>
    </div>
    <span class="line">
      <span class="left"></span>
      <span class="center"></span>
      <span class="right"></span>
    </span>
    <slot class="content"> </slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { ExpandOutlined } from "@ant-design/icons-vue";
export default defineComponent({
  components: { ExpandOutlined },
  props: {
    title: {
      default: "",
    },
  },
  setup(props) {
    let title = props.title;
    return {
      title,
    };
  },
});
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  backdrop-filter: saturate(150%) contrast(100%) blur(5px);
  box-shadow: 0 0 20px #333;

  .title {
    display: flex;
    align-items: center;
    background-color: rgb(2, 15, 24);
    padding-left: 10px;
    font-family: Microsoft YaHei "微软雅黑";
    img {
      height: 25px;
      width: 25px;
    }
    .text {
      margin-left: 15px;
      display: flex;
      align-items: center;
      color: #fff;
      height: 45px;
    }
  }
  .line {
    display: flex;
    justify-content: space-between;
    height: 3px;
    width: 100%;
    .left {
      flex: 2;
      background-color: #fff;
    }
    .center {
      flex: 9;
      background-color: rgb(128, 134, 137);
    }
    .right {
      margin-left: 5px;
      flex: 1;
      background-color: rgb(24, 254, 254);
    }
  }
  .content {
    height: 100%;
    width: 100%;
  }
}
</style>