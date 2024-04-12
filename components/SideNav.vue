<script setup lang="ts">

    import { sideBarButtons } from '~/lib/constants';
    import logo from '../assets/icons/logo.svg'
    const currentRoute = useRoute()
    
</script>

<template>
  <div class="space-y-4 py-4 flex flex-col bg-slate-50 rounded-lg shadow-md border-r">
    <div class="px-3 py-2 flex-1">

      <NuxtLink to="/painel" class="flex items-center pl-3 mb-14">
        <div class="relative h-8 w-8 mr-4">
          <img alt="Logo" :src="logo" />
        </div>
        <h1 class="text-2xl font-bold">DireitoApp</h1>
      </NuxtLink>

      <div class="flex flex-col space-y-1">

        <NuxtLink
            v-for="button in sideBarButtons" 
            v-bind="button" 
            :to="button.route""
            class="flex items-center rounded-lg h-10 px-4 py-2 hover:font-semibold"
            :class="{
                'hover:bg-slate-100': currentRoute.path !== button.route,
                'bg-slate-200 pl-5': currentRoute.path === button.route
            }"
        >
          <component :is="button.icon" class="w-6 h-6 mr-2" />
          <span>{{ button.name }}</span>
            
        </NuxtLink>

      </div>
    </div>
  </div>
</template>

