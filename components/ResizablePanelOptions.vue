<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

import { Trash2, Pencil } from 'lucide-vue-next';
</script>


<template>

<div :class="
      cn(
        'flex justify-end',
        props.class,
      )
    ">
    <CustomTooltip content="Editar informações">
        <Button variant="ghost" class="hover:scale-110 px-3 py-3 border-none">
            <span class="sr-only">Editar informações</span>
            <Pencil class="w-4 h-4"/>
        </Button>
    </CustomTooltip>

    <CustomTooltip content="Deletar">
        <Button variant="ghost" class="hover:scale-110 border-none">
            <span class="sr-only">Deletar</span>
            <Trash2 class="w-4 h-4"/>
        </Button>
    </CustomTooltip>
</div>

</template>