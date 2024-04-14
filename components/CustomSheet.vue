<script setup lang="ts">  
const sheet = useSheet()
import { priorities, groups } from '~/lib/constants';
</script>

<template>
    <Sheet :open="sheet.isOpen" @update:open="sheet.onClose">
      <SheetContent class="space-y-40">
        <SheetHeader>
          <SheetTitle>Adicionar processo</SheetTitle>
          <Separator/>
          
          <label>Número do Processo</label>
          <Input placeholder="00.000.00"/>
          <label>Requerente</label>
          <Input placeholder="João da Silva"/>
          <label>Requerido</label>
          <Input placeholder="Siclano de tal"/>
          <label>Prioridade</label>
          <CustomSelect :options="priorities" placeholder="Selecione a prioridade"/>
          <label>Adicionar a grupo</label>
          <CustomSelect :options="groups" placeholder="Adicionar a grupo"/>
        </SheetHeader>
        <div class="flex justify-end">
          <Button @click='sheet.onClose'variant="default">Adicionar</Button>
        </div>
      </SheetContent>
    </Sheet>
  </template>