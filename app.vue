<script setup>
import App from '~/app.vue';
import { Toaster } from './components/ui/toast';
import { createPinia } from 'pinia';
import { createApp } from 'vue'
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


