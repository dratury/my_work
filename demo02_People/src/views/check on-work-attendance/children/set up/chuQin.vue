<template>
  <div style="text-align: left">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="部门" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择部门">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="出勤时间" required>
        <el-input placeholder="请输入内容" suffix-icon="el-icon-date" > </el-input>
        <el-input size="medium" placeholder="请输入内容" suffix-icon="el-icon-date" > </el-input>
        <el-input size="small" placeholder="请输入内容" suffix-icon="el-icon-date" > </el-input>
        <el-input size="mini" placeholder="请输入内容" suffix-icon="el-icon-date" > </el-input>
        <!-- <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="ruleForm.date1"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%"></el-time-picker>
          </el-form-item>
        </el-col> -->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { wzj_chuQin } from '@/api/api'
export default {
  data() {
    return {
      ruleForm: {},
      rules: {
        region: [{ required: true, message: "请选择活动区域", trigger: "change" }],
        date1: [{ type: "date", required: true, message: "请选择日期", trigger: "change" }],
        date2: [{ type: "date", required: true, message: "请选择时间", trigger: "change" }]
      }
    }
	},
	mounted () {
		wzj_chuQin().then(response => {
			let { data: res } = response
			console.log(res);
 		})
	}
}
</script>

<style></style>
