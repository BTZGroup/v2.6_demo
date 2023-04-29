<template>
  <div class="ptz">
    <div class="outer-ring">
      <i class="caret-up el-icon-caret-top" @click="ptzController(0)"></i>
      <i class="caret-down el-icon-caret-bottom" @click="ptzController(1)"></i>
      <i class="caret-left el-icon-caret-left" @click="ptzController(2)"></i>
      <i class="caret-right el-icon-caret-right" @click="ptzController(3)"></i>
      <div class="inner-ring">
        <i class="plus el-icon-plus" @click="ptzController(8)"></i>
        <div class="line"></div>
        <i class="minus el-icon-minus" @click="ptzController(9)"></i>
      </div>
      <!-- 左上 -->
      <!-- <a-icon type="caret-left" class="ob-caret-left" @click="ptzController(4)" /> -->
      <!-- 右上 -->
      <!-- <a-icon type="caret-up" class="ob-caret-up" @click="ptzController(6)"  /> -->
      <!-- 右下 -->
      <!-- <a-icon type="caret-right" class="ob-caret-right" @click="ptzController(7)" /> -->
      <!-- 左下 -->
      <!-- <a-icon type="caret-down" class="ob-caret-down" @click="ptzController(5)" /> -->
    </div>
  </div>
</template>
 
<script>
// import { postAction } from '@/api/manage'
export default {
  props: {
    channelNo: Number,
    deviceSerial: String
  },
  data() {
    return {}
  },
  methods: {
    // 云台控制
    ptzController(conno) {
      let data = {
        channelNo: this.channelNo,
        deviceSerial: this.deviceSerial,
        direction: conno,
        speed: 1
      }
      // postAction('/CCD/stopDevice', data).then(res => {
      //   if (res.code == '200') {
      //     postAction('/CCD/startDevice', data).then(res => {
      //       if (res.code == '200') {
      //         postAction('/CCD/stopDevice', data).then(res => {

      //         })
      //       }
      //     })
      //   }
      // })
    }
  },
}
</script>
 
<style lang="scss" scoped>
.ptz {
  .outer-ring {
    position: relative;
    width: 150px;
    height: 150px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: inset 0 0 25px #e8e8e8, 0 1px 0 #c3c3c3, 0 2px 0 #c9c9c9, 0 2px 3px #333;

    i {
      font-size: 20px;
      cursor: pointer;

      &:hover {
        color: #00B176;
      }
    }

    .caret-up {
      position: absolute;
      top: 6px;
      left: 75px;
      margin-left: -10px;
    }

    .caret-down {
      position: absolute;
      bottom: 6px;
      left: 75px;
      margin-left: -10px;
    }

    .caret-left {
      position: absolute;
      left: 6px;
      top: 75px;
      margin-top: -10px;
    }

    .caret-right {
      position: absolute;
      right: 6px;
      top: 75px;
      margin-top: -10px;
    }

    .ob-caret-left {
      transform: rotate(45deg);
      position: absolute;
      top: 24px;
      left: 24px;
    }

    .ob-caret-up {
      transform: rotate(45deg);
      position: absolute;
      top: 24px;
      right: 24px;
    }

    .ob-caret-right {
      transform: rotate(45deg);
      position: absolute;
      bottom: 24px;
      right: 24px;
    }

    .ob-caret-down {
      transform: rotate(45deg);
      position: absolute;
      bottom: 24px;
      left: 24px;
    }

    .inner-ring {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background-color: #fff;
      border: 1px solid #ddd;

      .plus {
        position: absolute;
        top: 10px;
        left: 40px;
        margin-left: -10px;
      }

      .line {
        height: 1px;
        width: 100%;
        background-color: #ddd;
        position: absolute;
        top: 39px;
        left: 0;
      }

      .minus {
        position: absolute;
        bottom: 10px;
        left: 40px;
        margin-left: -10px;
      }
    }
  }
}</style>