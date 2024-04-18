<script setup lang="ts">
import { groups, priorities } from '@/lib/constants'
import { Ellipsis, SquareArrowOutUpRight } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const dialog = useDialog()

defineProps({
  id: String,
})

function openDeleteConfirmation (id?: string) {
  dialog.onOpen({ title: `Delete lawsuit ${id}?`,
   description: 'This action can not be undone. Are you sure you want to delete the lawsuit?' });
};

</script>

<template>
  <DropdownMenu>
    
       <CustomTooltip content="Options">

    <DropdownMenuTrigger as-child>
      <Button
        variant="ghost"
        class="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
      >
        <Ellipsis  class="h-4 w-4" />
        <span class="sr-only">Open menu</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" class="w-[160px]">
      
      <DropdownMenuItem>Favorite</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuSub>
        <DropdownMenuSubTrigger>Change priority</DropdownMenuSubTrigger>
        <DropdownMenuSubContent>
          <DropdownMenuRadioGroup>
            <DropdownMenuRadioItem v-for="priority in priorities" :key="priority.value" :value="priority.value">
              {{ priority.label }}
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuSubContent>
      </DropdownMenuSub>
      <DropdownMenuSub>
        <DropdownMenuSubTrigger>Add to</DropdownMenuSubTrigger>
        <DropdownMenuSubContent>
          <DropdownMenuRadioGroup>
            <DropdownMenuRadioItem v-for="group in groups" :key="group.value" :value="group.value ">
              {{ group.label }}
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuSubContent>
      </DropdownMenuSub>
      <DropdownMenuSeparator />
      <DropdownMenuItem @click="openDeleteConfirmation(id)">
        Delete
        <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </CustomTooltip> 
  </DropdownMenu>
</template>
