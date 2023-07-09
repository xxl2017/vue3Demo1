<script setup>
import Pinia1 from '../components/Pinia1.vue';
import Pinia2 from '../components/Pinia2.vue';
import { useMainStore } from '@/stores/main.js'
const main = useMainStore()
</script>

<template>
  <h2 style="text-align: center;">
   首页
  </h2>
  <Pinia1 />
  <Pinia2 />
  <button @click="main.reset()">重置</button>
</template>

<style>

</style>
