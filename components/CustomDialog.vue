<script setup lang="ts">

import { useDialog } from '@/composables/useDialog';
import { useToast } from '@/components/ui/toast/use-toast'

const { toast } = useToast()
const dialog = useDialog();
const config = useRuntimeConfig()


const handleConfirmAction = async () => {
  
  switch (dialog.confirmAction) {
    case 'delete':
  
      console.log('Deleting:', dialog.payload);
      try {

        
     await useFetch(`${config.public.API_ENDPOINT}/${dialog.payload}`, {
      method: 'DELETE'
    })
    refreshNuxtData() //to be replaced with future workaround.
    dialog.onClose()

    toast({
      description: 'Lawsuit deleted successfully.',
  
    })
  } catch (error) {
    toast({
      description: 'Failed to delete lawsuit.',

    })
  }
      break;
    case 'log':
    
      console.log('Logging:', dialog.payload);
      break;
    case 'edit':
      
      console.log('Editing:', dialog.payload);
      break;
    default:
    
      console.log('Unknown action:', dialog.confirmAction);
      break;
  }
};


</script>

<template>
  <Dialog :open="dialog.isOpen" @update:open="dialog.onClose">
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{{ dialog.title }}</DialogTitle>
        <DialogDescription>{{ dialog.description }}</DialogDescription>
      </DialogHeader>
      
      <div class="flex justify-end space-x-4">

        <Button @click="dialog.onClose">Cancel</Button>
        <Button @click="handleConfirmAction" variant="destructive">Confirm</Button>
      
      </div>

      <DialogFooter>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>