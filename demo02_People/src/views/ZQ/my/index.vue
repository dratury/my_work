<template>
  <div class="my">
    <div class="zq_my">
      <span>个人信息</span> <br />
      <hr />
      <div class="zq_my_left">
        <img src="../../../assets/宋.jpg" alt="" />
      </div>
      <div class="zq_my_right">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="姓名">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="手机号">
            <el-input v-model="form.mobile"></el-input>
          </el-form-item>

          <el-form-item label="性别">
            <el-select v-model="form.region" placeholder="女">
              <el-option label="男" value="shanghai"></el-option>
              <el-option label="女" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="活动时间">
            <el-col :span="11">
              <el-date-picker
                style="width: 200px"
                type="date"
                placeholder="选择日期"
                v-model="form.date1"
              ></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">保存</el-button>
            <el-button @click="esc">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "管理员",
        mobile: "13800000002",
        region: "女",
        date1: "2023-4-10"
      }
    }
  },

  components: {},

  computed: {},

  methods: {
    esc() {
      this.$router.push("/ZQ/user")
    }
  }
}
</script>
<style lang="scss" scoped>
.zq_my {
  width: 100%;
  height: 400px;
  background-color: #fff;
}
.zq_my span {
  float: left;
  margin-left: 20px;
  border-bottom: 2px solid #3f42f5;
  color: #3f42f5;
  font-size: 24px;
}
.zq_my_left {
  float: left;
  width: 180px;
  // background-color: pink;
  height: 100%;
}
.zq_my_left img {
  float: left;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 25px 0px 0px 39px;
}
.zq_my_right {
  margin-top: 26px;
  float: left;
}
</style>
