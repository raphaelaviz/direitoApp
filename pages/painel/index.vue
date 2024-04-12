<script setup lang="ts">
import { useDialog } from '@/composables/useDialog';

const dialog = useDialog();

function openEditProfileDialog () {
  dialog.onOpen({ title: 'Editar Perfil', description: 'BLA BLA BLA BLA BLA...' });
};

function openDeleteConfirmation () {
  dialog.onOpen({ title: 'Deletar?', description: 'BLE BLE BLE BLE BLE?' });
};

  const requerente = ref("");
  const requerido = ref();
  const prioridade = ref("");

const {data, pending, error, refresh } = await useFetch('/api/processos')

const criarProcesso = async () => {
    await useFetch("/api/processos", {
      method: "POST",
      body: {
        requerente: requerente.value,
        requerido: requerido.value,
        prioridade: prioridade.value,
      },
    });
    await refresh();

    // reset data
    requerente.value = "";
    requerido.value = "";
    prioridade.value = "";

  };


</script>

<template>
  <div class="flex flex-col min-h-screen justify-between">
    <div class="bg-pink-300">{{ data }}</div>



    <form @submit.prevent="criarProcesso">
          <div class="space-y-3">
              <Input v-model="requerente" size="md" />
           
              <Input v-model="requerido" size="md" />
           
              <Input v-model="prioridade" size="md" />
            <div>
              <Button type="submit">Create</Button>
            </div>
          </div>
        </form>

    <div>
      <Button @click="openEditProfileDialog">Edit Profile</Button>
      <Button @click="openDeleteConfirmation">Delete</Button>
    </div>
  </div>
</template>