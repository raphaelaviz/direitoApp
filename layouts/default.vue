<script setup lang="ts">

</script>


<template>
    <div class="h-full relative">
      <div class="flex h-full">
        <CustomDialog/>
        
          <SideNav/>
          <div class="flex flex-col w-full">
            <div class="bg-green-400">NAVBAR</div>
            <div class="p-3">
              <slot/>
            </div>  
          </div>
        
      </div>
    </div>
  </template>
  
  