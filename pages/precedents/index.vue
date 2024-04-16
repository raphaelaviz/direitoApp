<script setup lang="ts">

const onClick = async () => {

    await useFetch("http://localhost:3000/api/lawsuits", {
      method: "POST"})
}
</script>

<template>
    <div>
        <Button @click="onClick" class="bg-pink-200">OI</Button>
    </div>
</template>