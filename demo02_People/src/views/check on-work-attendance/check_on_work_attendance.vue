<template>
  <div>
		<pageHome @zj="quZhi" v-if="!show"></pageHome>
		<leading v-if="show==1"></leading>

	</div>
</template>

<script>
import pageHome from './children/pageHome.vue'
import leading from './children/leadingCom.vue'

export default {
  data() {
		return {
			show:''
		}
  },
	methods: {
		quZhi (val) {
			console.log(val);
			this.show=val
		}
	},
	components: {
		pageHome,
		leading	,
	}
}
</script>

<style></style>
