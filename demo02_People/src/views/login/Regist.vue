<template>
  <div>
    <div class="big">
      <div class="top">
        <p class="p1">iHRM后台登录系统</p>
        <el-input placeholder="11位手机号" v-model="input"> </el-input>
        <p>
          <el-input placeholder="输入验证码" v-model="input" class="p2"><el-button style="padding-right:10px" slot="suffix" type="text" class="btn3">获取验证码</el-button></el-input>

        </p>
        <p><el-input placeholder="6-16位密码" v-model="input"> </el-input></p>
        <p><el-input placeholder="确认密码" v-model="input"> </el-input></p>
        <el-button type="primary"  class="btn1">下一步</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.big {
  width: 100%;
  height: 800px;
  background: url("../../assets/1.png");
}
.top {
  width: 500px;
  height: 100%;
  margin: auto;
  position: fixed;
  top: 30%;
  left: 0;
  right: 0;
  bottom: 0;
}
.p1 {
  font-size: 40px;
  color: white;
  letter-spacing: 10px;
  text-align: center;
}
.btn1 {
  width: 100%;
}
.btn2 {
  width: 200px;
  height: 40px;
  border-radius: 25%;
  position: absolute;
  left: 5px;
}
.p2 {
  position: relative;
}
.btn3{
	border-radius: 25px;
	height: 40px;
	width: 100px;
	background-color: white;
	border: 1px solid #d5e5ff;
}
</style>
