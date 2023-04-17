<template>
  <div class="user">
    <div class="zq_box">
      <!-- 顶部 -->
      <div class="zq_top">
        <img src="../../assets/宋.jpg" alt="" />
        <span class="zq_font">早安，，祝你开心每一天！</span> <br />
        <span class="zq_font1">| -</span>
      </div>
      <div class="zq_bigBox">
        <!-- 左侧大盒子 -->
        <div class="zq_rightBox1">
          <!-- 左侧1 -->
          <div class="zq_left1">
            <span class="zq_gzrl">工作日历</span>
            <div style="clear: both"></div>
            <hr />
            <el-calendar v-model="value"> </el-calendar>
          </div>
					<!-- 左侧2 -->
          <div class="zq_left2">
						<span class="zq_gzrl1">公告</span>
            <div style="clear: both"></div>
            <hr />
						<!-- 1 -->
						<div class="zq_left2_title">
							<img src="../../assets/logo.png" alt="">
							<span class="zq_zq_left2_title_span1"><span class="zq_zq_left2_title_span1_span">朱继柳</span>发布了第一期"传智大讲堂"互相讨论获奖名单公布</span><br>
							<span class="zq_zq_left2_title_span2">2018-07-21 15:21:38</span>
						</div>
						<!-- 2 -->
						<div class="zq_left2_title zq_left2_title1">
							<img src="../../assets/logo.png" alt="">
							<span class="zq_zq_left2_title_span1"><span class="zq_zq_left2_title_span1_span">朱继柳</span>发布了第一期"传智大讲堂"互相讨论获奖名单公布</span><br>
							<span class="zq_zq_left2_title_span2">2018-07-21 15:21:38</span>
						</div>
						<!-- 3 -->
						<div class="zq_left2_title">
							<img src="../../assets/logo.png" alt="">
							<span class="zq_zq_left2_title_span1"><span class="zq_zq_left2_title_span1_span">朱继柳</span>发布了第一期"传智大讲堂"互相讨论获奖名单公布</span><br>
							<span class="zq_zq_left2_title_span2">2018-07-21 15:21:38</span>
						</div>
					</div>
        </div>
        <!-- 右侧大盒子 -->
        <div class="zq_rightBox2">
          <!-- 1 -->
          <div class="zq_right1">
            <h2>流程申请</h2>
            <div style="clear:both"></div>
            <el-button class="zq_right1_btn">加班离职</el-button>
            <el-button class="zq_right1_btn">请假调休</el-button>
            <el-button class="zq_right1_btn">审批列表</el-button> <br>
            <el-button class="zq_right1_btn">我的信息</el-button>
          </div>
          <!-- 2 -->
          <div class="zq_right1 zq_right12">
            <h2>快速开始/便捷导航</h2>
            <div style="clear:both"></div>
            <el-button class="zq_right1_btn">人事月报</el-button>
            <el-button class="zq_right1_btn">考勤查询</el-button>
            <el-button class="zq_right1_btn">考察统计</el-button> <br>
            <el-button class="zq_right1_btn">员工审核</el-button>
            <el-button class="zq_right1_btn">组织架构</el-button>
          </div>
          <!-- 3 -->
          <div class="zq_right1 zq_right12">
            <h2>帮助链接</h2> <br>
            <div class="zq_right3">
              <img src="../../assets/宋.jpg" alt="">
              <p>入门指南</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
			value: new Date()
		}
  },

  components: {},

  computed: {},

  methods: {}
}
</script>
<style lang="scss" scoped>
.zq_top {
  height: 150px;
  width: 100%;
  background-color: #fff;
}
.zq_top img {
  width: 120px;
  height: 120px;
  float: left;
  border-radius: 50%;
  margin: 14px 0px 0px 15px;
  float: left;
}
.zq_font {
  float: left;
  margin-top: 35px;
  font-size: 20px;
  margin-left: 10px;
}
.zq_font1 {
  float: left;
  margin: 18px 0px -2px -238px;
}
.zq_bigBox {
  width: 100%;
  height: 500px;
  // background-color: #fff;
  margin-top: 20px;
}
.zq_rightBox1 {
  width: 55%;
  height: 500px;
  background-color: #fff;
  // border: 1px solid #000;
  float: left;
}
.zq_rightBox2 {
  width: 43%;
  height: 500px;
  float: right;
  // border: 1px solid #000;
  // background-color: #fff;
}
.zq_gzrl {
  margin-left: 20px;
  float: left;
  height: 50px;
  font-size: 26px;
}
.zq_gzrl1 {
  margin-left: 20px;
  float: left;
  height: 50px;
  font-size: 16px;
}
.zq_left2 {
	margin-top: 20px;
	height: 300px;
	background-color: #fff;

}
.zq_left2_title img {
	float: left;
	width: 50px;
	height: 50px;
	margin: 13px 0px 0px 27px;
}
.zq_left2_title {
	width: 100%;
	height: 80px;
	border-bottom: 1px solid #cecece;
}
.zq_zq_left2_title_span1 {
	float: left;
	margin-left: 20px;
}
.zq_zq_left2_title_span2 {
	float: left;
	margin-top: -23px;
	margin-left: 20px;
}
.zq_zq_left2_title_span1_span {
	color: rgb(77, 131, 249);
}
.zq_left2_title1 {
	margin-top: 10px;
}
.zq_right1 {
  height: 200px;
  background-color: #fff;
}
.zq_right1 h2 {
  float: left;
  margin-left: 30px;
  border-bottom: 3px solid #2d60ec;
}
.zq_right1_btn {
  width: 110px;
  height: 40px;
  margin-left: 29px;
  margin-top: 10px;
  float: left;
}
.zq_right12 {
  margin-top: 20px;
}
.zq_right3 {
  float: left;
  margin: 17px 0px 0px -52px;
}
.zq_right3 img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}
.zq_right3 p {
  margin-top: -20px;
}
</style>
