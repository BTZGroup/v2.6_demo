<template>
  <div>
    <el-form :model="form" ref="form">
      <el-row :gutter="24">
        <el-col :span="12">
          <el-form-item label="姓名:" prop="name" :rules="[
                  { required: true, message: '请输入姓名',trigger: 'blur' },
                ]" :label-width="formLabelWidth">
            <el-input v-model="form.name" :disabled="true" placeholder="请输入姓名" :maxlength="16"></el-input>
          </el-form-item>
          <el-form-item label="  性别:" prop="gender" :rules="[
                  { message: '请选择性别', trigger: 'blur' },
                ]" :label-width="formLabelWidth">
            <el-select v-model="form.gender" :disabled="true" placeholder="请选择性别">
              <el-option label="男" :value="1"></el-option>
              <el-option label="女" :value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="组织编号：" :label-width="formLabelWidth" prop="orgSeqNo" :rules="[{ required: true, message: '请选择组织编号' }]">
            <el-cascader ref="elCascade" :disabled="true" :options="options" v-model="form.orgSeqNo" placeholder="请选组织编号" :props="cascaderProps" :show-all-levels="false" @change="asdChange" clearable>
            </el-cascader>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="联系电话:" prop="phone" :rules="[
                  { message: '请输入联系电话', trigger: 'blur' },
                  {
                    pattern:
                      /^(((\d{3,4}-)?[0-9]{7,8})|(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8})$/,
                    message: '请正确填写联系人电话',
                  },
                ]" :label-width="formLabelWidth">
            <el-input v-model="form.phone" placeholder="请填写联系人电话" :maxlength="15"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="军官号:" prop="cardNo" :label-width="formLabelWidth">
            <el-input v-model="form.cardNo" :disabled="true" placeholder="请输入军官号" :maxlength="20"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="入伍时间:" prop="joinTime" :label-width="formLabelWidth">
            <el-date-picker type="date" placeholder="选择日期" :picker-options="pickerOptions1" v-model="form.joinTime" style="width: 100%"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="管理角色:" prop="roleId" :rules="[
                  { message: '请选择角色', trigger: 'blur' },
                ]" :label-width="formLabelWidth">
            <el-select v-model="form.roleId" :disabled="true" placeholder="请选择角色">
              <el-option label="超级管理员" :value="101"></el-option>
              <el-option label="管理员" :value="102"></el-option>
              <el-option label="普通用户" :value="103"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="管理角色:" prop="roleId" :rules="[
                  { message: '请选择角色', trigger: 'blur' },
                ]" :label-width="formLabelWidth">
            <el-select v-model="form.roleId" placeholder="请选择角色">
              <el-option label="超级管理员" value="101"></el-option>
              <el-option label="管理员" value="102"></el-option>
              <el-option label="普通用户" value="103"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="应用角色:" prop="addRoleId" :rules="[
                  { message: '请选择角色', trigger: 'blur' },
                ]" :label-width="formLabelWidth">
            <el-select v-model="form.addRoleId" :disabled="true" placeholder="请选择角色">
              <el-option label="教员" :value="201"></el-option>
              <el-option label="学员" :value="202"></el-option>
              <el-option label="其他" :value="9999"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="职级:" prop="rank" :rules="[
                  { message: '请选择职级', trigger: 'blur' },
                ]" :label-width="formLabelWidth">
            <el-select v-model="form.rank" :disabled="true" placeholder="请选择职级">
              <el-option label="军士" value="1"></el-option>
              <el-option label="初职" value="2"></el-option>
              <el-option label="中职" value="3"></el-option>
              <el-option label="高职" value="4"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="身份证号:" prop="idCardNo" :rules="[
                  { message: '请输入身份证号', trigger: 'blur' },
                  {
                    pattern:
                      /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/,
                    message: '请正确填写身份证号',
                  },
                ]" :label-width="formLabelWidth">
            <el-input v-model="form.idCardNo" :disabled="true"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-upload class="avatar-uploader" action="" :on-change="picChange" :before-upload="beforeAvatarUpload">
        <img v-if="form.photo" :src="form.photo" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <div slot="tip" class="el-upload__tip">点击此处上传头像</div>
    </el-form>
    <div class="btn-view">
      <el-button type="primary" @click.stop="cancelinfo">取消</el-button>
      <el-button type="primary" @click.stop="onSubmit">确定 </el-button>
    </div>
  </div>
