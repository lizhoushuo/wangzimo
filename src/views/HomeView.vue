<template>
  <dv-full-screen-container class="home">
    <div class="title"><img src="../assets/img/标题@2x.png" alt="" /></div>

    <div class="bottom">
      <div class="left">
        <div class="box"><leftTop></leftTop></div>
        <div class="box"><leftNav></leftNav></div>
        <div class="box"><leftFoot></leftFoot></div>
      </div>
      <div class="centre">
        <div class="centre-t">
          <div v-for="item in list" :key="item.id">
            <img :src="getImageUrl(item.imgurl)" alt="" @click="prompt(item.id)" />
            <p>{{ item.name }}</p>
            <p>{{ item.address }}</p>

            <div class="prompt" v-if="item.flag">
              <p>{{ item.name }}&ensp;{{ item.address }}</p>
              <img src="../assets/img/蒙版组 3.png" alt="" />
              <img src="../assets/img/蒙版组 6.png" alt="" />
              <span>扫码看详情</span>
            </div>
          </div>
        </div>
        <div class="centre-b">
          <div class="box"><centerLeft></centerLeft></div>
          <div class="box">收成详情</div>
        </div>
      </div>
      <div class="right">
        <div class="box"><RightTop></RightTop></div>
        <div class="box"><RightTopTwo></RightTopTwo></div>
        <div class="box"><RightTopThree></RightTopThree></div>
        <div class="box"><RightTopFour></RightTopFour></div>
      </div>
    </div>
  </dv-full-screen-container>
</template>

<script>
//右侧  子墨
import RightTop from "../components/wangzimo/RightTop.vue"
import RightTopTwo from "../components/wangzimo/RightTopTwo.vue"
import RightTopThree from "../components/wangzimo/RightTopThree.vue"
import RightTopFour from "../components/wangzimo/RightTopFour.vue"

//左侧  孙晨
import leftTop from "../components/sunchen/leftTop.vue"
import leftNav from "../components/sunchen/leftNav.vue"
import leftFoot from "../components/sunchen/LeftFoot.vue"

//中间  韩昊天
import centerLeft from "../components/hanhaotian/centerLeft.vue"

export default {
  components: {
    RightTop,
    RightTopTwo,
    RightTopThree,
    RightTopFour,

    leftTop,
    leftNav,
    leftFoot,

    centerLeft
  },
  data() {
    return {
      list: [
        {
          name: "科研地块1",
          address: "(京都一号)",
          imgurl: "组 230.png",
          id: 1,
          flag: false
        },
        {
          name: "科研地块2",
          address: "(京都二号)",
          imgurl: "组 230.png",
          id: 2,
          flag: false
        },
        {
          name: "科研地块3",
          address: "(京都三号)",
          imgurl: "组 230.png",
          id: 3,
          flag: false
        },
        {
          name: "科研地块4",
          address: "(京都四号)",
          imgurl: "组 230.png",
          id: 4,
          flag: false
        }
      ]
    }
  },
  methods: {
    getImageUrl(imageName) {
      // 动态引入图片
      return require(`@/assets/img/${imageName}`)
    },
    // item.imgurl = '组 230(1).png'
    prompt(id) {
      this.list.forEach((item) => {
        if (item.id == id) {
          item.imgurl = item.imgurl == "组 230(1).png" ? "组 230.png" : "组 230(1).png"
          item.flag = !item.flag
        } else {
          item.imgurl = "组 230.png"
          item.flag = false
        }
      })
    }
    // aaa() {
    //   this.list.forEach((item) => {
    //     item.flag = false
    //   })
    // }
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  background-image: url("../assets/img/bg(1).png");
  background-size: 100% 100%;
  background-color: #081512;
  overflow: hidden;
  .title {
    width: 100%;
    height: 150px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .bottom {
    width: 100%;
    height: 760px;
    margin-top: -70px;
    padding: 0 20px;
    box-sizing: border-box;
    display: flex;
    .box {
      padding: 0 10px;
      box-sizing: border-box;
      color: #fff;
      background-color: #0c1d17b2;
      border-radius: 10px;
      border: 3px #37705e solid;
    }
    .left {
      width: 25%;
      display: flex;
      flex-wrap: wrap;
      align-content: space-between;
      .box {
        width: 100%;
      }
      .box:nth-of-type(1) {
        height: 30%;
      }
      .box:nth-of-type(2) {
        height: 45%;
      }
      .box:nth-of-type(3) {
        height: 23%;
      }
    }
    .centre {
      width: 50%;
      display: flex;
      align-content: space-between;
      padding: 0 10px;
      box-sizing: border-box;
      flex-wrap: wrap;

      .centre-t {
        width: 100%;
        height: 75%;
        position: relative;

        > div {
          position: absolute;
          > img {
            width: 70px;
            height: 50px;
          }
          > p {
            color: #acead5;
            font-size: 12px;
            text-align: center;
          }
          .prompt {
            position: absolute;
            width: 300px;
            height: 200px;
            background-color: #0b1c14b9;
            z-index: 10;
            border-radius: 10px;
            border: 3px #37705e solid;
            p {
              color: #91a449;
              font-size: 20px;
              padding: 10px;
              box-sizing: border-box;
              border-bottom: 1px #37705e solid;
              font-style: oblique;
            }
            img {
              width: 35%;
              height: 50%;
              margin-left: 10%;
              margin-top: 10px;
            }
            span {
              color: #849a8e;
              font-size: 14px;
              display: inline-block;
              width: 100%;
              text-align: center;
              margin-top: 10px;
            }
          }
        }
        > div:nth-of-type(1) {
          left: 170px;
          top: 70px;
          .prompt {
            top: 85px;
            left: -180px;
          }
        }
        > div:nth-of-type(2) {
          left: 275px;
          top: 170px;
          .prompt {
            top: -130px;
            left: 80px;
          }
        }
        > div:nth-of-type(3) {
          left: 340px;
          top: 370px;
          .prompt {
            top: -65px;
            left: -318px;
          }
        }
        > div:nth-of-type(4) {
          left: 465px;
          top: 350px;
          .prompt {
            top: -200px;
            left: -76px;
          }
        }
      }
      .centre-b {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 25%;
        .box:nth-of-type(1) {
          width: 59%;
        }
        .box:nth-of-type(2) {
          width: 39%;
        }
      }
    }
    .right {
      width: 25%;
      display: flex;
      flex-wrap: wrap;
      align-content: space-between;
      .box {
        width: 100%;
      }
      .box:nth-of-type(1) {
        height: 15%;
      }
      .box:nth-of-type(2) {
        height: 31%;
      }
      .box:nth-of-type(3) {
        height: 25%;
      }
      .box:nth-of-type(4) {
        height: 25%;
      }
    }
  }
}
</style>
