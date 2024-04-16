<script setup lang="ts">
import type { Column } from '@tanstack/vue-table'
import type { LawsuitType } from '@/lib/utils'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ArrowDownUp, ArrowUpNarrowWide, ArrowDownNarrowWide } from 'lucide-vue-next'

interface DataTableColumnHeaderProps {
  column: Column<LawsuitType, any>
  title: string
}

defineProps<DataTableColumnHeaderProps>()
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<template>
  <div v-if="column.getCanSort()" :class="cn('flex items-center space-x-2', $attrs.class ?? '')">
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button
          variant="ghost"
          size="sm"
          class="-ml-3 h-8 data-[state=open]:bg-accent"
        >
          <span>{{ title }}</span>
          <ArrowUpNarrowWide v-if="column.getIsSorted() === 'desc'" class="ml-2 h-4 w-4" />
          <ArrowDownNarrowWide v-else-if=" column.getIsSorted() === 'asc'" class="ml-2 h-4 w-4" />
          <ArrowDownUp v-else class="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem @click="column.toggleSorting(true)">
          <ArrowUpNarrowWide class="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
          Most recent
        </DropdownMenuItem>
        <DropdownMenuItem @click="column.toggleSorting(false)">
          <ArrowDownNarrowWide class="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
          Oldest
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
  <div v-else :class="cn('flex items-center space-x-2', $attrs.class ?? '')">
    <span class="flex items-center justify-center">{{ title }}</span>
  </div>
</template>

