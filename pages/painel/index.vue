<script setup lang="ts">
import { useDialog } from '@/composables/useDialog';

const dialog = useDialog();

import { Trash2, Pencil } from 'lucide-vue-next';

function openEditProfileDialog () {
  dialog.onOpen({ title: 'Editar Perfil', description: 'BLA BLA BLA BLA BLA...' });
};

function openDeleteConfirmation () {
  dialog.onOpen({ title: 'Deletar?', description: 'BLE BLE BLE BLE BLE?' });
};

</script>
<!-- DEMO PAGE -->
<template>
  <div class="flex flex-col min-h-screen">
    <div class="flex justify-between border rounded-lg p-2">

      <div class="space-x-1">
        <Button variant="ghost">1</Button>
        <Button variant="ghost">2</Button>
        <Button variant="ghost">3</Button>
      </div>
      <div class="space-x-1">
        <Button variant="ghost">4</Button>
        <Button variant="ghost">5</Button>
        <Button variant="ghost">6</Button>
      </div>
    </div>
    <div class="flex items-center justify-center grid-rows-3 mt-10 space-x-5">
      <div class="w-96 h-96 flex items-center justify-center bg-yellow-200 rounded-lg">
        Favoritos
      </div>

      <Card class="flex flex-col bg-purple-200 w-64 h-64 p-2">
        <div class="flex justify-end">

                <CustomTooltip content="Editar informações">
                    <Button variant="ghost" class="hover:scale-110 rounded-full">
                        <span class="sr-only">Editar informações</span>
                        <Pencil class="w-4 h-4"/>
                    </Button>
                </CustomTooltip>
                <CustomTooltip content="Deletar">
                    <Button variant="ghost" class="hover:scale-110 rounded-full">
                        <span class="sr-only">Deletar</span>
                        <Trash2 class="w-4 h-4"/>
                    </Button>
                </CustomTooltip>
        </div>

      <CardHeader class="flex">
        <CardTitle class="flex w-full">
          Processos em fase de recurso
        </CardTitle>
      </CardHeader>
      <CardContent class="flex items-center justify-center text-5xl">
        <span class="w-20 h-20 bg-white rounded-full flex items-center justify-center">
          13
        </span>
      </CardContent>
    </Card>

 

    </div>


    <div>
      <Button @click="openEditProfileDialog">Edit Profile</Button>
      <Button @click="openDeleteConfirmation">Delete</Button>
    </div>
  </div>
</template>