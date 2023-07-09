<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <div>
    <div style="display: flex;">
      <h1><router-link to="/zuHeShiHanShu" style="margin-right: 30px;;">组合式函数</router-link></h1>
      <h1><router-link to="/home">首页</router-link></h1> 
    </div>
    
  <router-view ></router-view>
  </div>
  
</template>
<style scoped>

</style>