</template>

<script>
import { sendData_GET } from "../../api/requestGET.js";
import Vue from "vue";
export default {
  props: {
    form: {
      type: Object,
      default: () => {
        return {
          orgSeqNo: [],
        };
      },
    },
  },
  name: "register",
  components: {},
  data() {
    var checkid = (rule, value, callback) => {
      console.log(rule);
      if (value != "") {
        var reg = /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/;
        if (reg.test(value)) {
          callback();
        } else {
          callback(new Error("请输入正确的身份证号"));
        }
      }
    };
    var checkphone = (rule, value, callback) => {
      console.log(rule);
      if (value != "") {
        let regphone = null;
        let mobile = /^1(3|4|5|6|7|8|9)\d{9}$/; //16位手机正则
        let tel = /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/; //座机
        if (value.charAt(0) == 0) {
          regphone = tel;
        } else {
          regphone = mobile;
        }
        if (regphone.test(value)) {
          callback();
        } else {
          callback(new Error("请输入正确的联系人电话"));
        }
      }
    };
    return {
      formLabelWidth: "100px",
      labelPosition: "left",
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
      options: [],
      cascaderProps: {
        checkStrictly: true,
        emitPath: false,
        expandTrigger: "hover",
        value: "id",
        label: "orgName",
        children: "children",
        leaf: "leaf",
      },
    };
  },
  mounted() {
    this.getOptionList();
  },
  methods: {
    asdChange(e) {
      this.form.orgSeqNo = e;
    },
    /* 取消 */
    cancelinfo() {
      this.$emit("cancelinfo");
    },
    onSubmit() {
      this.$emit("onSubmit");
    },
    beforeAvatarUpload(file) {
      let isJPG = file.type === "image/jpeg";
      let isLt2M = Math.ceil(file.size / 1024);
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      } else if (isLt2M > 64) {
        this.$message.error("上传头像图片大小不能超过 64KB!,请重新选择照片");
        this.form.photo = " ";
      } else {
        return isJPG && isLt2M;
      }
    },
    /* 图片改变 */
    picChange(file) {
      this.getBase64(file.raw).then((resBase64) => {
        Vue.set(this.form, "photo", resBase64);
      });
    },
    getBase64(file) {
      return new Promise((resolve, reject) => {
        let reader = new FileReader();
        let fileResult = "";
        reader.readAsDataURL(file);
        reader.onload = function () {
          fileResult = reader.result;
        };
        reader.onerror = function (error) {
          reject(error);
        };
        reader.onloadend = function () {
          resolve(fileResult);
        };
      });
    },
    getOptionList() {
      sendData_GET("/usm/sys/org/getAllOrgTree").then((res) => {
        if (res.data.result === "SUCCESS") {
          this.options = res.data.data.children.map((item) => {
            item["orgName"] = item.data.orgName;
            if (!item.leaf) {
              item.children = this.recurseMethod(item.children);
            }
            return item;
          });
        } else {
          var msg = res.data.msg;
          this.$message.error(msg);
        }
      });
    }, //递归删除空children
    recurseMethod(arr) {
      arr = arr.map((item) => {
        item["orgName"] = item.data.orgName;
        if (!item.leaf) {
          item.children = this.recurseMethod(item.children);
        } else {
          delete item.children;
        }
        return item;
      });
      return arr;
    },
  },
};
</script>
<style scoped lang="scss">
</style>
