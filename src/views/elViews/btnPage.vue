<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
::v-deep .el-button {
  span {
    // background-color: #89898989 !important;
  }
}
</style>
