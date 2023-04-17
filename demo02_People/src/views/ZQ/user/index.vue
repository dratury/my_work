<template>
  <div class="user">
    <div class="zq_box">
      <!-- 顶部 -->
      <div class="zq_top">
        <img src="../../../assets/宋.jpg" alt="" />
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
              <img src="../../../assets/logo.png" alt="" />
              <span class="zq_zq_left2_title_span1"
                ><span class="zq_zq_left2_title_span1_span">朱继柳</span
                >发布了第一期"传智大讲堂"互相讨论获奖名单公布</span
              ><br />
              <span class="zq_zq_left2_title_span2">2018-07-21 15:21:38</span>
            </div>
            <!-- 2 -->
            <div class="zq_left2_title zq_left2_title1">
              <img src="../../../assets/logo.png" alt="" />
              <span class="zq_zq_left2_title_span1"
                ><span class="zq_zq_left2_title_span1_span">朱继柳</span
                >发布了第一期"传智大讲堂"互相讨论获奖名单公布</span
              ><br />
              <span class="zq_zq_left2_title_span2">2018-07-21 15:21:38</span>
            </div>
            <!-- 3 -->
            <div class="zq_left2_title">
              <img src="../../../assets/logo.png" alt="" />
              <span class="zq_zq_left2_title_span1"
                ><span class="zq_zq_left2_title_span1_span">朱继柳</span
                >发布了第一期"传智大讲堂"互相讨论获奖名单公布</span
              ><br />
              <span class="zq_zq_left2_title_span2">2018-07-21 15:21:38</span>
            </div>
          </div>
        </div>
        <!-- 右侧大盒子 -->
        <div class="zq_rightBox2">
          <!-- 1 -->
          <div class="zq_right1">
            <h2>流程申请</h2>
            <div style="clear: both"></div>
            <el-button class="zq_right1_btn" @click="jiaBan">加班离职</el-button>
            <!-- 加班离职form -->
            <el-dialog title="申请" :visible.sync="dialogFormVisible">
              <el-form :model="form">
                <el-form-item class="zq_right_shenQing" label="申请类型" :label-width="formLabelWidth">
                  <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="加班" value="shanghai"></el-option>
                    <el-option label="离职" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="加班开始时间">
                  <el-col :span="11">
                    <el-date-picker
                      type="date"
                      placeholder="选择日期时间"
                      v-model="form.date1"
                      style="width: 100%"
                    ></el-date-picker>
                  </el-col>
                </el-form-item>
                <el-form-item label="加班结束时间">
                  <el-col :span="11">
                    <el-time-picker
                      placeholder="选择日期时间"
                      v-model="form.date2"
                      style="width: 100%"
                    ></el-time-picker>
                  </el-col>
                </el-form-item>
                <el-form-item label="补偿方式">
                  <span class="zq_span"> 调休 </span>
                </el-form-item>
                <el-form-item label="加班原因">
                  <!-- <el-input type="textarea" v-model="form.desc"></el-input> -->
                  <textarea name="" class="zq_textarea" cols="30" rows="10"></textarea>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">提交</el-button>
                <el-button @click="dialogFormVisible = false">重置</el-button>
              </div>
            </el-dialog>
            <el-button class="zq_right1_btn" @click="dialogFormVisible1 = true">请假调休</el-button>
            <!-- 请假调休form -->
            <el-dialog title="请假" :visible.sync="dialogFormVisible1">
              <el-form :model="form1">
                <el-form-item class="zq_right_shenQing" label="申请类型" :label-width="formLabelWidth">
                  <el-select class="zq_select" v-model="form1.region" placeholder="请选择活动区域">
                    <el-option label="加班" value="shanghai"></el-option>
                    <el-option label="离职" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="申请方式">
                  <span class="zq_span"> 按天 </span>
                </el-form-item>
                <el-form-item label="开始时间">
                  <el-col :span="11">
                    <el-date-picker
                      type="date"
                      placeholder="选择日期"
                      v-model="form1.date1"
                      style="width: 100%"
                    ></el-date-picker>
                  </el-col>
                </el-form-item>
                <el-form-item label="结束时间">
                  <el-col :span="11">
                    <el-time-picker placeholder="选择日期" v-model="form1.date2" style="width: 100%"></el-time-picker>
                  </el-col>
                </el-form-item>
                <el-form-item label="补偿方式">
                  <input type="text" value="0" class="zq_btn" />
                </el-form-item>
                <el-form-item label="申请理由">
                  <textarea name="" class="zq_textarea zq_textarea1" cols="30" rows="10"></textarea>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer zq_qxcz">
                <el-button @click="dialogFormVisible1 = false">提交</el-button>
                <el-button @click="dialogFormVisible1 = false">重置</el-button>
              </div>
            </el-dialog>
            <router-link to="/ZQ/list">
              <el-button class="zq_right1_btn">审批列表</el-button>
            </router-link>
            <br />
            <router-link to="/ZQ/my">
              <el-button class="zq_right1_btn zq_xinxi" >我的信息</el-button>
            </router-link>
          </div>
          <!-- 2 -->
          <div class="zq_right1 zq_right12">
            <h2>快速开始/便捷导航</h2>
            <div style="clear: both"></div>
            <el-button class="zq_right1_btn">人事月报</el-button>
            <el-button class="zq_right1_btn">考勤查询</el-button>
            <el-button class="zq_right1_btn">考察统计</el-button> <br />
            <el-button class="zq_right1_btn zq_xinxi" @click="goTop">员工审核</el-button>
            <el-button class="zq_right1_btn zq_zuzi">组织架构</el-button>
          </div>
          <!-- 3 -->
          <div class="zq_right1 zq_right12">
            <h2>帮助链接</h2>
            <br />
						<div style="clear:both"></div>
						<div class="zq_flex">
							<div class="zq_right3">
              <img src="../../../assets/宋.jpg" alt="" />
              <p>入门指南</p>
            </div>
            <div class="zq_right3 zq_right3_1">
              <img src="../../../assets/宋.jpg" alt="" />
              <p>在线帮助手册</p>
            </div>
            <div class="zq_right3 zq_right3_2">
              <img src="../../../assets/宋.jpg" alt="" />
              <p>联系技术支持</p>
            </div>
						</div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { JiaBanFn, liuChengFn } from "../../../api/api.js"
