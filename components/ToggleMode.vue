<script setup lang="ts">

import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Moon, Sun } from 'lucide-vue-next'
const colorMode = useColorMode()
</script>

<template>
  <DropdownMenu>
    <CustomTooltip content="Toggle Mode">
      <DropdownMenuTrigger as-child>
        <Button variant="outline" class="rounded-full w-9 h-9 px-1 py-1">
          <Sun  class="h-[1.2rem] w-[1.2rem] rotate-0 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon class="absolute h-[1.2rem] w-[1.2rem] rotate-180 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span class="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        <DropdownMenuItem @click="colorMode.preference = 'light'">
          Light
        </DropdownMenuItem>
        <DropdownMenuItem @click="colorMode.preference = 'dark'">
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem @click="colorMode.preference = 'system'">
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </CustomTooltip>
  </DropdownMenu>
</template>