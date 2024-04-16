<script setup lang="ts">
    const route = useRoute()
</script>

<template>
    <div>Processo {{ route.params.id }}</div>
</template>