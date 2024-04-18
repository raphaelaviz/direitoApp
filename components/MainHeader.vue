<script setup lang="ts">
import { Bell, User } from 'lucide-vue-next';


</script>

<template>
    <header class="flex justify-between px-8 py-4 items-center border-[1px] rounded-lg h-16">
        <div class="flex items-center justify-center">
            <!-- <div>
               ROUTE.PATH TO GO HERE
            </div> -->
        </div>
        <div>
            <Input placeholder="Search lawsuit..." class="p-4 rounded-full w-80"/>
        </div>

        <div class="space-x-2">
            
            <ToggleMode/>

            <CustomTooltip content="Notifications">
                <Button variant="outline" class="rounded-full w-9 h-9 px-1 py-1">
                    <Bell class="w-5 h-5"/>
                </Button>
            </CustomTooltip>

            <CustomTooltip content="User settings">
                <Button variant="outline" class="rounded-full w-9 h-9 px-1 py-1">
                    <User class="w-5 h-5" />
                </Button>
            </CustomTooltip>
                
        </div>

    </header>
</template>