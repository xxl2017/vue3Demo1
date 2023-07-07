<script setup>
import axios from 'axios'
axios('http://127.0.0.1:5173/users').then(res=>{
  console.log(11)
})
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
