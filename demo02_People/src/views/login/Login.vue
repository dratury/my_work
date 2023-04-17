<template>
  <div>
    <div class="big">
      <div class="box1">
        <p class="p1">iHRM后台登录系统</p>
        <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="60px" class="login_form">
          <el-form-item label="账号" prop="mobile">
            <el-input
              v-model="loginForm.mobile"
              prefix-icon="iconfont icon-user el-icon-user-solid"
              placeholder="username"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              v-model="loginForm.password"
              type="password"
              prefix-icon="iconfont icon-3702mima el-icon-unlock"
              placeholder="password"
            ></el-input>
          </el-form-item>
          <el-form-item class="btns">
            <el-button type="primary" @click="login" class="btn">登录</el-button>
            <p class="p2" @click="regist">还没有账号？立即注册</p>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { loginFn } from "../../api/api.js"
import { setToken } from "@/utils/auth.js"
export default {
  data() {
    return {
      loginForm: {
        mobile: "13800000002",
        password: "123456"
      },
      // 表单验证
      loginFormRules: {
        mobile: [
          { required: true, message: "用户名不能小于六位", trigger: "blur" },
          { min: 2, max: 10, message: "长度在 2 到 12个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "密码不能小于6位", trigger: "blur" },
          { min: 6, max: 18, message: "长度在 2到 18 个字符", trigger: "blur" }
        ]
      }
    }
  },
  methods: {
    login() {
      // 表单预验证
      // valid：bool类型
      // this.$refs.loginFormRef.validate((valid) => {
      // console.log(valid)
      // valid  false  有错误，验证不通过
      // valid true  验证通过
      // if (!valid) {
      //   return false
      // }
      // 写登录接口
      loginFn(this.loginForm).then(
        (res) => {
					let token = res.data.data
          console.log("login",token)
          setToken(token)
          this.$store.commit("token", res.data.data)
          this.$router.push("/home")
        }
      )
    },
    regist() {
      this.$router.push("/regist")
    }
  }
}
</script>

<style scoped>
.big {
  width: 100%;
  height: 800px;
  background: url("../../assets/1.png") no-repeat;
  margin: 0;
  overflow: hidden;
  background-attachment: fixed;
  background-size: 100% 100%;
}
.box1 {
  width: 500px;
  margin: auto;
  position: fixed;
  top: 20%;
  left: 32%;
}
.btn {
  width: 100%;
  font-size: 26px;
}
.p1 {
  font-size: 40px;
  color: white;
  letter-spacing: 10px;
  text-align: center;
  margin-left: 50px;
}
.p2 {
  text-align: center;
  color: white;
}
</style>
