<script setup lang="ts">
import { useDialog } from '@/composables/useDialog';

const dialog = useDialog();
</script>

<template>
  <Dialog :open="dialog.isOpen" @update:open="dialog.onClose">
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{{ dialog.title }}</DialogTitle>
        <DialogDescription>{{ dialog.description }}</DialogDescription>
      </DialogHeader>
      <div class="flex justify-end space-x-4">

        <Button @click="dialog.onClose">Cancelar</Button>
        <Button @click="dialog.onClose" variant="destructive">Confirmar</Button>
      </div>

      <DialogFooter>
        </DialogFooter>
    </DialogContent>
  </Dialog>
</template>