<script setup lang="ts">

const sheet = useSheet()

//TODO: resolve this prop drilling: Lawsuits Page> NewLawsuitSheet > NewlawsuitForm
const { refreshData } = defineProps<{ refreshData: () => void }>();

</script>

<template>
    <Sheet :open="sheet.isOpen" @update:open="sheet.onClose">
      <SheetContent class="space-y-40">
        <SheetHeader>
            <SheetTitle>Add new lawsuit</SheetTitle>
            <Separator/>
            <NewLawsuitForm :refreshData="refreshData"/>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  </template>