<script setup lang="ts">

    import { sideBarButtons } from '~/lib/constants';
    import { Scale } from 'lucide-vue-next'
    const currentRoute = useRoute()
    
</script>

<template>
  <div class="space-y-4 py-4 flex flex-col rounded-lg shadow-md border-r">
    <div class="px-3 py-2 flex-1">

      <NuxtLink to="/dashboard" class="flex justify-center items-center pl-3 mb-14">
        <div class="relative h-8 w-8 mr-3">
          <Scale class="w-9 h-9"/>
        </div>
        <h1 class="text-2xl font-bold mr-2 mt-1">JurisDash</h1>
      </NuxtLink>

      <div class="flex flex-col space-y-1">

        <NuxtLink
            v-for="button in sideBarButtons" 
            v-bind="button" 
            :to="button.route""
            class="flex items-center rounded-full h-10 px-4 py-2 hover:font-semibold"
            :class="{
                'hover:bg-slate-100 dark:hover:bg-gray-900' : currentRoute.path !== button.route,
                'bg-slate-200 pl-5 dark:bg-gray-800': currentRoute.path === button.route
            }"
        >
          <component :is="button.icon" class="w-6 h-6 mr-2" />
          <span>{{ button.name }}</span>
            
        </NuxtLink>

      </div>
    </div>
  </div>
</template>

