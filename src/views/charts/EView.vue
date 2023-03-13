<template>
    <div id="eViewId" style="height:80vh;width:100%" ref='eView'></div>
  </template>
   
  <script>
  // Echarts5 导入方式
  import * as echarts from 'echarts'
   
  export default {
    mounted() {
      this.init()
    },
    methods: {
      init() {
        //使用 ref 的方式
        //一定要分清楚ref 和 id的关系 ,l两者使用一个即可
        let myChart = echarts.init(this.$refs.eView);
        // let myChart = echarts.init(document.getElementById('eViewId'));
        let option;
   
        option = {
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: [150, 230, 224, 218, 135, 147, 260],
              type: 'line'
            }
          ]
        };
        option && myChart.setOption(option);
      }
    }
  }
  </script>
   