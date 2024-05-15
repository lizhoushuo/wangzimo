<template>
  <div class="boss">
    <dv-border-box-8 :color="['#16633d', '#16633d']">
      <header>
        <div>
          <img src="../../assets/icon/组 3038.png" alt="" />
          <p>土壤检测专家</p>
          <span>51</span>
        </div>
        <div>
          <img src="../../assets/icon/组 3038(1).png" alt="" />
          <p>XX专家</p>
          <span>66</span>
        </div>
        <div>
          <img src="../../assets/icon/组 3038(2).png" alt="" />
          <p>杀虫防治专家</p>
          <span>96</span>
        </div>
      </header>
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
  width: 240px;
  height: 55px;
}
header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 55px;
  div {
    text-align: center;
    position: relative;
    p {
      font-size: 8px;
      color: #fff;
    }
    span {
      position: absolute;
      top: 9px;
      right: 10px;
      font-size: 10px;
      color: #1f5a43;
    }
  }
}
</style>
