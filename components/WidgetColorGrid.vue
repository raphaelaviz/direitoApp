<script setup lang="ts">
const colorMode = useColorMode()

const colors = [
  'blue-200',
  'pink-200',
  'yellow-200',
  'purple-200',
  'blue-300', 
  'pink-300', 
  'yellow-300',
  'purple-300',
  'green-300', 
  'red-300', 
  'orange-300', 
  'red-400',
];

//TODO: implement conditional coloring depending on Dark/Light mode
const colorsinDark = [
  'blue-100',
  'pink-100',
  'yellow-100',
  'purple-100',
  'blue-200', 
  'pink-200', 
  'yellow-200',
  'purple-200',
  'green-200', 
  'red-200', 
  'orange-200', 
  'red-300',
];  

</script>

<template>
  <div class="grid grid-cols-4 gap-2 ">
    <div
      v-for="color in colors" 
      :key="color" 
      :class="`h-6 bg-${color} rounded-md hover:border-2 hover:scale-125 hover:border-slate-600 focus:bg-${color}`"
    />
  </div>
</template>
