<script setup lang="ts">
import { useDialog } from '@/composables/useDialog';

const dialog = useDialog();

import { Trash2, Pencil, PlusCircleIcon  } from 'lucide-vue-next';



</script>
<!-- DEMO PAGE -->
<template>
  <div class="flex flex-col min-h-screen">
    <DashboardToolbar/>
    <DemoResizablePanel/>
  </div>
</template>