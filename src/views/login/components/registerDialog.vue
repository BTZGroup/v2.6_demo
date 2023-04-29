<template>
  <div>
    <el-dialog width="900px" title="申请授权" :visible="registDialog.isShow" @close="registDialog.isShow = false">
      <el-form class="form-class" :model="registForm" label-width="100px" ref="registForm">
        <el-row>
          <el-col :span="12">
            <el-form-item label="姓名:" prop="name" :rules="[
              { required: true, message: '请输入用户名', trigger: 'blur' }]">
              <el-input v-model="registForm.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="身份证号:" prop="idCardNo" :rules="[
              { required: true, message: '请输入身份证号', trigger: 'blur' }]">
              <el-input v-model="registForm.idCardNo"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="登录名:" prop="userName" :rules="[
              { required: true, message: '请输入登录名', trigger: 'blur' }]">
              <el-input v-model="registForm.userName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="级别:" prop="levelType" :rules="[
              { required: true, message: '请选择级别', trigger: 'blur' }]">
              <el-select v-model="registForm.levelType" placeholder="" style="width: 100%">
                <el-option v-for="(item, index) in levelArr" :key="index" :label="item.text"
                  :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="applyAccount">申请</el-button>
        <el-button @click="registDialog.isShow = false">关闭</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: ["registDialog"],
  data() {
    return {
      registForm: {},
      levelArr: [
        { text: "本级", value: "本级" },
        { text: "基地", value: "基地" },
        { text: "旅", value: "旅" },
      ],
    };
  },
  methods: {
    applyAccount() {
      this.$refs.registForm.validate((valid) => {
        if (valid) {
          this.$emit("apply", this.form);
        } else {
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.bottom-view {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 30px;
}
</style>