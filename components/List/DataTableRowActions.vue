<script setup lang="ts">
import { groups, priorities } from '@/lib/constants'
import { Ellipsis, Star } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/toast/use-toast'
import { StarFilledIcon, StarIcon } from '@radix-icons/vue'

const dialog = useDialog()
const { toast } = useToast()
const config = useRuntimeConfig()

const props = defineProps({
  id: String,
  favorite: Boolean,
  priority: String,
})

async function openDeleteConfirmation (id?: string) {
  dialog.onOpen({
   isOpen: true, 
   title: `Delete lawsuit?`,
   description: 'This action can not be undone. Are you sure you want to delete the lawsuit?',
   confirmAction: 'delete', 
   payload: id,
  })
};


const isFavorite = ref(props.favorite)

async function handleFavoriteChange(id?: string) {

  // optimistic update
  isFavorite.value = !isFavorite.value;
  
  if (isFavorite.value) {
    toast({ description: 'Lawsuit added to favorites.' });
  } else {
    toast({ description: 'Lawsuit removed from favorites.' });
  }

  // real update
  try {
    await useFetch(`${config.public.API_ENDPOINT}/${id}`, {
      method: 'PUT',
      body: {
        favorite: isFavorite.value
      },
    });
    refreshNuxtData();
  } catch (error) {
    console.log(error);
  }
}

///////

const selectedPriority = ref(props.priority)


async function handlePriorityChange(newPriority: string, lawSuitId?: string) {


// $fetch instead of useFetch sends the request only once even with refreshNuxtData
try {
  await $fetch(`${config.public.API_ENDPOINT}/${lawSuitId}`, {
    method: 'PUT',
    body: {
      priority: newPriority
    },
    });
    toast({ description: `Priority changed to ${newPriority}.` });
  } catch (error) {     
    console.log(error);
  }
  
  refreshNuxtData();
}



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
      
      <DropdownMenuItem class="flex justify-between" @click="handleFavoriteChange(props.id)">
        <span>Favorite</span>
          <Star v-if="!isFavorite" class="h-5 w-5"/>
          <StarFilledIcon v-else class="h-5 w-5"/>
      </DropdownMenuItem>

      <DropdownMenuSeparator />

      <DropdownMenuSub>
        <DropdownMenuSubTrigger>Change priority</DropdownMenuSubTrigger>

        <DropdownMenuSubContent>
          <DropdownMenuRadioGroup v-model="selectedPriority">
            
            <DropdownMenuRadioItem
              v-for="priority in priorities"
              :key="priority.value" 
              :value="priority.value"
              @click="handlePriorityChange(priority.value, props.id)"
              :disabled="selectedPriority == priority.value"
            
            >
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

      <DropdownMenuItem @click="openDeleteConfirmation(props.id)">
        Delete
        <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        
      </DropdownMenuItem>
    </DropdownMenuContent>
  </CustomTooltip> 
  </DropdownMenu>
</template>
