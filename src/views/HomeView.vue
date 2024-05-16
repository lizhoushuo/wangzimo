<template>
  <div class="home">
    <div class="top">
      <div class="one"><RightTop></RightTop></div>
      <div class="one"><RightTop></RightTop></div>
    </div>
    <div class="toptwo">
      <div></div>
      <div><RightTopTwo></RightTopTwo></div>
    </div>
  </div>
</template>

<script>
import RightTop from "@/components/RightTop/RightTop.vue"
import RightTopTwo from "@/components/RightTopTwo/RightTopTwo.vue"
export default {
  components: { RightTop, RightTopTwo },
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;
  // background-color: aqua;
  background-image: url("../assets/icon/bg@2x\(1\).png");
  background-size: 100%;
  overflow: hidden;
  padding: 0 10px;
}
.top {
  display: flex;
  justify-content: space-between;
}
.one {
  margin-top: 20px;
}
</style>
