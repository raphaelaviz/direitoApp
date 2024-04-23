<script setup lang="ts">
  import { ref } from 'vue';
  import { sideBarButtons } from '~/lib/constants';
  import { Scale } from 'lucide-vue-next';
  import { useRoute } from 'vue-router';
 
  const currentRoute = useRoute();
  const isHovered = ref(false);

  // Function to handle mouseenter event
  const handleMouseEnter = () => {
    isHovered.value = true;
  };

  // Function to handle mouseleave event
  const handleMouseLeave = () => {
    setTimeout(() => {
      isHovered.value = false;
    }, 1500);
  };
</script>

<template>
  <div
    :class="{
      'w-64': isHovered,
      'w-24': !isHovered,
    }"
    class="space-y-4 py-4 flex flex-col rounded-lg shadow-md border-r 'transition-all duration-200 ease-in-out'"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div class="px-3 py-2 flex-1">

      <NuxtLink to="/dashboard" class="flex justify-center items-center pl-3 mb-14">
        <div class="relative h-8 w-8 mr-3">
          <Scale class="w-8 h-8"/>
        </div>
        <h1 v-show="isHovered" class="text-2xl font-bold mr-2 mt-1">JurisDash</h1>
      </NuxtLink>

      <div class="flex flex-col space-y-1">

        <!-- TODO: prefetch not working. Why? -->
        <NuxtLink
          v-for="button in sideBarButtons"
          prefetch 
          v-bind="button" 
          :to="button.route"
          class="flex items-center rounded-full h-10 px-4 py-2 hover:font-semibold"
          :class="{
            'hover:bg-slate-100 dark:hover:bg-gray-900' : currentRoute.path !== button.route,
            'bg-slate-200 dark:bg-gray-800': currentRoute.path === button.route
          }"
        >
          <component :is="button.icon" class="w-6 h-6 mr-2" :class="{'ml-1': !isHovered}" />
          <span v-show="isHovered">{{ button.name }}</span>
        </NuxtLink>

      </div>
    </div>
  </div>
</template>

