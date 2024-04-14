
<script setup lang="ts">
defineProps({
  content: String,
})
</script>
<template>
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger as-child>
          <slot/>
        </TooltipTrigger>
        <TooltipContent>
          <p>{{ content }}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </template>