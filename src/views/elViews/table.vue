<template>
  <div>
    <div v-if="this.$route.name === 'vue2_table' ">
      <el-button type="primary" @click="getList">获取日志接口测试</el-button>
    <el-table :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%">
      <el-table-column label="Date" prop="date">
      </el-table-column>
      <el-table-column label="Name" prop="name">
      </el-table-column>
      <el-table-column align="right">
        <template slot="header">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>

    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        id: 1,
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        id: 2,
        date: '2016-05-04',
        name: '张三',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        id: 3,
        date: '2016-05-01',
        name: '李四',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        id: 4,
        date: '2016-05-03',
        name: '王麻子',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      search: ''
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
      this.$router.push({ path: `/vue2_table/etable_detail/${row.name}/${row.id}` });
    },
    handleDelete(index, row) {
      console.log(index, row);
      this.$router.push({ path: `/vue2_table/etable_other_detail`, query: Object.assign({}, {aaa: 'bbbbb'}, row) });
    },
    getList() {
      Service.log.getList()
    }
  },
}
</script>