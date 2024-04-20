<script setup lang="ts">
    import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
    } from '@/components/ui/resizable'
</script>

<template>
    <ResizablePanelGroup id="demo-group-1" direction="horizontal" class="min-h-screen rounded-lg border">

        <ResizablePanel id="demo-panel-1" :default-size="50">
        <ResizablePanelOptions class="bg-yellow-100"/>
        <ResizablePanelGroup id="demo-group-2" direction="vertical">

          <ResizablePanel id="demo-panel-3" :default-size="31">
            <div class="flex flex-col h-full items-center justify-center p-6 bg-yellow-100">
              <span class="font-semibold text-2xl text-center">Next hearings</span>
              <span class="font-semibold mt-4">15/04/2014 - 14:00</span>
              <span class="font-semibold mt-4">16/04/2014 - 10:00</span>
              <span class="font-semibold mt-4">19/04/2014 - 9:15</span>
            </div>
          </ResizablePanel>

          <ResizableHandle id="demo-handle-1" with-handle />


          <ResizableHandle id="demo-handle-5" with-handle />
          <ResizablePanelOptions class="bg-green-100"/>
          <ResizablePanel id="demo-panel-5" :default-size="31">
            <div class="flex flex-col h-full items-center justify-center p-6 bg-green-100">
              <span class="font-semibold text-2xl text-center">Labor Law cases</span>
              <span class="font-semibold text-3xl mt-4">8</span>
            </div>
          </ResizablePanel>

        </ResizablePanelGroup>
      </ResizablePanel>


      <ResizableHandle id="demo-handle-1" with-handle />

      <ResizablePanel id="demo-panel-2" :default-size="50">
        <ResizablePanelOptions class="bg-yellow-100"/>
        <ResizablePanelGroup id="demo-group-2" direction="vertical">

          <ResizablePanel id="demo-panel-3" :default-size="31">
            <div class="flex flex-col h-full items-center justify-center p-6 bg-yellow-100">
              <span class="font-semibold text-2xl text-center">Favorable decisions</span>
              <span class="font-semibold text-3xl mt-4">7</span>
            </div>
          </ResizablePanel>

          <ResizableHandle id="demo-handle-2" with-handle />

          <ResizablePanelOptions class="bg-pink-100"/>
          <ResizablePanel id="demo-panel-4" :default-size="31">
            <div class="flex flex-col h-full items-center justify-center p-6 bg-pink-100">
              <span class="font-semibold text-2xl text-center">Low priority cases</span>
              <span class="font-semibold text-3xl mt-4">22</span>
            </div>
          </ResizablePanel>

          <ResizableHandle id="demo-handle-5" with-handle />
          <ResizablePanelOptions class="bg-green-100"/>
          <ResizablePanel id="demo-panel-5" :default-size="30">
            <div class="flex flex-col h-full items-center justify-center p-6 bg-green-100">
              <span class="font-semibold text-2xl text-center">Favorites</span>
              <span class="font-semibold text-3xl mt-4">5</span>
            </div>
          </ResizablePanel>

        </ResizablePanelGroup>
      </ResizablePanel>

    </ResizablePanelGroup>
  </template>