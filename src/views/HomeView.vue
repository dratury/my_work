<template>
  <div class="home">
    <el-container>
      <el-header>
        <div style="display: flex; align-items: center">
          <img :src="url" alt class="sculpture" />
          <span style="font-size: 40px">电商后台管理系统</span>
        </div>
        <div>
          <el-button type="info" plain style="height: 40px; width: 100px" @click="out">退出</el-button>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-col :span="12">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @select="detailed"
              background-color="#333744"
              text-color="#fff"
              active-text-color="#ffd04b"
            >
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>用户管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">用户列表=</el-menu-item>
                </el-menu-item-group>
              </el-submenu>

              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>权限管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="2-1">
                    角色列表
                    <!-- <router-link to="/userlist">角色列表</router-link> -->
                  </el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                  <el-menu-item index="2-2">权限列表</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <!-- <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
              </el-menu-item>-->
            </el-menu>
          </el-col>
        </el-aside>
        <el-main>
          <h1 v-if="show">Welcome!</h1>
          <div v-if="!show">
            <!-- 面包屑 -->
            <div style="height:30px;">
              <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item @click="goback(this.show=true)">首页</el-breadcrumb-item>
                <el-breadcrumb-item>{{Breadcrumb.one}}</el-breadcrumb-item>
                <el-breadcrumb-item>{{Breadcrumb.two}}</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
            <!-- 表单区域 -->
            <div class="formContent">
              <router-view />
            </div>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// import { query } from 'express'
export default {
  data() {
    return {
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      show: true,
      Breadcrumb: {
        one: "",
        two: "",
      }
    }
  },
  methods: {
    out() {
      this.$router.push("/login")
    },
    detailed(a, b) {
      this.show = false
      // console.log(a)
      // console.log(b)
      if (a == "1-1") {
        this.Breadcrumb.one = "用户管理"
        this.Breadcrumb.two = "用户列表"
				this.$router.push("/users")
      } else if (a == "2-1") {
        this.Breadcrumb.one = "权限管理"
        this.Breadcrumb.two = "角色列表"
				this.$router.push("/userlist")
      }
    }
  }
}
</script>
<style scoped>
.formContent {
  background-color: #ffffff;
}
.el-menu {
  width: 200px;
}
.home {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #333;
}
.sculpture {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-right: 10px;
}
.el-container {
  height: 100%;
}
.el-header {
  height: 90px !important;
  text-align: left !important;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.el-header,
.el-footer {
  background-color: #040404;
  color: #f4eeee;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  height: 100%;
  background-color: #333744;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  /* text-align: center; */
  /* line-height: 160px; */
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
