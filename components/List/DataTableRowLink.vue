<script setup lang="ts">

import { SquareArrowOutUpRight } from 'lucide-vue-next'


defineProps({
  id: String,
})
</script>


<template>
  <CustomTooltip content="See lawsuit">
    <NuxtLink :to="`/lawsuits/${id}`">
      <Button variant="ghost" class="flex h-8 w-8 p-0">
        <SquareArrowOutUpRight class="w-4 h-4"/>
        <span class="sr-only">See lawsuit</span>
      </Button>
    </NuxtLink>
  </CustomTooltip>
</template>

