<template>
  <div class="boss">
    <dv-border-box-8 :color="['#16633d', '#16633d']" backgroundColor="#081d189c">
      <div class="top">
        <img src="../../assets/icon/容器 47.png" alt="" />
        <p>土壤XXXX预警</p>
      </div>
      <div class="bottom">
        <section></section>
        <div class="bottom-content">
          <div><img src="../../assets/icon/图层 1.png" alt="" /></div>
          <footer></footer>
          <div
            style="
              width: 160px;
              white-space: normal;
              overflow-wrap: break-word;
              color: #fff;
              font-size: 12px;
              line-height: 18px;
            "
          >
            XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
          </div>
        </div>
      </div>
    </dv-border-box-8>
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
  width: 400px;
  height: 195px;
}
.top {
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 13px;
  font-size: 14px;
  color: rgba(62, 134, 106, 0.592);
  p {
    margin-left: 10px;
    font-family: "Times New Roman", Times, serif;
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
    width: 165px;
    height: 120px;
  }
  footer {
    width: 1px;
    height: 120px;
    background-image: linear-gradient(to bottom, #40545325, #3e866a, #40545339);
  }
}
</style>
