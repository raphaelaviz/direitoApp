<script setup lang="ts">

const colors = [
  'blue-200',
  'pink-200',
  'yellow-200',
  'purple-200',
  '[#93c5fd]', //missing in production
  '[#f9a8d4]', //missing in production
  'yellow-300',
  'purple-300',
  '[#86efac]', //missing in production
  '[#fca5a5]', //missing in production
  '[#fdba74]', //missing in production
  'red-400',
];

</script>

<template>
  <div class="grid grid-cols-4 gap-2">
    <div
      v-for="color in colors" 
      :key="color" 
      :class="`h-6 bg-${color} rounded-md hover:border-2 hover:scale-125 hover:border-slate-600 focus:bg-${color}`"
    />
  </div>
</template>
