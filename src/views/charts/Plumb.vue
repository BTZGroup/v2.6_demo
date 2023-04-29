<template>
  <div class="buildConf_1">
    <div id="wrapper">
      <div class="line-wrap-column">
        <span class="tit-column">功率</span>
        <span class="tit-column">输入</span>
        <span class="tit-column">输出</span>
        <span class="tit-column">通道</span>
        <span class="tit-column">增益</span>
        <span class="tit-column">功率</span>
      </div>
      <div class="wrapper-body">
        <div class="line-wrap" style="margin-left: 70px">
          <div v-for="item in leftList" :key="item.ide" class="line-wrap-content">
            <!-- 功率 -->
            <el-input-number class="mr-5" size="mini" v-model="item.value" @change="handleChange" :min="1" :max="10"
              label="描述文字"></el-input-number>
            <div class="state-item" :id="item.ide">Left {{ item.txt }}</div>
          </div>
        </div>
        <div class="line-wrap">
          <div v-for="(item, index) in rightList" :key="item.ide" class="line-wrap-content">
            <div class="state-item" :id="item.ide">Right {{ item.txt }}</div>
            <!-- 通道 -->
            <el-input-number class="mr-5" size="mini" v-model="item.tar" @change="handleChange" :min="1" :max="10"
              label="描述文字"></el-input-number>
            <!-- 增益 -->
            <el-input-number class="mr-5" size="mini" v-model="item.benefit" @change="handleChange" :min="1" :max="10"
              label="描述文字"></el-input-number>
            <!-- 功率 -->
            <el-input-number size="mini" v-model="item.value" @change="handleChange" :min="1" :max="10"
              label="描述文字"></el-input-number>
            <i class="el-icon-check" title="修改本行数据"
              style="font-size: 18px; color: blue; margintop: 3px; margin-left: 3px; cursor: pointer "
              @click.stop="commit(index)"></i>
            <i class="el-icon-check" title="修改本行数据"
              style="font-size: 18px; color: blue; margintop: 3px; margin-left: 3px; cursor: pointer "
              @click.stop="deleteFn(index)"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import service from "@/utils/service.js";
