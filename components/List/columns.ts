import type { ColumnDef } from '@tanstack/vue-table'
import { h } from 'vue'
import { groups, priorities, statuses } from '@/lib/constants'
import type { LawsuitType } from '@/lib/utils'
import DataTableColumnHeader from './DataTableColumnHeader.vue'
import DataTableRowActions from './DataTableRowActions.vue'
import { Checkbox } from '@/components/ui/checkbox'
import { Badge } from '@/components/ui/badge'
import { SquareArrowOutUpRight } from 'lucide-vue-next'
import DataTableRowLink from './DataTableRowLink.vue'

export const columns: ColumnDef<LawsuitType>[] = [
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
    accessorKey: 'number',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: 'Nº do Processo' }),
    cell: ({ row }) => h('div', { class: 'w-20' }, row.getValue('number')),
    enableSorting: false,
    enableHiding: true,
  },
  {
    accessorKey: 'plaintiff',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: 'Plaintiff' }),

    cell: ({ row }) => {
      // const group = groups.find(group => group.value === row.original.plaintiff) //resolve groups later

      return h('div', { class: 'flex space-x-2' }, [
        // group ? h(Badge, { variant: 'outline' }, () => group.label) : null, maybe return with the badge later
        h('span', { class: 'max-w-[500px] truncate font-medium' }, row.getValue('plaintiff')),
      ])
    },
    enableSorting: false,
  },
  {
    accessorKey: 'defendant',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: 'Defendant' }),

    cell: ({ row }) => {
      // const group = groups.find(group => group.value === row.original.defendant) resolve groups later

      return h('div', { class: 'flex space-x-2' }, [
        // group ? h(Badge, { variant: 'outline' }, () => group.label) : null, maybe return with the badge later
        h('span', { class: 'max-w-[500px] truncate font-medium' }, row.getValue('defendant')),
      ])
    },
    enableSorting: false,
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
    enableSorting: false,
  },
  {
    accessorKey: 'priority',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: 'Priority' }),
    cell: ({ row }) => {
      const priority = priorities.find(
          priority => priority.value === row.getValue('priority'),
      );

      if (!priority)
          return null;

      let bgColorClass = '';

      switch (priority.label) {
          case 'Critic':
              bgColorClass = 'bg-[#e7968b] hover:bg-[#e7968b] px-3';
              break;
          case 'High':
              bgColorClass = 'bg-[#f6ae78] hover:bg-[#f6ae78] px-3';
              break;
          case 'Medium':
              bgColorClass = 'bg-[#fcdb80] hover:bg-[#fcdb80] px-1';
              break;
          case 'Low':
              bgColorClass = 'bg-[#b9d4de] hover:bg-[#b9d4de] px-4';
              break;
          default:
              bgColorClass = '';
              break;
      }

      return h('div', { class: 'flex items-center justify center' },
          h(Badge, { class: `text-gray-700 ${bgColorClass}` }, priority.label),
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
    enableSorting: false,
  },
 {
  accessorKey: 'createdAt',
  header: ({ column }) => h(DataTableColumnHeader, { column, title: 'Created at' }),

  cell: ({ row }) => h('div', { class: 'flex w-[100px] items-center text-center' },
    h('span', {}, row.getValue('createdAt'))
  ),
  filterFn: (row, id, value) => {
    return value.includes(row.getValue(id))
  },
  enableSorting: true,
  enableHiding: true,
},

//LINK COLUMN
{
  id: 'id',
  cell: ({ row }) => h(DataTableRowLink, { id: row.original.id }),
},

//OPTIONS COLUMN
  {
    id: 'actions',
    cell: ({ row }) => h(DataTableRowActions, { id: row.original.id }),
  },
  
]
