<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { storeToRefs } from 'pinia';
import { useMainStore } from '@/stores/main.js'
const main = useMainStore()
const { counter,doubleCounter,doubleCounterPlusOne,doubleCounterPlusOne2}  = storeToRefs(main)
</script>
<template>
  <main>
    <div style="background-color: cyan;">
    <h1>This is an about page{{counter}}</h1>
    <h2>{{doubleCounterPlusOne}}</h2>
    <h3>{{ doubleCounterPlusOne2 }}</h3>
    <h3>{{ doubleCounter }}</h3>
    
  </div>
  </main>
</template>
