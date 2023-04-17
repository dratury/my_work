<template>
	<div>
		<hr />
    <span>审批类型</span> <br />
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="" label="序号" width="180"> </el-table-column>
      <el-table-column prop="" label="审批类型" width="180"> </el-table-column>
      <el-table-column prop="" label="申请人" width="180"> </el-table-column>
      <el-table-column prop="" label="当前审批人" width="180"> </el-table-column>
      <el-table-column prop="" label="申请时间" width="180"> </el-table-column>
      <el-table-column prop="" label="申请状态" width="180"> </el-table-column>
      <el-table-column prop="" label="操作"> </el-table-column>
    </el-table>

    <el-pagination background layout="prev, pager, next" :total="1"> </el-pagination>
	</div>
</template>

<script>
export default {
	data () {
		return {
		};
	},

	components: {},

	computed: {},


	methods: {}
}

</script>
<style lang='scss' scoped>
</style>
