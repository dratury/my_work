<template>
  <div class="wzj_leading">
    <h1 style="width: 100%; height: 30px; line-height: 30px">考勤导入</h1>
    <el-alert
      class="wzj_el-alert"
      title="如果某员工已有打卡记录，最新上传的不覆盖原有数据。可上传多名员工的打卡记录。每名员工可上传多条记录，同考勤日内取员工第一次和最后一次打卡事件。"
      type="warning"
      show-icon
    >
    </el-alert>
    <div class="wzj_buJu">
      <!-- 上传文件 -->
      <div class="upload-demo_1">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip" style="line-height: 15px">
            (推荐 <el-link type="danger">下载模板文件</el-link>,填写后上传)
            <br />
            <el-link type="danger" @click="centerDialogVisible = true">点击查看文件上传要求</el-link>
          </div>
        </el-upload>
      </div>
      <!-- 拖拽文件 -->
      <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处</div>
      </el-upload>
    </div>

    <!-- 上传要求弹框 -->
    <div class="wzj_dialog">
      <el-dialog
        title="文件上传要求"
        :visible.sync="centerDialogVisible"
        width="30%"
        center
        :modal-append-to-body="false"
      >
        <div class="wzj_dialog_1">
					<p>
						<b>重要提示:</b>
					</p>
					<p>
						支持WPS、excel2003以上版本文件
					</p>
					<p>
						请将要上传的内容放入在第一个sheet中
					</p>
					<p>
						请不要加密模板的文件，将导致错误
					</p>
					<p>请不要上传带宏的文件，如背景色和边框，将可能导致超时</p>
					<p>请将手机号、身份证号、银行卡号等内容设置为文本格式</p>
					<p>示例行的内容无需删除、将不会上传到系统中</p>
					<p>
						<b>
							格式说明:
						</b>
					</p>
					<p>
						聘用形式:只能填写“正式”或“非正式”
					</p>
					<p>部门编码:必须是系统里已经存在的部门编码，否则会报错</p>
					<p>开户行:至少给出总行名字，最好细化到支行</p>
				</div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      centerDialogVisible: false
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`
      )
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    }
  }
}
</script>

<style>
.wzj_dialog_1{
	line-height: 15px !important;
}
.el-dialog__close.el-icon.el-icon-close{
	color: #ffffff;
}
.el-dialog__title{
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
.wzj_el-alert {
  height: 30px;
}
.wzj_buJu {
  line-height: 0px !important;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.upload-demo_1 {
  width: 360px;
  height: 185px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed #d9d9d9;
  border-radius: 10px;
}
</style>
