<template>
  <div>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <span>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item prop="username">
            <el-input v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="ruleForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm()">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { loginFn } from "@/api/api"
import { setToken } from "@/utils/auth"
export default {
  data() {
    return {
      ruleForm: {
        password: "123456",
        username: "admin"
      },
      dialogVisible: true,
      rules: {
        username: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      }
    }
  },
  methods: {
    submitForm() {
      // 表单验证
      this.$refs.ruleForm.validate((vaild) => {
        console.log(vaild)
        if (!vaild) {
          return false
        }
        // 写登录接口
        console.log("loginFn:", loginFn(this.ruleForm))
        loginFn(this.ruleForm).then((response) => {
					console.log(response);
					let {data:res} = response
          if (res.meta.status === 200) {
            // 对token进行处理
            setToken(res.data.token)
            this.$router.push("/home")
          } else {
            return false
          }
        })
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style></style>
