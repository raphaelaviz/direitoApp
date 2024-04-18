<script setup lang="ts">

</script>


<template>
    <div class="min-h-screen flex flex-col">
      <div class="flex flex-grow">
        <CustomDialog/>
        <SideNav/>
        <div class="flex flex-col w-full">
            <MainHeader/>
            
            <div class="p-3">
              <slot/>
            </div>  
          </div>
        
      </div>
    </div>
  </template>
  
  