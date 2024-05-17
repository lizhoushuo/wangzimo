<template>
  <div class="boss">
    <header>
      <div>
        <img src="@/assets/img/组 3038.png" alt="" />
        <p>土壤检测专家</p>
        <span>51</span>
      </div>
      <div>
        <img src="@/assets/img/组 3038(1).png" alt="" />
        <p>XX专家</p>
        <span>66</span>
      </div>
      <div>
        <img src="@/assets/img/组 3038(2).png" alt="" />
        <p>杀虫防治专家</p>
        <span>96</span>
      </div>
    </header>
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
header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  div {
    text-align: center;
    position: relative;
    img {
      width: 85px;
      height: 42px;
    }
    p {
      margin-top: 10px;
      font-size: 10px;
      color: #96a7a1;
    }
    span {
      position: absolute;
      top: 16px;
      right: 14px;
      font-size: 13px;
      color: #1f5a43;
    }
  }
}
</style>
