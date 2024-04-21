<script setup lang="ts">

import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { Pencil } from 'lucide-vue-next'
import RightClick from '@/assets/icons/mouse_right_click.svg'
const props = defineProps<{
  class?: HTMLAttributes['class'],
  title: String,
  size: String,
  content?: String
}>()

</script>

<template>


<ContextMenu>
        <ContextMenuTrigger>
<div class="grid-stack-item" :gs-w="props.size">
  
    <div 
      :class="
        cn(
          'grid-stack-item-content group flex flex-col pt-1 bg-slate-400 rounded-lg dark:text-gray-800 hover:cursor-grabbing shadow-md shadow-slate-400 dark:shadow-slate-700',
          props.class,
        )"
    >
      <div class="hidden group-hover:flex absolute right-2 w-full justify-end">  
        
        <img :src="RightClick" class="w-6 h-6 opacity-50"/>

        <!-- MAYBE LEAVE THE EDIT BUTTON BELOW INSTEAD OF THE RIGHT CLICK -->
        <!-- 
          <CustomTooltip content="Edit card">
            <Button variant="ghost" class="hover:scale-110 px-3 py-3 border-none rounded-full">
                <span class="sr-only">Edit card</span>
                <Pencil class="w-4 h-4"/>
            </Button>
        </CustomTooltip> -->

      </div>

      <div class="h-full flex flex-col items-center justify-center text-center space-y-5">
          <div class="font-semibold">
            {{ title }}
          </div>
          <span class="text-4xl">{{ content }}</span>
          <slot/>
      </div>
    </div>
</div>
</ContextMenuTrigger>
<ContextMenuContent class="w-64">

  <!-- CHECKED OR INSET -->
      <ContextMenuCheckboxItem checked>
        Resizable
        <ContextMenuShortcut>⌘⇧R</ContextMenuShortcut>
      </ContextMenuCheckboxItem>
      <ContextMenuCheckboxItem checked>
        Draggable
      </ContextMenuCheckboxItem>
      
      <ContextMenuSub>
        <ContextMenuSubTrigger inset>
          Change color
        </ContextMenuSubTrigger>
        <ContextMenuSubContent class="w-6">

          <WidgetColorGrid/>

        </ContextMenuSubContent>
    
      </ContextMenuSub>
    
      <ContextMenuSeparator />
      
      <ContextMenuItem inset>
        Delete widget
        <ContextMenuShortcut>⌘⇧D</ContextMenuShortcut>
      </ContextMenuItem>
    
    </ContextMenuContent>
  </ContextMenu>

</template>