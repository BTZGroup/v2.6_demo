<template>
      <div class="time-count-view">
        <div class="year-view">
          <span>{{ dateStr }}</span>
        </div>
        <div id="J_tw_time">
          <img
            class="time-img"
            v-for="(item, index) in 8"
            :key="index"
            src=""
            alt=""
          />
        </div>

  </div>
</template>

<script>
import moment from "moment";
import $ from "jquery";
export default {
  data() {
    return {
      twTimer: null,
      zzTimer: null,
      dateStr: "",
    };
  },
  created() {
    this.twTimer = setInterval(() => {
      this.updateCalendar();
    }, 1000);
    this.zzTimer = setInterval(() => {
      this.updateCalendar();
    }, 1000);
  },
  methods: {
    updateCalendar() {
      var year = moment().format("YYYY");
      var month = moment().format("MM");
      var date = moment().format("DD");
      var hour = moment().format("HH");
      var minute = moment().format("mm");
      var second = moment().format("ss");
      this.dateStr = year + "/" + month + "/" + date;
      var tw_t = $("#J_tw_time").find(".time-img");
      var zz_t = $("#J_zz_time").find(".time-img");
      var str = hour + ":" + minute + ":" + second;
      for (var i = 0; i < str.length; i++) {
        if (i == 2 || i == 5) {
          tw_t.eq(i).attr("src", require("@/assets/time/colon.png"));
          zz_t.eq(i).attr("src", require("@/assets/time/colon.png"));
        } else {
          tw_t
            .eq(i)
            .attr("src", require(`@/assets/time/${str.charAt(i)}.png`));
          zz_t
            .eq(i)
            .attr("src", require(`@/assets/time/${str.charAt(i)}.png`));
        }
      }
    },
  },
  beforeDestroy() {
    this.zzTimer = null;
    this.twTimer = null;
  },
};
</script>

<style lang="scss" scoped>
.title-time-view {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
h1 {
  font-size: 32px;
  color: #fff;
  line-height: 72px;
}
.time-view {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 196px;
  height: 77px;
  // background: red;
}
.word-time-view {
  background-color: #44d1ff;
  width: 45px;
  height: 45px;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #000;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 3px;
  margin-left: 5px;
}
.zz-time-view {
  background-color: #ffc844;
}
.time-count-view {
  display: flex;
  flex-direction: column;
}
.year-view {
    margin-left: 15px;
    margin-top: 7px;
  span {
    display: block;
    font-size: 16px;
    line-height: 12px;
    margin-bottom: 2px;
    font-weight: 500;
    letter-spacing: 6px;
    -webkit-box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    color: #a3dafc;
    // font-family: "DS-Digital";
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
}

#J_tw_time {
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-left: 10px;
}
#J_zz_time {
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-left: 10px;
}
.time-img {
  display: inline-block;
  min-width: 16px;
  height: 20px;
}
</style>
