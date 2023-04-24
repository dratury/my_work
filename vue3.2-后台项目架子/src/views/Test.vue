<template>
  <div class="about">
    <h1>这是Vue3演示页面</h1>
    <button @click="go" ref="btn">跳转路由</button>
    <!-- 父传子演示 -->
    <about :message="state.list" @sonclick="sonclick"></about>

  </div>
</template>

<script setup>
import { reactive, ref, onMounted, computed, watch, getCurrentInstance } from "vue";
import { useRoute, useRouter } from "vue-router";
import {getLogin} from "@/http/api.js";
import { useStore } from "vuex";
import About from "@/views/About.vue";  //子组件
    //ref可定义对象
    const title = ref({
      msg: "定义对象",
    });
    //也可以定义其它类型
    const str=ref('字符串')
    const bol = ref(false)
    const nul = ref(null)

    //定义多个响应式数据
    const state = reactive({
      list: [
        {
          id: 1,
          name: "吃饭",
          status: false,
          isShow: true,
        }
      ],
      test: "练习",
    });
     
    //计算长度-computed不要忘记返回值,数组方法如果有花括号，就必须得有return
    let listLen = computed(() => {
      return state.list.filter((item) => {
        return item.status == true;
      }); //如果有花摇号，就必须得有return
    });
    // console.log(95, listLen);
    //点击改变选中状态
    let selectALL = (index) => {
      state.list[index].status = !state.list[index].status;
    };
    //路由跳转
    let router = useRouter();
    let go = () => {
      router.push({ path: "/about", query: { id: 1 } });
      // router.push({name:'About',params:{id:2}})
    };
    // 子传父演示
    let sonclick = (value) => {
      console.log("子传父值为", value);
    };
    //vuex用法
    const store = useStore(); //vuex中store,跟vue2中调用一样

    //watch用法, 监听路由变化时触发
    const route = useRoute();
    watch(route, () => {
      console.log("路由走了");
    });

    //this用法——获取当前组件的上下文，下面两种方式都能获取到组件的上下文。
    // const { ctx }  = getCurrentInstance() //  方式一，这种方式只能在开发环境下使用，生产环境下的ctx将访问不到
    const { proxy } = getCurrentInstance(); //  方式二，此方法在开发环境以及生产环境下都能放到组件上下文对象（推荐）
    // proxy 中包含了组件中由ref和reactive创建的响应式数据对象,以及以下对象及方法;
    // proxy.$attrs proxy.$emit  proxy.$nextTick   proxy.$parent  proxy.$props  proxy.$refs 等
    console.log("上下文对象代替this的", proxy); //获取到了

    //注意生命周期勾子需要引入,执行顺序在setup方法后,setup方法相当之前的beforecreate,created之间
    onMounted(() => {
      // console.log("mouted生命周期");
      console.log("获取dom节点", proxy.$refs);
    });


</script>

<style lang='scss' scoped>

</style>

