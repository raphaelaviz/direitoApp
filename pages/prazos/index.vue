<script setup lang="ts">
import processos from '@/lib/dummy/processos.json'
import { prazosColumns } from '@/components/List/prazos-columns'

</script>

<template>
    <div><ListDataTable :data="processos" :columns="prazosColumns"/></div>
</template>
