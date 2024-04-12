<script setup lang="ts">


const sheet = useSheet()

const { refreshData } = defineProps<{ refreshData: () => void }>();

</script>

<template>
    <Sheet :open="sheet.isOpen" @update:open="sheet.onClose">
      <SheetContent class="space-y-40">
        <SheetHeader>
            <SheetTitle>Adicionar processo</SheetTitle>
            <Separator/>
            <AdicionarProcessoForm :refreshData="refreshData"/>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  </template>