export default {
  data() {
    return {
      value: new Date(),
      dialogFormVisible: false,
      dialogFormVisible1: false,
      form: {
        region: "加班"
      },
      formLabelWidth: "120px",
      form1: {
        region: "加班",
        name: 0
      }
    }
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    goTop() {
      let top = document.documentElement.scrollTop || document.body.scrollTop
      // 实现滚动效果
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 2
        if (top <= 0) {
          clearInterval(timeTop)
        }
      }, 2)
    },
    // 加班离职
    jiaBan() {
      this.dialogFormVisible = true
      // JiaBanFn().then((res) => {
      //   console.log("加班:", res)
      // })
      liuChengFn().then((res) => {
        console.log("加班：", res)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.user {
  height: 100%;
	// text-align: none !important;
}
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
  // margin: 50px 0px 0px -52px;
}
.zq_right3 img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}
.zq_right3_1 {
  // margin-left: 80px;
}
.zq_right3_2 {
  // margin-left: 73px;
}
.zq_right_shenQing {
  margin-left: -22px;
}
.zq_span {
  margin-left: 30px;
}
.zq_textarea {
  width: 320px;
  height: 70px;
  border: 1px solid #cecece;
  margin-left: 30px;
}
.dialog-footer {
  margin: -59px 469px 0px 8px;
}
.zq_btn {
  width: 330px;
  height: 40px;
  border: 1px solid #cecece;
  border-radius: 5px;
  padding-left: 10px;
  // color: #cecece;
}
.zq_eqw {
  margin-left: 0;
}
.zq_qxcz {
  margin: -64px 493px 0px 0px;
}
.zq_textarea1 {
  margin-left: 0px;
}
.zq_select {
  // margin-left: -25px;60px
}

.el-calendar-day {
  box-sizing: border-box;
  padding: 8px;
  height: 50px;
}
.zq_xinxi {
	margin-top: -9px;
}
.zq_zuzi {
	margin-right: 60px;
}

.zq_flex {
	display: flex;
	justify-content: space-around	;
}
</style>
