<script setup lang="ts">
import { useToast } from '@/components/ui/toast/use-toast'

const { toast } = useToast()
const dialog = useDialog()

const openEditConfirmation = async (id?: string) => {
  dialog.onOpen({
   isOpen: true, 
   title: `Do stuff to ${id}?`,
   description: `${id} will be editted, deleted or logged`,
   confirmAction: 'edit', 
   payload: id,
  }) 
};

</script>

<template>
  <div>
    <div>Tests for now</div>
    <div>
      <Button @click="openEditConfirmation('My payload')">Do stuff</Button>
    </div>

  </div>
</template>
