<script setup lang="ts">
import { columns } from '@/components/List/columns'
import type { LawsuitType} from '~/lib/utils';
import localLawsuits from '@/lib/dummy/processos.json'

const config = useRuntimeConfig()


const { data = { lawsuits: [] }, pending, error, refresh } = await useFetch(config.public.API_ENDPOINT)
// const { data = { lawsuits: [] }, pending, error, refresh } = await useFetch('/api/lawsuits')

// TODO: Review this type
interface DataProps {
  lawsuits: LawsuitType[]
}

const lawsuitsData = data as DataProps;



</script>

<!-- LAWSUITS PAGE -->

<template>
    <div class="min-h-screen">
        <NewLawsuitSheet :refreshData="refresh"/>
        <!-- <ListDataTable :data="localLawsuits" :columns="columns"/> -->
        <!-- go back to api data later  -->
        <ListDataTable :data="lawsuitsData.lawsuits" :columns="columns"/>
    </div>
</template>
