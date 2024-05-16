<template>
  <div class="boss">
    <!-- <dv-border-box-8 :color="['#16633d', '#16633d']" backgroundColor="#081d189c"> -->
    <div class="top">
      <img src="@/assets/img/容器 47.png" alt="" />
      <p>百香果基地预警</p>
    </div>
    <div class="bottom">
      <section></section>
      <div class="bottom-img">
        <div>
          <img src="@/assets/img/组 3299.png" alt="" />
          <p>本周XXXX</p>
          <span style="color: #7b5457">729</span>
        </div>
        <div>
          <img src="@/assets/img/组 3300.png" alt="" />
          <p>本周XXXX</p>
          <span style="color: #2c7a5a; left: 29px">57</span>
        </div>
        <div>
          <img src="@/assets/img/组 3301.png" alt="" />
          <p>本周XXXX</p>
          <span style="color: #786200; left: 22px">48%</span>
        </div>
      </div>
      <aside></aside>
      <div class="bottom-text">
        <div><img src="@/assets/img/Rectangle 605@2x.png" alt="" /><span>24小时预警</span></div>
        <div>
          <p>XXXXX <span>29</span></p>
          <p>XXXX <span>257</span></p>
        </div>
        <div>
          <p>XXXX <span>52</span></p>
          <p>天气预警 <span>52</span></p>
        </div>
      </div>
    </div>
    <!-- </dv-border-box-8> -->
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
.bottom-img {
  display: flex;
  justify-content: space-around;
  font-size: 10px;
  color: #fff;
  height: 100px;

  div {
    text-align: center;
    position: relative;
    img {
      width: 77px;
      height: 74px;
    }
    span {
      position: absolute;
      top: 17px;
      left: 24px;
      font-size: 17px;
    }
  }
}
.bottom-text {
  display: flex;
  color: #fff;
  justify-content: space-around;
  font-size: 11px;
  margin-top: 10px;
}
.bottom-text div:nth-of-type(1) {
  position: relative;
  img {
    width: 106px;
    height: 37px;
  }
  span {
    position: absolute;
    top: 9px;
    left: 14px;
    color: #734046;
    font-size: 14px;
  }
}
.bottom-text div:nth-of-type(2) {
  width: 80px;
  span {
    color: #734046;
  }
}
.bottom-text div:nth-of-type(3) {
  width: 80px;
  span {
    color: #734046;
  }
}
</style>
