<template>
  <div class="home">
    <div class="box">
      <el-container>
        <el-aside width="200px">
          <div class="zq_left_top">
            <span>IHEM</span>
            <br />
            <router-link to="/home/user">首页</router-link>
            <br />
            <router-link to="/home/organ">组织架构</router-link>
            <br />
            <router-link to="/home/bei">备用</router-link>
          </div>
        </el-aside>
        <el-container>
          <el-header>
            <span class="zq_title_flet">江苏传值博客教育科技股份有限公司</span>
          </el-header>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },

  components: {},

  computed: {},

  methods: {}
}
</script>
<style lang="scss" scoped>
.el-header,
.el-footer {
  background-color: rgba(75, 124, 251);
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: rgba(75, 124, 251);
  color: #333;
  text-align: center;
  line-height: 100px;
  border-right: 1px solid #fff;
  height: 120vh;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  line-height: 50px;
  height: 100vh;
}
.zq_title_flet {
  float: left;
  color: #fff;
}
.zq_left_top {
  color: #fff;
  margin: -17px 0px 0px 0px;
  font-size: 40px;
}
a {
  font-size: 20px;
  text-decoration: none;
  color: #000;
}
</style>
