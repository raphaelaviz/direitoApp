<script setup lang="ts">

  import { Bell, Pencil } from 'lucide-vue-next';
  const config = useRuntimeConfig()
   const route = useRoute()
    
   const { data , pending, error, refresh } = await useFetch(`${config.public.API_ENDPOINT}/${route.params.id}`);


</script>

<template>
    <div class="min-h-screen space-y-10">
        <div class="flex justify-between items-center h-20 bg-green-100 p-3 px-6 rounded-lg">
             <div>
                 {{ data }}
             </div>
             <div class="flex space-x-2">
                <CustomTooltip content="Edit information">
                    <Button variant="ghost" class="hover:scale-110">
                        <span class="sr-only">Edit information</span>
                        <Pencil />
                    </Button>
                </CustomTooltip>
                <CustomTooltip content="Set notifications">
                    <Button variant="ghost" class="hover:scale-110">
                        <span class="sr-only">Set notifications</span>
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