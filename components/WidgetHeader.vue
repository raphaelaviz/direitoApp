<script setup lang="ts">

import { Trash2, Pencil } from 'lucide-vue-next';

</script>


<template>
    <div class="absolute right-2 w-full flex justify-end">  
        
        <CustomTooltip content="Edit card">
            <Button variant="ghost" class="hover:scale-110 px-3 py-3 border-none rounded-full">
                <span class="sr-only">Edit card</span>
                <Pencil class="w-4 h-4"/>
            </Button>
        </CustomTooltip>

      </div>
</template>