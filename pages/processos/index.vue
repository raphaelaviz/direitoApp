<script setup lang="ts">
import { columns } from '@/components/List/columns'
import type { ProcessoType } from '~/lib/utils';

const config = useRuntimeConfig()

//TODO: change to env variable after switching to postgres
const { data = { processos: [] }, pending, error, refresh } = await useFetch("http://localhost:3000/api/processos")

// TODO: Review this type
interface DataProps {
  processos: ProcessoType[]
}

const processData = data as DataProps;

</script>

<!-- PROCESSOS PAGE -->

<template>
    <div class="min-h-screen">
        <AdicionarProcessoSheet :refreshData="refresh"/>
        <ListDataTable :data="processData.processos" :columns="columns"/>
    </div>
</template>
