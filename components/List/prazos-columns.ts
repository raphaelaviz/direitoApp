import type { ColumnDef } from '@tanstack/vue-table'
import { h } from 'vue'
import { groups, priorities, statuses } from '@/lib/constants'
import type { ProcessoType } from '@/lib/utils'
import DataTableColumnHeader from './DataTableColumnHeader.vue'
import DataTableRowActions from './DataTableRowActions.vue'
import { Checkbox } from '@/components/ui/checkbox'
import { Badge } from '@/components/ui/badge'

export const prazosColumns: ColumnDef<ProcessoType>[] = [
  {
    id: 'select',
    header: ({ table }) => h(Checkbox, {
      'checked': table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate'),
      'onUpdate:checked': value => table.toggleAllPageRowsSelected(!!value),
      'ariaLabel': 'Select all',
      'class': 'translate-y-0.5',
    }),
    cell: ({ row }) => h(Checkbox, { 'checked': row.getIsSelected(), 'onUpdate:checked': value => row.toggleSelected(!!value), 'ariaLabel': 'Select row', 'class': 'translate-y-0.5' }),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'id',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: 'Nº do Processo' }),
    cell: ({ row }) => h('div', { class: 'w-20' }, row.getValue('id')),
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: 'requerente',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: 'Requerente' }),

    cell: ({ row }) => {
      const group = groups.find(group => group.value === row.original.requerente)

      return h('div', { class: 'flex space-x-2' }, [
        group ? h(Badge, { variant: 'outline' }, () => group.label) : null,
        h('span', { class: 'max-w-[500px] truncate font-medium' }, row.getValue('requerente')),
      ])
    },
  },
  {
    accessorKey: 'requerido',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: 'Requerido' }),

    cell: ({ row }) => {
      const group = groups.find(group => group.value === row.original.requerido)

      return h('div', { class: 'flex space-x-2' }, [
        group ? h(Badge, { variant: 'outline' }, () => group.label) : null,
        h('span', { class: 'max-w-[500px] truncate font-medium' }, row.getValue('requerido')),
      ])
    },
  },
  {
    accessorKey: 'status',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: 'Status' }),

    cell: ({ row }) => {
      const status = statuses.find(
        status => status.value === row.getValue('status'),
      )

      if (!status)
        return null

      return h('div', { class: 'flex w-[100px] items-center' },
        h('span', status.label))
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: 'prioridade',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: 'Prioridade' }),
    cell: ({ row }) => {
      const priority = priorities.find(
        priority => priority.value === row.getValue('prioridade'),
      )

      if (!priority)
        return null

      return h('div', { class: 'flex items-center' },
        h('span', {}, priority.label),
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => h(DataTableRowActions, { row }),
  },
]
