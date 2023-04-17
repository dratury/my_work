<template>
  <div class="login">
    <div class="box">
      <p class="title">iHRM后台登录系统</p>
      <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px" class="demo-ruleForm">
        <el-form-item prop="mobile">
          <el-input
            aria-placeholder="请输入11位手机号"
            type="text"
            v-model="loginForm.mobile"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            aria-placeholder="请输入11位手机号"
            type="text"
            v-model="loginForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="loginBtn" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { loginFn } from "@/api/api"
import { setToken } from "@/utils/auth"

export default {
  data() {
    return {
      loginForm: {
        mobile: "13800000002",
        password: "123456"
      },
      rules: {
        mobile: [
          { required: true, message: "请输入11位手机号", trigger: "blur" },
          { min: 3, max: 11, message: "长度在 3 到 11 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 6, message: "长度在 3 到 6 个字符", trigger: "blur" }
        ]
      }
    }
  },

  components: {},

  computed: {},

  methods: {
    login() {
      loginFn(this.loginForm).then((res) => {
        console.log("登录:", res)
				if(res.code == 10000){
					setToken(res.data)
					this.$router.push("/home")
					this.$message.success("登录成功")
				}
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  background-image: url(../../assets/bgc.png);
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  text-align: center;
}
.box {
  padding: 20px;
  // border: 1px solid #000;
  width: 450px;
  height: 350px;
}
.demo-ruleForm {
  margin: 50px 0px 0px -100px;
}
.loginBtn {
  width: 100%;
}
.title {
	font-size: 50px;
	color: #fff;
}
</style>
