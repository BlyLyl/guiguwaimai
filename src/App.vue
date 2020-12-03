<!--   路由组件文件夹          应用根组件 vue               -->
<template id="app">
<!--  两部分  上面为路由组件 下面为导航  -->
  <div>
<!--    上面为路由组件  -->
    <router-view/>
<!--    使用 FooterGuide标签 -->
<!--    $route表示当前路由 -->
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
   //引入FooterGuide 下面为导航
    import FooterGuide from "./components/FooterGuide/FooterGuide";
    // components属性 映射成标签
    export default {
        components: {
          FooterGuide
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .app
    width: 100%
    height: 100%
    background: #f5f5f5
</style>
