<script setup lang="ts">

const colors = [
  'blue-200',
  'pink-200',
  'yellow-200',
  'purple-200',
  'blue-300', //
  'pink-300', //
  'yellow-300',
  'purple-300',
  'green-200', //
  'red-300', //
  'orange-300', //
  'red-400',
];

</script>

<template>
  <div class="grid grid-cols-4 gap-2 ">
    <div
      v-for="color in colors" 
      :key="color" 
      :class="`h-6 bg-${color} rounded-md hover:border-2 hover:border-slate-600 focus:bg-${color}`"
    />
  </div>
</template>
