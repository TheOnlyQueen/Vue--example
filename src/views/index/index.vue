<template>
  <div>
      欢迎来到人员管理系统

      <!-- 使用组件 注：驼峰法定义的组件FooterNav需在使用时用短横线连接 -->
      <footer-nav :class="{'isIndex':isNowPage}"></footer-nav>  
  </div>
</template>
<script>
    // 引入组件
    import FooterNav from '../../components/footer.vue'
    export default {
       // 局部注册
       components: {
           FooterNav
       },
       data(){
           return  {
               isNowPage: true
           }
       }
    }
</script>

