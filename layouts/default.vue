<script setup lang="ts">

</script>


<template>
    <div class="h-full relative">
      <div class="hidden h-full md:flex">
        <CustomDialog/>
        <!-- <CustomSheet/> -- Voltar com esse component quando for totalmente customizável> 
        <!-- <AdicionarProcessoSheet/> -->
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
  
  