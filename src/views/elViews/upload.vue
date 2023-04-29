<!-- El-element 批量手动上传组件研究 -->
<template>
  <div class=''>
    <el-form :model="form" ref="uploadForm" label-width="300px" class="demo-ruleForm">
      <el-form-item label="年龄" prop="age" :rules="[
        { required: true, message: '年龄不能为空' },
        { type: 'number', message: '年龄必须为数字值' }
      ]">
        <el-input v-model.number="form.age" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="用户【本地搜索】" prop="userName" :rules="[
        { required: true, message: '用户不能为空' },
      ]">
        <el-autocomplete class="inline-input" v-model="form.userName" :fetch-suggestions="querySearch" placeholder="请输入内容"
          @select="handleSelect"></el-autocomplete>
      </el-form-item>
      <el-form-item label="系统【远程搜索】" prop="system" :rules="[
        { required: true, message: '用户不能为空' },
      ]">
        <el-autocomplete class="inline-input" v-model="form.system" :fetch-suggestions="querySearchHttp"
          placeholder="请输入内容"></el-autocomplete>
      </el-form-item>
      <el-form-item label="手段【json数据】" prop="method" :rules="[
        { required: true, message: '用户不能为空' },
      ]">
        <el-select style="width: 80%" v-model="form.method" filterable placeholder="请选择">
          <el-option v-for="item in GLOBAL_CUS.CUSOPTION" :key="item.id" :label="item.label" :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="阵地【tag创建】" prop="zhendi" :rules="[
        { required: true, message: '用户不能为空' },
      ]">
        <el-select v-model="form.zhendi" multiple filterable allow-create default-first-option placeholder="请选择阵地" @change="changeSelTag">
          <el-option v-for="item in GLOBAL_CUS.ZHENDI" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="文件">
        <el-upload class="upload-demo" ref="upload" drag action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" multiple :auto-upload="false">
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('uploadForm')">提交</el-button>
        <el-button @click="resetForm('uploadForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import _ from "lodash"
import USER_LIST from "./json/userList.json"

export default {
  name: '',
  props: [''],
  data() {
    return {
      form: {
        age: 5,
        userName: undefined,
        system: undefined,
        method: undefined,
        zhendi: []
      },
      userList: [],
      systemList: [],
      fileList: [{
        name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
      }, {
        name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
      }]
    };
  },
  methods: {
    querySearch(queryString, cb) {
      var userList = this.userList;
      var results = queryString ? userList.filter(this.createFilter(queryString)) : userList;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    handleSelect(item) {
      console.log(item);
    },

    querySearchHttp(queryString, cb) {
      var systemList = this.systemList;
      var results = queryString ? systemList.filter(this.createFilter(queryString)) : systemList;
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },
    changeSelTag(e, data) {
      console.log("data", e, data)
    },
    submitUpload() {
      console.log("这是点击手动上传的数据", this.$refs.upload.uploadFiles)
      console.log("这是点击手动上传的数据", this.$refs.upload.fileList)
      this.$refs.upload.submit();

      let deleteList = _.difference(this.$refs.upload.fileList, this.$refs.upload.uploadFiles)
      let addList = _.difference(this.$refs.upload.uploadFiles, this.$refs.upload.fileList)
      console.log("deleteList", deleteList)
      console.log("addList", addList)

      let fd = new FormData()
      addList.forEach(function (file) {
        fd.append("files", file.raw, file.raw.name)
      })
      fd.append("ziingyi", '123');
      console.log("fdfdfdfd", fd)
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.submitUpload()
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  components: {},
  computed: {},
  beforeMount() { },
  mounted() {
    this.userList = USER_LIST;
    this.systemList = USER_LIST;
  },
  watch: {}
}

</script>
<style lang='scss' scoped></style>