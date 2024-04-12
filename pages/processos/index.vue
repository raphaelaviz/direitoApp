<script setup lang="ts">

import { columns } from '@/components/List/columns'


const {data, pending, error, refresh } = await useFetch('/api/processos')



</script>


<!-- PROCESSOS PAGE -->

<template>
    <div class="min-h-screen">
        <AdicionarProcessoSheet :refreshData="refresh"/>
        <ListDataTable :data="data?.processos" :columns="columns"/>
    </div>
</template>