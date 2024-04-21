<script setup lang="ts">
import { useDialog } from '@/composables/useDialog';

const dialog = useDialog();
import 'gridstack/dist/gridstack.min.css';
import { GridStack } from 'gridstack';
// https://github.com/gridstack/gridstack.js/blob/master/doc/README.md#grid-options



onMounted(() => {
  GridStack.init({
  float: true,
  cellHeight: '200px'
}) 
});
  
          
</script>
<template>
  
    <DashboardToolbar/>
    

    <!-- <DemoResizablePanel/> -->
    <div class="grid-stack absolute flex bg-gray-100 dark:bg-gray-900 rounded-lg">

    <WrappedWidget title="Next hearings" class="bg-blue-200" size="5">
      <div class="flex flex-col">
        <span>19/04/2024 - 09:15</span>
        <span>23/04/2024 - 11:30</span>
        <span>24/04/2024 - 10:00</span>
      </div>
    </WrappedWidget>

    <WrappedWidget 
      title="Low priority" 
      class="bg-purple-200" 
      size="2" 
      content="17"
    />

    <WrappedWidget 
      title="Favorable decisions this year" 
      class="bg-emerald-200" 
      size="3"
      content="7"
    />
    <WrappedWidget 
      title="Favorite cases" 
      class="bg-yellow-200" 
      size="2"
      content="3"
    />
    <WrappedWidget 
      title="Waiting for decision" 
      class="bg-purple-200" 
      size="2"
      content="16"
    />
    <WrappedWidget 
      title="Labor Law Cases" 
      class="bg-purple-300" 
      size="2"
      content="11"
    />
    <WrappedWidget 
      title="Reminder" 
      class="bg-yellow-300" 
      size="3"
      content="Call Pedro ASAP"
    />
    <WrappedWidget 
      title="Next deadlines" 
      class="bg-red-400" 
      size="5"
      content="Bob Johnson' case: Appeal "
    />
    <WrappedWidget 
      title="Other stuff" 
      class="bg-blue-300" 
      size="2"
    />
    <WrappedWidget 
      title="Other stuff" 
      class="bg-pink-300" 
      size="3"
    />
    <WrappedWidget 
      title="Other stuff" 
      class="bg-orange-300" 
      size="4"
    />
    <WrappedWidget 
      title="Other stuff" 
      class="bg-green-300" 
      size="2"
    />
    <WrappedWidget 
      title="Other stuff" 
      class="bg-red-300" 
      size="1"
    />

    </div>


    </template>