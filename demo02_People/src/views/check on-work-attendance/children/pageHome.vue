<template>
  <div class="wzj">
    <div class="wzjtop">
      <!-- 按钮 -->
      <div class="wzj_top_1">
        <div class="wzj_top_el-alert">有0条数据审批尚未处理</div>
        <div>
          <el-button type="primary" @click="zj(1)">导入</el-button>
          <el-button type="primary" @click="centerDialogVisible = true">提醒</el-button>
          <el-button type="primary" @click="setDialogVisible = true">设置</el-button>
          <el-button type="primary" @click="zj(4)">历史归档</el-button>
          <el-button type="primary" @click="zj(5)">4月份报表</el-button>
        </div>
      </div>
      <div class="wzj_top_2">
        <div class="wzj_top_2_1">
          <div style="width: 100px; height: 50px; line-height: 50px">
            <b>部门:</b>
          </div>
          <div class="wzj_top_2_1_1">
            <span v-for="item in list" :key="item.id"> <input type="checkbox" />{{ item.name }} </span>
          </div>
        </div>
      </div>
      <div class="wzj_top_2_1">
        <div style="width: 100px; height: 80px; line-height: 80px; text-align: center">
          <b>考勤状态:</b>
        </div>
        <div style="line-height: 80px">
          <el-radio v-model="radio" label="1">正常</el-radio>
          <el-radio v-model="radio" label="2">矿工</el-radio>
          <el-radio v-model="radio" label="3">事假</el-radio>
          <el-radio v-model="radio" label="4">调休</el-radio>
          <el-radio v-model="radio" label="5">迟到</el-radio>
          <el-radio v-model="radio" label="6">早退</el-radio>
        </div>
      </div>
    </div>
    <div class="wzjdown"></div>

    <!-- 提醒 -->
    <div class="wzj_dialog">
      <el-dialog title="提醒" :visible.sync="centerDialogVisible" width="20%" center :modal-append-to-body="false">
        <div>
          <p>系统将通过邮件与短信的形式，对全</p>
          <p>体员工中存在矿工的考勤进行提醒，</p>
          <p>该提醒每月仅可发送1次</p>
          <div slot="footer" class="dialog-footer wzj_dialog-footer">
            <el-button type="primary" @click="centerDialogVisible = false">我知道了</el-button>
            <el-button @click="centerDialogVisible = false">取 消</el-button>
          </div>
        </div>
      </el-dialog>
    </div>

    <!-- 设置 -->
    <div class="wzj_dialog">
      <el-dialog title="设置" :visible.sync="setDialogVisible" width="70%" :modal-append-to-body="false">
        <div>
          <!-- 导航栏 -->
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="setDialog">
            <el-menu-item index="1">出勤设置</el-menu-item>
            <el-menu-item index="2">请假设置</el-menu-item>
            <el-menu-item index="3">扣款设置</el-menu-item>
            <el-menu-item index="4">加班设置</el-menu-item>
          </el-menu>
          <!-- 组件 -->
            <chuQin v-if="show==1"></chuQin>
						<qingJia v-if="show==2"></qingJia>
        </div>
        <div slot="footer" class="dialog-footer wzj_dialog-footer">
          <el-button type="primary" @click="setDialogVisible = false">保存更新</el-button>
          <el-button @click="setDialogVisible = false">取 消</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { wzj_tabulation } from "@/api/api"
import chuQin from "./set up/chuQin.vue"
import qingJia from "./set up/qingJia.vue"
export default {
  data() {
    return {
      show: "",
      list: [],
      centerDialogVisible: false,
      setDialogVisible: false,
      radio: false,
      activeIndex: "1",
      pagenum: {
        page: 1,
        pagesize: 5
      }
    }
  },
  methods: {
    getList() {
      wzj_tabulation().then((response) => {
        let { data: res } = response
        this.list = res.data.depts
      })
    },
    zj(data) {
      this.$emit("zj", data)
    },
    setDialog(a) {
      console.log(a)
      this.show = a
    }
  },
  mounted() {},
  created() {
    this.getList()
  },
  components: {
		chuQin,
		qingJia
  }
}
</script>

<style>
.wzj_dialog-footer {
  display: flex;
  justify-content: center;
}
.wzj_dialog_1 {
  line-height: 15px !important;
}
.el-dialog__close.el-icon.el-icon-close {
  color: #ffffff;
}
.el-dialog__title {
  color: #ffffff;
}
.wzj_dialog > .el-dialog__wrapper > .el-dialog > .el-dialog__header {
  height: 25px;
  line-height: 25px;
  background-color: #66b1ff;
}
.wzj_leading {
  background-color: #ffffff;
}
.wzj_top_2_1_1 {
  display: flex;
  height: 80px;
  flex-wrap: wrap;
  padding: 0px 10px;
}
.wzj_top_2_1_1 > span {
  margin: 5px;
}
.wzj_top_2_1 {
  display: flex;
}
.wzj {
  line-height: 0px !important;
}
.wzj_top_el-alert {
  background-color: #e6f7ff !important;
  border: 1px solid #c6eaff;
  width: 160px;
  height: 25px;
  line-height: 25px !important;
  font-size: 12px;
  color: #9f989c;
}
.wzjtop {
  width: 100%;
  height: 260px;
  box-shadow: 0px 2px 10px black;
}
.wzj_top_1 {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
}
.wzjdown {
  margin-top: 30px;
  height: 300px;
  background-color: teal;
}
</style>
