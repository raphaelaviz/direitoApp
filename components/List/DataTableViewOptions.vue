<script setup lang="ts">
import type { Table } from '@tanstack/vue-table'
import { computed } from 'vue'
import type { ProcessoType } from '@/lib/utils'

import { Button } from '@/components/ui/button'
import { Eye } from 'lucide-vue-next';


interface DataTableViewOptionsProps {
  table: Table<ProcessoType>
}

const props = defineProps<DataTableViewOptionsProps>()

const columns = computed(() => props.table.getAllColumns()
  .filter(
    column =>
      typeof column.accessorFn !== 'undefined' && column.getCanHide(),
  ))
</script>

<template>
  <DropdownMenu>
    <CustomTooltip content="Visualizar">
    <DropdownMenuTrigger as-child>
      <Button
        variant="outline"
        size="sm"
        class="ml-auto hidden h-8 lg:flex"
      >
      <span class="sr-only">Visualizar</span>
       <Eye/>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="center" class="w-[150px]">
      <DropdownMenuLabel>Visualizar</DropdownMenuLabel>
      <DropdownMenuSeparator />

      <DropdownMenuCheckboxItem
        v-for="column in columns"
        :key="column.id"
        class="capitalize"
        :checked="column.getIsVisible()"
        @update:checked="(value) => column.toggleVisibility(!!value)"
      >
      <!-- TODO: delete this conditional rendering after changing the tables names  -->
      {{ column.id === 'createdAt' ? 'Registrado em' : column.id === 'numero' ? 'Número' : column.id }}

      </DropdownMenuCheckboxItem>
    </DropdownMenuContent>
  </CustomTooltip>
  </DropdownMenu>
</template>
