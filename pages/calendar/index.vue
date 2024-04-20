<script setup lang="ts">
import { useToast } from '@/components/ui/toast/use-toast'

const { toast } = useToast()

const handleDelete = async () => {
  try {
     await useFetch(`/api/lawsuits/153`, {
      method: 'DELETE'
    })

    toast({
      description: 'Lawsuit deleted successfully.',
  
    })
  } catch (error) {
    toast({
      description: 'Failed to delete lawsuit.',

    })
  }
}

</script>

<template>
  <div>
    <div>Tests for now</div>
    <div>
      <Button @click="handleDelete">Delete Lawsuit</Button>
    </div>

  </div>
</template>
