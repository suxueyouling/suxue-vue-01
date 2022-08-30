<template>
  <div class="home">
      这是首页
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import {JinpinAPI} from '@/request/api.js'
export default {
  name: 'Home',
  components: {
  
  },
  async created(){
    // 以下代码作为案例还行, 项目就不行,会有缺陷:
    // 1 请求头要写在哪里??多个链接都要带请求头怎么写??
    // 2 不便于接口的管理
    // 3 容易出现回调地狱
    
    // await 后面一般放什么??   Promise对象       await new Promise()     await Xxxx()
    let res = await JinpinAPI();
    console.log("------res为:",res);

    
  }
}
</script>
