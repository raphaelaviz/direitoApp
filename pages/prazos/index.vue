<script setup lang="ts">
import processos from '@/lib/dummy/processos.json'
import { prazosColumns } from '@/components/List/prazos-columns'


const env = process.env.MY_ENV_VARIABLE
</script>

<template>
   <div>Outra DataTable com informações sobre prazos para defesa, recurso, réplica, etc</div>
    <!-- <div><ListDataTable :data="processos" :columns="prazosColumns"/></div> -->
</template>
