<template>
  <div>
    <h2>以下是子组件内容 </h2>
    <div>父传子数据: {{message}} </div>
    <h3 @click="sonHander">点击我子传父</h3>
  </div>
</template>

<script setup>
import { reactive,computed,toRefs, onMounted,defineProps,defineEmits,getCurrentInstance,} from 'vue' 
import { useRouter,useRoute } from 'vue-router'

        const props = defineProps({
           message:{
              type:Object
            }
        })
   
       //1. props用于接收父传过来的属性
       console.log("props值",props.message)
      
      //2.方法1-子传父 通过proxy全局实例
      const { proxy } = getCurrentInstance();
       //context用于子传父，相当于之前this作用
       function sonHander(){
           proxy.$emit('sonclick','子组件值11')
       }

      //方法2-子传父 通过局部defineEmits
      // const emit= defineEmits(['sonclick'])
      // function sonHander(){
      //      emit('sonclick','子组件值11')
      //  }
      
      //3.路由传参演示
    //  let route=useRoute()
    //  console.log('路由参数',route)


</script>

<style  scoped lang="scss">

</style>