<template>
  <div class="leftTop">
    <dv-border-box-8 :color="['#768a89', '#299c62']" backgroundColor="#081d189c">
      <div class="top-1">
        <img src="../../assets/img/容器 47.png" alt="" style="width: 15px; height: 15px" />
        <span>百香果基地概要</span>
      </div>
      <div class="top-2">
        <div class="top-nav">
          <div class="top-2-left">
            <img src="../../assets/img/组 3030@2x.png" alt="" style="width: 40px; height: 40px" />
          </div>
          <div class="top-2-right">
            <div style="color: #8ca7a5; font-size: 12px; font-weight: 800">种植面积</div>
            <div style="color: #d6c875; font-weight: 400" class="name">729 m²</div>
          </div>
        </div>
        <div class="top-nav">
          <div class="top-2-left">
            <img src="../../assets/img/组 3030@2x(1).png" alt="" style="width: 40px; height: 40px" />
          </div>
          <div class="top-2-right">
            <div style="color: #8ca7a5; font-size: 12px; font-weight: 800">种植人数</div>
            <div style="color: #768a89; font-weight: 400" class="name">52 <span class="top-2-right-foot">人</span></div>
          </div>
        </div>

        <div class="top-nav">
          <div class="top-2-left">
            <img src="../../assets/img/组 3030@2x(2).png" alt="" style="width: 40px; height: 40px" />
          </div>
          <div class="top-2-right">
            <div style="color: #8ca7a5; font-size: 12px; font-weight: 800">种植数量</div>
            <div style="color: #768a89; font-weight: 400" class="name">36 <span class="top-2-right-foot">个</span></div>
          </div>
        </div>
      </div>

      <div class="line"></div>
      <div class="top-3">
        <div class="leftTop-left">
          <div style="text-align: center">
            <div style="font-size: 14px; color: #000; font-weight: 800; color: #8ca7a5">当前设备</div>
            <div style="color: #d6c875; font-weight: 400;margin-top" class="name">729</div>
          </div>
          <div>
            <img src="../../assets/img/Group 625@3x.png" alt="" class="imgad" />
          </div>
        </div>
        <div class="leftTop-right">
          <div class="leftTop-right-valit">
            <div class="a1">行情测报灯</div>
            <div class="a2">1</div>
          </div>
          <div class="leftTop-right-valit">
            <div class="a1">行情测报灯</div>
            <div class="a2">2</div>
          </div>
          <div class="leftTop-right-valit">
            <div class="a1">行情测报灯</div>
            <div class="a2">7</div>
          </div>
          <div class="leftTop-right-valit">
            <div class="a1">行情测报灯</div>
            <div class="a2">8</div>
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
<style lang="scss">
.leftTop {
  width: 400px;
}
.top-1 {
  margin-left: 4px;
  width: 394px;
  height: 40px;
  border-bottom: 2px solid #8ca7a5;
  display: flex;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
}
.top-1 span {
  margin-left: 10px;
  color: #a1b6b5;
  font-weight: 700;
  font-style: italic;
}
.top-2 {
  display: flex;
}
.top-nav {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  padding: 0 15px;
  box-sizing: border-box;
  align-items: center;
}
.name {
  font-style: italic;
}
.top-2-right-foot {
  font-size: 12px;
}
.line {
  width: 300px;
  margin: auto;
  height: 2px;
  background: linear-gradient(to right, #405453, #8ca7a5, #405453);
}
.top-3 {
  width: 395px;
  padding: 20px 40px;
  display: flex;
  box-sizing: border-box;
}
.imgad {
  width: 125px;
  height: 90px;
}
.leftTop-right {
  width: 200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.leftTop-right-valit {
  text-align: center;
}
.a1 {
  font-size: 14px;
  font-weight: 800;
  color: #8ca7a5;
}
.a2 {
  font-style: italic;
  color: #8ca7a5;
}
</style>
./LeftTop.vue
