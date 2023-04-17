<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <div>
          <el-menu default-active="1-4-1" class="el-menu-vertical-demo" :collapse="isCollapse">
            <li><img src="../../assets/02.png" alt="" /></li>
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title" ><router-link to="/ZQ/user">首页</router-link></span>
            </el-menu-item>
            <el-menu-item index="4">
							<i class="el-icon-medal"></i>
							<span slot="title" ><router-link to="/wzj">考勤</router-link></span>
            </el-menu-item>
						<el-menu-item index="3">
							<i class="el-icon-medal"></i>
							<span slot="title" ><router-link to="/organ">组织架构</router-link></span>
						</el-menu-item>
          </el-menu>
        </div>
      </el-aside>
      <el-container>
        <el-header>
          <div class="hederbox">
            <div class="heder">
              <button class="el-icon-s-fold" @click="souqi" style="border: none"></button>
              <span>
                江苏传智播客教育科技股份有限公司
                <el-button class="btn2" plain disabled>体验版</el-button>
              </span>
            </div>
            <div class="heder_right">
              <div>
                <i class="el-icon-search" @click="souSuo"></i>
                <input class="souKuang" type="text" v-show="souSuoK" placeholder="站内搜索" />
              </div>
              <!-- 全屏 -->
              <div>
                <i class="el-icon-rank" @click="handleFullScreen"></i>
              </div>
              <!-- 选择语言 -->
              <div>
                <el-dropdown>
                  <el-button class="yuYan" size="mini" type="primary">A/文</el-button>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>中文</el-dropdown-item>
                    <el-dropdown-item disabled>English</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
              <!-- 颜色选择 -->
              <el-color-picker v-model="color1"></el-color-picker>
              <!-- 管理员 -->
              <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link"> 管理员<i class="el-icon-arrow-down el-icon--right"></i> </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="a">首页</el-dropdown-item>
                  <el-dropdown-item command="b">退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// import screenfull from "screenfull"
export default {
  data() {
    return {
      isCollapse: false,
      fullscreen: false,
      color1: "#409EFF",
      souSuoK: false
    }
  },

  mounted() {},

  methods: {
    // 首页 退出登录
    handleCommand(command) {
      if (command == "a") {
        this.$router.push("/home/sou")
      } else if (command == "b") {
        this.$router.push("/login")
      }
    },
    // 全屏
    handleFullScreen() {
      let element = document.documentElement
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen()
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen()
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen()
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen()
        }
      }
      this.fullscreen = !this.fullscreen
    },
    // 搜索  不实现
    souSuo() {
      this.souSuoK = true
    },
    // 收起展开
    souqi() {
      if (this.isCollapse) {
        this.isCollapse = false
      } else {
        this.isCollapse = true
      }
    },
    //路由跳转
		kaoQin () {
			this.$router.push("/wzj")
		},
		HomePage(){
			this.$router.push("/ZQ/user")
		}
  }
}
</script>

<style lang="scss" scoped>
// -----------头部 右侧
.souKuang {
  width: 200px;
  height: 30px;
}
.heder_right {
  float: right;
  display: flex;
  line-height: 60px;
}
.heder_right > div {
  margin-right: 10px;
}
.el-icon-search {
  color: white;
  font-size: 23px;
}
.el-icon-rank {
  color: white;
  font-size: 23px;
}
.yuYan {
  background-color: white;
  color: #5a8bfe;
  font-size: 10px;
  // margin-top: 5px;
}
// ---------左侧边
img {
  width: 100%;
}
.el-menu-vertical-demo {
  height: 100vh;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu-vertical-demo {
  background-color: #5a8bfe;
}
// -------------------
.heder {
  float: left;
}
.btn2 {
  border-radius: 15px;
}
.el-container {
  height: 100vh;
}

.el-header {
  background-color: #5a8bfe;
  color: #333;
  text-align: center;
  line-height: 60px;
  // width: 100%;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  // width: 100%;
}

.el-main {
  // width: 100%;
  background-color: #e9eef3;
  // color: skyblue;
  // text-align: center;
}
</style>
