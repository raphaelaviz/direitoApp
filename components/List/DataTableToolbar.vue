<script setup lang="ts">
import type { Table } from '@tanstack/vue-table'
import { computed } from 'vue'
import type { ProcessoType } from '@/lib/utils'

import { priorities, statuses } from '@/lib/constants'
import DataTableFacetedFilter from './DataTableFacetedFilter.vue'
import DataTableViewOptions from './DataTableViewOptions.vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Plus, PlusCircleIcon } from 'lucide-vue-next';
const sheet = useSheet()
interface DataTableToolbarProps {
  table: Table<ProcessoType>
}

const props = defineProps<DataTableToolbarProps>()

const isFiltered = computed(() => props.table.getState().columnFilters.length > 0)
</script>

<template>
  <div class="flex items-center justify-between p-2 border-[1px] rounded-lg">
    <div class="flex flex-1 items-center space-x-4">

      <Button
        variant="ghost"
        class="space-x-4"
        @click="sheet.onOpen"
      >
      <PlusCircleIcon class="w-5 h-5 mr-2"/>
        Adicionar processo
      </Button>
      <DataTableFacetedFilter
        v-if="table.getColumn('status')"
        :column="table.getColumn('status')"
        title="Status"
        :options="statuses"
      />
      <DataTableFacetedFilter
        v-if="table.getColumn('prioridade')"
        :column="table.getColumn('prioridade')"
        title="Prioridade"
        :options="priorities"
      />
      
    </div>
    <div class="flex space-x-4">
      <Input
      placeholder="Filtrar processos"
      :model-value="(table.getColumn('requerente')?.getFilterValue() as string) ?? ''"
      class="h-8 w-[150px] lg:w-[250px]"
      @input="table.getColumn('requerente')?.setFilterValue($event.target.value)"
      />
      <Button
        v-if="isFiltered"
        variant="ghost"
        class="h-8 px-2 lg:px-3"
        @click="table.resetColumnFilters()"
      >
        Limpar
      </Button>
      <DataTableViewOptions :table="table" />
    </div>
  </div>
</template>
