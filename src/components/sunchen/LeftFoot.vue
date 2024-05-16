<template>
  <div class="leftFoot">
    <div class="left-hander">
      <div class="left-hander-left">
        <div>
          <img src="@/assets/img/容器 47.png" alt="" style="width: 15px; height: 15px" />
          <span class="name">地块动态</span>
        </div>

        <div class="left-hander-ringth">全部</div>
      </div>
    </div>
    <div class="lines"></div>
    <div class="left-nav">
      <div class="left-nav-left">
        <img src="@/assets/img/组 239@3x.png" alt="" style="width: 30px; height: 28px" />
        <span style="color: #d6c875; font-size: 12px; margin-left: 10px">地块动态1 台湾1号</span>
      </div>
      <div class="left-nav-ringth">
        <div class="left-hander-ringth1">图像</div>
        <div class="left-hander-ringth1">图案</div>
        <div class="left-hander-ringth1">图表</div>
      </div>
    </div>
    <div class="left-nav">
      <div class="left-nav-left">
        <img src="@/assets/img/组 3030@2x(2).png" alt="" style="width: 30px; height: 28px" />
        <span style="color: #92d5bc90; font-size: 12px; margin-left: 10px">地块动态1 台湾1号</span>
      </div>
      <div class="left-nav-ringth">
        <div class="left-hander-ringth1">图像</div>
        <div class="left-hander-ringth1">图案</div>
        <div class="left-hander-ringth1">图表</div>
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
<style lang="scss">
.leftFoot {
  width: 100%;
}
.lines {
  width: 380px;
  margin: auto;
  height: 2px;
  background: linear-gradient(to right, #405453, #8ca7a5, #405453);
}
.left-hander {
  padding: 10px 10px;
  box-sizing: border-box;
  .left-hander-left {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .name {
      margin-left: 10px;
      color: #a1b6b5;
      font-weight: 700;
    }
  }
}
.left-nav {
  padding: 10px 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  .left-nav-left {
    display: flex;
    align-items: center;
  }
  .left-nav-ringth {
    margin-left: 10px;
    width: 180px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.left-hander-ringth {
  width: 50px;
  height: 20px;
  border: 2px solid #6f918590;
  box-shadow: 0 0 5px #92d5bc4f;
  border-radius: 20px;
  background-color: #40545344;
  text-align: center;
  line-height: 20px;
  color: #d7f1e7b0;
  font-size: 12px;
  font-weight: 600;
  box-shadow: -20px -2px 15px -13px #58756b2b inset;
}
.left-hander-ringth1 {
  width: 50px;
  height: 20px;
  border: 2px solid #6f918590;
  box-shadow: 0 0 5px #92d5bc4f;
  border-radius: 10px;
  background-color: #40545344;
  text-align: center;
  line-height: 20px;
  color: #d7f1e7b0;
  font-size: 10px;
  font-weight: 600;
  box-shadow: -20px -2px 15px -13px #415b5225 inset;
}
</style>