import { jsPlumb } from "jsplumb";
export default {
  props: ["type", "drawVisable"],
  components: {},

  data() {
    return {
      searchParams: {},
      leftList: [
        { id: 0, txt: "0", ide: "left_0_ci" },
        { id: 1, txt: "1", ide: "left_1_ci" },
        { id: 2, txt: "2", ide: "left_2_ci" },
        { id: 3, txt: "3", ide: "left_3_ci" },
        { id: 4, txt: "4", ide: "left_4_ci" },
        { id: 5, txt: "5", ide: "left_5_ci" },
        { id: 6, txt: "6", ide: "left_6_ci" },
        { id: 7, txt: "7", ide: "left_7_ci" },
        { id: 8, txt: "8", ide: "left_8_ci" },
        { id: 9, txt: "9", ide: "left_9_ci" },
        { id: 10, txt: "10", ide: "left_10_ci" },
        { id: 11, txt: "11", ide: "left_11_ci" },
        { id: 12, txt: "12", ide: "left_12_ci" },
        { id: 13, txt: "13", ide: "left_13_ci" },
        { id: 14, txt: "14", ide: "left_14_ci" },
        { id: 15, txt: "15", ide: "left_15_ci" },
      ],
      rightList: [
        { id: 0, txt: "0", ide: "right_0_ci" },
        { id: 1, txt: "1", ide: "right_1_ci" },
        { id: 2, txt: "2", ide: "right_2_ci" },
        { id: 3, txt: "3", ide: "right_3_ci" },
        { id: 4, txt: "4", ide: "right_4_ci" },
        { id: 5, txt: "5", ide: "right_5_ci" },
        { id: 6, txt: "6", ide: "right_6_ci" },
        { id: 7, txt: "7", ide: "right_7_ci" },
        { id: 8, txt: "8", ide: "right_8_ci" },
        { id: 9, txt: "9", ide: "right_9_ci" },
        { id: 10, txt: "10", ide: "right_10_ci" },
        { id: 11, txt: "11", ide: "right_11_ci" },
        { id: 12, txt: "12", ide: "right_12_ci" },
        { id: 13, txt: "13", ide: "right_13_ci" },
        { id: 14, txt: "14", ide: "right_14_ci" },
        { id: 15, txt: "15", ide: "right_15_ci" },
        { id: 16, txt: "16", ide: "right_16_ci" },
        { id: 17, txt: "17", ide: "right_17_ci" },
        { id: 18, txt: "18", ide: "right_18_ci" },
        { id: 19, txt: "19", ide: "right_19_ci" },
        { id: 20, txt: "20", ide: "right_20_ci" },
        { id: 21, txt: "21", ide: "right_21_ci" },
        { id: 22, txt: "22", ide: "right_22_ci" },
        { id: 23, txt: "23", ide: "right_23_ci" },
      ],
      plumbIns: null,
      defaultConfig: {
        // 对应上述基本概念
        anchor: ["Left", "Right"],
        connector: ["StateMachine"],
        endpoint: "Blank",
        // 添加样式
        paintStyle: { stroke: "#909399", strokeWidth: 2 }, // connector
        // endpointStyle: { fill: 'lightgray', outlineStroke: 'darkgray', outlineWidth: 2 } // endpoint
        // 添加 overlay，如箭头
        overlays: [["Arrow", { width: 8, length: 8, location: 1 }]], // overlay
      },
    };
  },
  mounted() {
    var _self = this;
    _self.plumbIns = jsPlumb.getInstance({
      Container: 'content'
    });

    console.log("GGGGGGGGGGGGGGGGGGGGG", _self.plumbIns);
    let relations = [
      ["left_0_ci", "right_0_ci"],
      ["left_1_ci", "right_7_ci"],
      ["left_4_ci", "right_4_ci"],
      ["left_7_ci", "right_1_ci"],
    ];

    _self.plumbIns.ready(function () {
      for (let item of relations) {
        _self.plumbIns.connect(
          {
            source: item[0],
            target: item[1],
          },
          _self.defaultConfig
        );
      }
    });
  },
  methods: {
    handleChange(data, e, a) {
      // 目前只是修改通道，后面扩展其余参数
      console.log("这是点击的data", data, e, a);
    },

    deleteFn() {
      // 获取端口到端口的连线信息
      const nodeConn = this.plumbIns.getConnections({
        //only one of source and target is needed, better if both setted
        uuids: [
          'left_1_ci',
          'right_0_ci'
        ]
      });
      console.log("nodeConnnodeConnnodeConn", nodeConn)
      // 删除最新的连线
      this.plumbIns.deleteConnection(nodeConn[nodeConn.length - 1]);
    },
    commit(index) {
      var _self = this;
      console.log("提交本行数据", index, this.rightList[index]);
      if (this.rightList[index].tar !== 0) {
        this.plumbIns.connect(
          {
            source: `left_${this.rightList[index].tar}_ci`,
            target: `right_${index}_ci`,
          },
          _self.defaultConfig
        );
      } else {
        const nodeConn = this.plumbIns.getConnections({
          uuids: [
            'left_1_ci',
            'right_0_ci'
          ]
        });
        console.log("dasssssssssssss-targetId", nodeConn)

        let list = nodeConn.filter(v => v.targetId !== `right_${index}_ci`)
        this.plumbIns.deleteConnection(list);
      }
    },
    // 每次切换分页后判断，如果最终数组有内容，则加上复显状态
    getList() {
      console.log("这是获取到的配置");
    },
    saveFn() { },
  },
};
</script>

<style lang="scss" scoped>
.buildConf_1 {
  width: 100%;
  height: 70px;
  display: flex;

  .line-wrap-column {
    display: flex;
    padding-left: 70px;
    margin-bottom: 8px;

    .tit-column {
      font-size: 18px;
      font-weight: 700;
      width: 130px;
      text-align: center;
    }

    :nth-child(1) {}

    :nth-child(2) {
      width: 153px;
      margin-right: 60px;
    }

    :nth-child(3) {
      width: 155px;
      margin-right: 60px;
    }

    :nth-child(4) {}

    :nth-child(5) {}

    :nth-child(6) {}
  }
}

#wrapper {
  display: flex;
  flex-direction: column;
  height: 650px;
  overflow: scroll;
  position: relative;
  background: radial-gradient(ellipse at top left,
      rgba(255, 255, 255, 1) 40%,
      rgba(229, 229, 229, 0.9) 100%);
  padding: 60px 80px;
  width: 100vw;
}

.wrapper-body {
  display: flex;
  align-items: center;
}

.state-item {
  width: 150px;
  height: 28px;
  line-height: 28px;
  color: #606266;
  // background: #f6f6f6;
  
  @include bg_color("main_bg");
  border: 2px solid rgba(0, 0, 0, 0.05);
  text-align: center;
  font-family: sans-serif;
  border-radius: 4px;
  margin-bottom: 5px;
  margin-right: 60px;
}

.line-wrap-content {
  display: flex;
}

.line-wrap {
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
}

.mr-5 {
  margin-right: 5px;
}
</style>