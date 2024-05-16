<template>
  <div class="main">
    <div style="flex: 0 1 25%">
      <top></top>
      <leftNav></leftNav>
      <leftFoot></leftFoot>
    </div>
    <div style="flex: 0 1 25%"></div>
  </div>
</template>
<script>
import top from "./left/LeftTop.vue"
import leftNav from "./left/LeftNav.vue"
import leftFoot from "./left/LeftFoot.vue"
export default {
  components: {
    top,
    leftNav,
    leftFoot
  },
  data() {
    return {}
  }
}
</script>
<style lang="scss">
.main {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;
  background-image: url("../assets/img/bg\(1\).png");
  background-size: 100%;
  height: 100vh;
  background-position: 0 -19px;
}
.main-top {
  width: 400px;
  height: 300px;
}
</style>
