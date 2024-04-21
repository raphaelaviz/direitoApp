<script setup lang="ts">
import { ContextMenuTrigger, type ContextMenuTriggerProps, useForwardProps } from 'radix-vue'

const props = defineProps<ContextMenuTriggerProps>()

const forwardedProps = useForwardProps(props)
</script>

<template>

  <!-- TODO: change the aschild attribute -->
  <ContextMenuTrigger v-bind="forwardedProps" as-child: asChild>
    <slot />
  </ContextMenuTrigger>
</template>
