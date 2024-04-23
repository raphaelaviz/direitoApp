<script setup lang="ts">
import { useToast } from '@/components/ui/toast/use-toast'

const { toast } = useToast()
const dialog = useDialog()
const colorMode = useColorMode()
/*const openEditConfirmation = async (id?: string) => {
  dialog.onOpen({
   isOpen: true, 
   title: `Do stuff to ${id}?`,
   description: `${id} will be editted, deleted or logged`,
   confirmAction: 'edit', 
   payload: id,
  }) 
};*/
const config = useRuntimeConfig()

const edit = async (id?: string) => {
  await useFetch(`${config.public.API_ENDPOINT}/${id}`, {
        method: 'PUT',
        body: {
          plaintiff: "EDITADO 3x",
      },
      })
      refreshNuxtData()
}

</script>

<template>
  <div>
    <div>Tests for now</div>
    <div>
      <Button @click="edit('185')">Edit lawsuit</Button>
    </div>

  </div>
</template>
