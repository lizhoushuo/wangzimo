<template>
  <div class="leftNav">
    <!-- <dv-border-box-8 :color="['#768a89', '#299c62']" backgroundColor="#081d189c"> -->
    <div class="leftNav-hander">
      <img src="@/assets/img/容器 47.png" alt="" style="width: 15px; height: 15px" />
      <span>天气预报</span>
    </div>
    <div class="lines"></div>
    <div class="leftNav-hander-value">
      <div><span class="data">周一</span>03/11</div>
      <div><img src="@/assets/img/83@2x.png" alt="" class="image" /><span style="color: #ddcc6a">晴</span></div>
      <div>
        <span>18℃</span>
        <div class="wendu"></div>
        24℃
      </div>
    </div>
    <div class="leftNav-hander-value">
      <div><span class="data">周二</span>03/12</div>
      <div><img src="@/assets/img/83@2x.png" alt="" class="image" /><span style="color: #ddcc6a">晴</span></div>
      <div>
        <span>12℃</span>
        <div class="wendu2"></div>
        30℃
      </div>
    </div>
    <div class="leftNav-hander-value">
      <div><span class="data">周三</span>03/13</div>
      <div><img src="@/assets/img/83@2x.png" alt="" class="image" /><span style="color: #ddcc6a">晴</span></div>
      <div>
        <span>16℃</span>
        <div class="wendu3"></div>
        32℃
      </div>
    </div>
    <div class="leftNav-hander-value">
      <div><span class="data">周四</span>03/14</div>
      <div><img src="@/assets/img/83@2x.png" alt="" class="image" /><span style="color: #ddcc6a">晴</span></div>
      <div>
        <span>16℃</span>
        <div class="wendu4"></div>
        32℃
      </div>
    </div>
    <div class="leftNav-hander-value">
      <div><span class="data">周五</span>03/15</div>
      <div><img src="@/assets/img/83@2x.png" alt="" class="image" /><span style="color: #ddcc6a">晴</span></div>
      <div>
        <span>15℃</span>
        <div class="wendu5"></div>
        26℃
      </div>
    </div>
    <div class="leftNav-hander-value">
      <div><span class="data">周六</span>03/16</div>
      <div><img src="@/assets/img/83@2x.png" alt="" class="image" /><span style="color: #ddcc6a">晴</span></div>
      <div>
        <span>13℃</span>
        <div class="wendu6"></div>
        18℃
      </div>
    </div>
    <div class="leftNav-hander-value">
      <div><span class="data">周七</span>03/17</div>
      <div><img src="@/assets/img/83@2x.png" alt="" class="image" /><span style="color: #ddcc6a">晴</span></div>
      <div>
        <span>16℃</span>
        <div class="wendu"></div>
        20℃
      </div>
    </div>
    <!-- </dv-border-box-8> -->
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.leftNav {
  width: 100%;
  height: 100%;
}
.leftNav-hander {
  height: 50px;
  padding: 10px 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}
.leftNav-hander span {
  margin-left: 10px;
  color: #9fb4ae;
  font-weight: 700;
}
.lines {
  width: 380px;
  margin: auto;
  height: 2px;
  background: linear-gradient(to right, #405453, #8ca7a5, #405453);
}
.leftNav-hander-value {
  height: 40px;
  display: flex;
  justify-content: space-around;
  font-weight: 700;
}
.wendu {
  width: 70px;
  height: 7px;
  border-radius: 20px;
  border: 1px solid #ddcc6a;
  margin: 0 5px;
  background: radial-gradient(circle at center, rgb(210, 199, 126) 20%, rgb(210, 199, 126) 30%, transparent 20%);
}
.leftNav-hander-value :nth-of-type(1) {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #8ca7a5;
}
.leftNav-hander-value :nth-of-type(2) {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #8ca7a5;
}
.leftNav-hander-value :nth-of-type(3) {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #8ca7a5;
}
.data {
  margin-right: 10px;
}
.image {
  width: 25px;
  height: 25px;
  margin-right: 10px;
}
.wendu2 {
  width: 70px;
  height: 7px;
  border-radius: 20px;
  border: 1px solid #ddcc6a;
  margin: 0 5px;
  background: radial-gradient(circle at center, rgb(210, 199, 126) 10%, rgb(210, 199, 126) 60%, transparent 10%);
}
.wendu3 {
  width: 70px;
  height: 7px;
  border-radius: 20px;
  border: 1px solid #ddcc6a;
  margin: 0 5px;
  background: radial-gradient(circle at center, rgb(210, 199, 126) 40%, rgb(210, 199, 126) 50%, transparent 10%);
}
.wendu4 {
  width: 70px;
  height: 7px;
  border-radius: 20px;
  border: 1px solid #ddcc6a;
  margin: 0 5px;
  background: radial-gradient(circle at center, rgb(210, 199, 126) 30%, rgb(210, 199, 126) 60%, transparent 10%);
}
.wendu5 {
  width: 70px;
  height: 7px;
  border-radius: 20px;
  border: 1px solid #ddcc6a;
  margin: 0 5px;
  background: radial-gradient(circle at center, rgb(210, 199, 126) 20%, rgb(210, 199, 126) 40%, transparent 10%);
}
.wendu6 {
  width: 70px;
  height: 7px;
  border-radius: 20px;
  border: 1px solid #ddcc6a;
  margin: 0 5px;
  background: radial-gradient(circle at center, rgb(210, 199, 126) 10%, rgb(210, 199, 126) 60%, transparent 10%);
}
</style>
