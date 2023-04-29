<template>
  <div>
    <h1>看板</h1>
    <el-button @click="addFn" type="primary"> 添加数据</el-button>
    <vue-seamless-scroll :data="List" class="seamless-warp" :class-option="classOption">
      <ul>
        <li class="Carousel_li" v-for="(item, index) in List"
          :class="[{ 'pro_1': item.title == '1' }, { 'pro_2': item.title == '2' }, { 'pro_3': item.title == '3' }]" :key="index">
          <span class="title" v-if="item.title == '1'">已完成</span>
          <span class="title" v-if="item.title == '2'">进行中</span>
          <span class="title" v-if="item.title == '3'">未开始</span>


          <span :title="item.times"> {{ item.times }}</span>
          <span style="padding:0 5px;">:</span>
          <span class="date" :title="item.content">{{ item.content }}</span>
        </li>
      </ul>
    </vue-seamless-scroll>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '无缝轮播-注意只能用span',
      List:[{
        title: '1',
        times: '11111111111111111111',
        content: '1111111111'
      },{
        title: '2',
        times: '222222222222',
        content: '22'
      },{
        title: '3',
        times: '333333',
        content: '43333333'
      },{
        title: '1',
        times: '11111111111111111111',
        content: '1111111111'
      },{
        title: '2',
        times: '222222222222',
        content: '22'
      },{
        title: '3',
        times: '333333',
        content: '43333333'
      },{
        title: '1',
        times: '11111111111111111111',
        content: '1111111111'
      },{
        title: '2',
        times: '222222222222',
        content: '22'
      },{
        title: '3',
        times: '333333',
        content: '43333333'
      }]
    }
  },
  computed: {
    classOption() {
      return {
        step: 1, // 数值越大速度滚动越快
        // limitMoveNum: 10, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        // openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000, // 单步运动停止的时间(默认值1000ms)
      };
    },
  },
  methods: {

    addFn() {
      this.List.push({
        title: '1',
        times: '哈哈哈',
        content: '嘿嘿嘿'
      })
    }
  }

}
</script>

<style lang="scss" scoped>
.seamless-warp {
  width: 50vh;
  height: 30vh;
  overflow: hidden;
  border: 1px solid #3CFF45;
}

.Carousel_li {
  display: flex;
  padding-right: .5%;
  width: 100%;
  height: 2.447916666666667vw;
  line-height: 2.447916666666667vw;
  background-size: 100% !important;
  color: #BDF3F6;
  margin-bottom: 0.5208333333333334vw;
  font-size: 0.7291666666666667vw;

  .title {
    padding: 0 1% 0 4%;
    width: 21%;

  }

  .ovr_h {
    width: 51%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

/*未开始*/
.pro_1 {
  // background: url("../../assets/image/other/未开始.png") no-repeat center;

  .title {
    color: #F89D2E;
  }
}

/*进行中*/
.pro_2 {
  // background: url("../../assets/image/other/进行中.png") no-repeat center;

  .title {
    color: #00FCD8;
  }
}

/*已完成*/
.pro_3 {
  // background: url("../../assets/image/other/已完成.png") no-repeat center;

  .title {
    color: #3CFF45;
  }
}</style>