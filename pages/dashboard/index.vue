<script setup lang="ts">
import { useDialog } from '@/composables/useDialog';

const dialog = useDialog();

import { GridStack } from 'gridstack';

// https://github.com/gridstack/gridstack.js/blob/master/doc/README.md#grid-options

onBeforeMount(() => {
            GridStack.init({ 
              float: true,
              cellHeight: "200px",
            });
          });
</script>
<template>
  
    <DashboardToolbar/>
  
  <div class="grid-stack relative flex bg-gray-100 dark:bg-gray-900 rounded-lg">

    <Widget title="Next hearings" class="bg-blue-200" size="5">
      <div class="flex flex-col">
        <span>19/04/2024 - 09:15</span>
        <span>23/04/2024 - 11:30</span>
        <span>24/04/2024 - 10:00</span>
      </div>
    </Widget>

    <Widget 
      title="Low priority" 
      class="bg-purple-200" 
      size="2" 
      content="17"
    />

    <Widget 
      title="Favorable decisions this year" 
      class="bg-emerald-200" 
      size="3"
      content="7"
    />
    <Widget 
      title="Favorite cases" 
      class="bg-yellow-200" 
      size="2"
      content="3"
    />
    <Widget 
      title="Waiting for decision" 
      class="bg-purple-200" 
      size="2"
      content="16"
    />
    <Widget 
      title="Labor Law Cases" 
      class="bg-purple-300" 
      size="2"
      content="11"
    />
    <Widget 
      title="Reminder" 
      class="bg-yellow-300" 
      size="3"
      content="Call Pedro ASAP"
    />
    <Widget 
      title="Next deadlines" 
      class="bg-red-400" 
      size="5"
      content="Bob Johnson' case: Appeal "
    />
    <Widget 
      title="Other stuff" 
      class="bg-pink-200" 
      size="7"
      
    />

  </div>


</template>