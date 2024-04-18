<script setup>
import { Trash2, Pencil, PlusCircleIcon  } from 'lucide-vue-next';

</script>

<template>
    <div class="flex justify-between border rounded-lg p-2">

        <div class="space-x-1">
        <Button variant="ghost">
            <PlusCircleIcon class="w-3 h-3 mr-2"/>
            New card
        </Button>
        <Button variant="ghost">2</Button>
        <Button variant="ghost">3</Button>
        </div>
        <div class="space-x-1">
        <Button variant="ghost">4</Button>
        <Button variant="ghost">5</Button>
        <Button variant="ghost">6</Button>
        </div>
        </div>
        <div class="flex items-center justify-center grid-rows-3 mt-10 space-x-5">
</div>

</template>