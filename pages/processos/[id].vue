<script setup lang="ts">

import { Bell, Pencil } from 'lucide-vue-next';

    const route = useRoute()    

</script>
<!-- TODO: fetch processos/:id -->
<template>
    <div class="min-h-screen space-y-10">
        <div class="flex justify-between items-center h-20 bg-green-100 p-3 px-6 rounded-lg">
             <div>
                 Header com informações gerais do processo <span class="font-bold">{{ route.params.id }}</span>
             </div>
             <div class="flex space-x-2">
                <CustomTooltip content="Editar informações">
                    <Button variant="ghost" class="hover:scale-110">
                        <span class="sr-only">Editar informações</span>
                        <Pencil />
                    </Button>
                </CustomTooltip>
                <CustomTooltip content="Criar notificação">
                    <Button variant="ghost" class="hover:scale-110">
                        <span class="sr-only">Criar notificação</span>
                        <Bell/>
                    </Button>
                </CustomTooltip>
            </div>
        </div>
        <div class="flex space-x-10">
            <div class="w-[64%] h-80 flex items-center justify-center bg-blue-100 rounded-lg">
                Anotações importante sobre processo <span class="font-bold ml-1">{{ route.params.id }}</span>
            </div>
            <div class="w-[33%] h-80 flex items-center justify-center bg-yellow-100 rounded-lg">
                Anotações importante sobre processo <span class="font-bold  ml-1">{{ route.params.id }}</span>
            </div>
        </div>
        <div class="h-40 flex items-center justify-center bg-green-100 p-3 rounded-lg">
            Upload de documentos do processo <span class="font-bold  ml-1">{{ route.params.id }}</span>
        </div>
    </div>
</template>