<script setup lang="ts">

import processos from '@/lib/dummy/processos.json'

// used only to populate the db
const onClick = async () => {
    
    for (const lawsuits of processos) {
        await useFetch("http://localhost:3000/api/lawsuits", {
            method: "POST",
            body: {
                number: lawsuits.number,
                plaintiff: lawsuits.plaintiff,
                defendant: lawsuits.defendant,
                priority: lawsuits.priority,
                status: lawsuits.status
            },
        });
    }
};
</script>

<template>
    <div>
        <!-- <Button @click="onClick" class="bg-pink-200">Send Lawsuits</Button> -->
    </div>
</template>
