<script setup>
import { createPinia } from 'pinia';
import { createApp } from 'vue'
import App from '~/app.vue';
import { Toaster } from './components/ui/toast'; 
const pinia = createPinia()
const app = createApp(App)
app.use(pinia)


</script>


<template>
  <NuxtLayout>
    <NuxtPage/>
    <Toaster/>
  </NuxtLayout>    
</template>
