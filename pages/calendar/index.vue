<script setup lang="ts">

import { useToast } from '@/components/ui/toast/use-toast'
const { toast } = useToast()

</script>

<template>
  <div>Toaster Test</div>
  <div>
    <Button @click="toast({
        description: 'New lawsuit created.',
      });">Open toaster</Button>
  </div>
</template>