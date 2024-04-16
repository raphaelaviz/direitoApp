<script setup lang="ts">
import { columns } from '@/components/List/columns'
import type { LawsuitType} from '~/lib/utils';

const config = useRuntimeConfig()

//TODO: change to env variable after switching to postgres
const { data = { lawsuits: [] }, pending, error, refresh } = await useFetch("http://localhost:3000/api/lawsuits")

// TODO: Review this type
interface DataProps {
  lawsuits: LawsuitType[]
}

const processData = data as DataProps;

</script>

<!-- LAWSUITS PAGE -->

<template>
    <div class="min-h-screen">
        <NewLawsuitSheet :refreshData="refresh"/>
        <ListDataTable :data="processData.lawsuits" :columns="columns"/>
    </div>
</template>
