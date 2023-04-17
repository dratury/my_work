<template>
  <div class="list">
    <router-link to="/ZQ/one">全部</router-link>
    <router-link to="/ZQ/two">我发起的</router-link>
    <router-link to="/ZQ/three">待审批</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },

  components: {},

  computed: {},

  methods: {}
}
</script>
<style lang="scss" scoped>
h3 {
  text-align: center;
  width: 80px;
  color: #3d68f8;
  font-size: 24px;
  display: inline-block;
  border-bottom: 3px solid #3d68f8;
}
.list {
  background-color: #fff;
}
a {
  text-decoration: none;
  padding: 10px;
}
</style>
