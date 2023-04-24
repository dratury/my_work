<template>
  <div id="vmheader">
	<h1>新型冠状肺炎实时监测</h1>
	 <div id="zptime">
	  当前时间: 2021年5月6-23时5分47秒
    </div>
	  
  </div>
</template>

<script>
	
	export default {
		name:'vmheader',
		components:{
		},
	}
</script>
<style scoped>
	#vmheader{
		height: 100px;
		position: relative;
		/* 别名访问方式-绝对路径访问 */
		/* background: url(~assets/image/head_bg.png) no-repeat top center; */
		/* 静态访问方式 */
		background: url('../assets/image/head_bg.png') no-repeat top center;  

		background-size: 100% 100%;  
	}
	
	#vmheader h1{
		color: white;
		font-size: 38px;
		line-height: 80px;
		text-align: center;
	}
	#zptime{
		line-height: 75px;
		color: rgba(255, 255, 255, 0.7);
		font-size: 20px;
		position: absolute;
		top: 0;
		right:30px
	}
	
</style>
