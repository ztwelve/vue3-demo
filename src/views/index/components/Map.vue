<template>
  <div class="map" id="map"></div>
</template>
 
<script lang="ts">
import { defineComponent, nextTick, onMounted } from "vue";
import { MapLoader } from "../../../utils/comment";
export default defineComponent({
  name: "Map",
  setup() {
    onMounted(() => {
      loadMapScript(); // 加载百度地图资源
    });
    const init = () => {
      MapLoader().then((AMap: any) => {
        var map = new AMap.Map("map", {
          resizeEnable:true,
          zoom: 15,
          center: [120.232165, 30.279615],
          mapStyle: 'amap://styles/fde23bd3067a05cab0bdebb14b868576',
          viewMode:'3D',
          buildingAnimation:true
        });
        AMap.plugin("AMap.Geolocation", function () {
          var Geolocation = new AMap.Geolocation();
          map.addControl(Geolocation);
        });
      });
    };
    const loadMapScript = () => {
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.className = "loadmap"; // 给script一个类名
      script.src =
        "https://webapi.amap.com/maps?v=2.0&key=fcb203bdac5a2a7e1a25ba4f4d4bb18e";
      script.onload = () => {
        init();
      };
      let loadmap = document.getElementsByClassName("loadmap");
      if (loadmap) {
        // 每次append script之前判断一下，避免重复添加script资源标签
        for (var i = 0; i < loadmap.length; i++) {
          document.body.removeChild(loadmap[i]);
        }
      }
      document.body.appendChild(script);
    };
  },
});
</script>
 
<style lang='scss' scoped>
.map {
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>