<template>
  <div style="text-align: left">
    <el-form :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="部门" prop="region">
        <select v-model="getIndex">
          <option v-for="item in ruleForm" :key="item.id" :value="item.id" >{{ item.name }}</option>
        </select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { wzj_qingJia, wzj_tabulation } from "@/api/api"
export default {
  data() {
		return {
			getIndex:"1175310929766055936",
      ruleForm: [],
      rules: {
        region: [{ required: true, message: "请选择部门", trigger: "change" }]
      }
    }
  },
  methods: {
    getlist() {
      wzj_tabulation().then((response) => {
				let { data: res } = response
        this.ruleForm = res.data.depts
      })
    }
  },
  mounted () {
    wzj_qingJia(this.getIndex).then(response => {
    	let { data: res } = response
    	console.log(res);
    })
	},
	created () {
		this.getlist()
	}
}
</script>

<style></style>
