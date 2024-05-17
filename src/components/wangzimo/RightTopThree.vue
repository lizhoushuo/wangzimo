<template>
  <div class="boss">
    <div class="top">
      <img src="@/assets/img/容器 47.png" alt="" />
      <p>土壤XXXX预警</p>
    </div>
    <div class="bottom">
      <section></section>
      <div class="bottom-content">
        <div><img src="@/assets/img/图层 1.png" alt="" /></div>
        <div class="xian"></div>
        <div
          style="
            width: 140px;
            white-space: normal;
            overflow-wrap: break-word;
            color: #96a7a1;
            font-size: 12px;
            line-height: 18px;
          "
        >
          XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.boss {
  width: 100%;
  height: 100%;
}
.top {
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 13px;
  font-size: 14px;
  p {
    margin-left: 10px;
    font-family: "Times New Roman", Times, serif;
    color: #9fb4ae;
  }
}
.bottom {
  // height: 150px;
  aside {
    height: 1px;
    width: 290px;
    background: linear-gradient(to right, #40545325, #3e866a, #40545339);
    margin: auto;
  }
  section {
    height: 1px;
    width: 394px;
    background-color: #3e866a65;
    margin: auto;
    margin-bottom: 12px;
  }
}
.bottom-content {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  img {
    width: 150px;
    height: 120px;
  }
  .xian {
    width: 2px;
    height: 120px;
    background-color: #253630;
  }
}
</style>
