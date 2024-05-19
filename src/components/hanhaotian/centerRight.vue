<template>
  <div class="centerright">
    <div class="title">
      <div class="title-l">
        <img src="@/assets/img/容器 47.png" alt="" />
        收成详情
      </div>
      <div class="title-r">
        <div :style="flag ? 'background-color: #4d551f; ' : ''" @click="flag = true">嘿嘿</div>
        <div :style="flag ? '' : 'background-color: #4d551f; '" @click="flag = false">哈哈</div>
      </div>
    </div>

    <div class="content">
      <div class="content-a">
        <div>
          <p>果实</p>
          <p>百香果</p>
        </div>
        <div>
          <p>预计收成</p>
          <p>491斤</p>
        </div>
        <div>
          <p>预计收益</p>
          <p>569198元</p>
        </div>
      </div>
      <section></section>
      <div class="content-a">
        <div>
          <p>加工后</p>
          <p>百香果酱</p>
        </div>
        <div>
          <p>预计收成</p>
          <p>200斤</p>
        </div>
        <div>
          <p>哈哈</p>
          <p>291斤</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: true
    }
  }
}
</script>

<style lang="scss" scope>
.centerright {
  width: 100%;
  height: 100%;
  .title {
    width: 100%;
    height: 20%;
    display: flex;
    border-bottom: 1px #2c4b43 solid;
    justify-content: space-between;
    align-items: center;

    .title-l {
      display: flex;
      align-items: center;
      color: #9fb4ae;
      font-style: italic;
      padding: 0 10px;
      box-sizing: border-box;
      img {
        width: 15px;
        height: 15px;
        vertical-align: middle;
        margin-right: 10px;
      }
    }
    .title-r {
      width: 40%;
      height: 70%;
      // background-color: #fff;
      border-radius: 20px;
      display: flex;
      overflow: hidden;
      border: 1px #41544b solid;
      div {
        width: 50%;
        text-align: center;
        color: #9bb6af;
        cursor: pointer;
      }
    }
  }

  .content {
    width: 100%;
    height: 80%;
    display: flex;
    align-content: space-between;
    flex-wrap: wrap;
    .content-a {
      width: 100%;
      height: 49%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      p:nth-of-type(1) {
        color: #9fb4ae;
        font-size: 12px;
      }
      p:nth-of-type(2) {
        color: #4d551f;
        margin-top: 5px;
      }
    }
    section {
      height: 1px;
      width: 70%;
      background: linear-gradient(to right, rgba(64, 84, 83, 0.1450980392), #3e866a, rgba(64, 84, 83, 0.2235294118));
      margin: auto;
    }
  }
}
</style>
