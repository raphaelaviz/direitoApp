<script setup>
import { createPinia } from 'pinia';
import { createApp } from 'vue'
import App from '~/app.vue';

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)


</script>


<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>    
</template>
