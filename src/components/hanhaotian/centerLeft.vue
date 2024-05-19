<template>
  <div class="centerLeft">
    <div class="title">
      <img src="@/assets/img/容器 47.png" alt="" />
      土壤肥力分析
    </div>
    <div class="bottom">
      <div class="bottom-l">
        <p v-for="item in 3" :style="{ color: config.color[item - 1] }" :key="config.color[item - 1]">
          {{ config.data[item - 1].name }} {{ config.data[item - 1].value }}%
        </p>
      </div>
      <dv-active-ring-chart class="chart" :config="config" />
      <div class="bottom-r">
        <p v-for="item in 3" :style="{ color: config.color[item + 2] }" :key="config.color[item + 2]">
          {{ config.data[item + 2].name }} {{ config.data[item + 2].value }}%
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      config: {
        data: [
          { name: "有机物1", value: 14 },
          { name: "有机物2", value: 25 },
          { name: "有机物3", value: 11 },
          { name: "有机物4", value: 25 },
          { name: "有机物5", value: 13 },
          { name: "有机物6", value: 12 }
        ],
        color: ["#e072e5", "#dd965d", "#71e9de", "#d7d588", "#5f96cc", "#69d4b3"],
        lineWidth: 8,
        digitalFlopStyle: {
          fontSize: 20,
          fill: "#fff"
        }
      }
    }
  }
}
</script>

<style lang="scss" scope>
.centerLeft {
  width: 100%;
  height: 100%;
  .title {
    height: 20%;
    display: flex;
    align-items: center;
    border-bottom: 1px #2c4b43 solid;
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
  .bottom {
    width: 100%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    box-sizing: border-box;
    position: relative;
    > div {
      width: 25%;
      height: 70%;
      display: flex;
      align-content: space-between;
      flex-wrap: wrap;
      p {
        width: 100%;
      }
    }

    .chart {
      position: absolute;
      width: 60%;
      height: 240px;
      left: 20%;
    }
  }
}
</style>
