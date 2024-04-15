<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { priorities, groups, statuses } from '~/lib/constants';
import { FormField } from './ui/form';
import { useToast } from '@/components/ui/toast/use-toast'

const sheet = useSheet()


    const route = useRoute()    
    const { toast } = useToast()
    const config = useRuntimeConfig()

const { refreshData } = defineProps<{ refreshData: () => void }>();


// TODO: Refine validation and change default error message

const formSchema = toTypedSchema(z.object({
  numero: z.string().min(2).max(30),
  requerente: z.string().min(2).max(30),
  requerido: z.string().min(2).max(30),
  prioridade: z.string().min(1), //resolve later
  status: z.string().min(1),
}))

const form = useForm({
  validationSchema: formSchema,
})


const onSubmit = form.handleSubmit(async (entries) => {
  try {
   
    await useFetch("http://localhost:3000/api/processos", {
      method: "POST",
      body: {
        numero: entries.numero,
        requerente: entries.requerente,
        requerido: entries.requerido,
        prioridade: entries.prioridade,
        status: entries.status
      },
    });
    toast({
        description: 'Novo processo criado.',
      });
    await refreshData()
    
  } catch (error) {
    console.error('Error creating processo:', error);
  }
  sheet.onClose()
  console.log('Form submitted!', entries)
})


</script>

<template>

    <form @submit="onSubmit" class="space-y-4">
      <FormField v-slot="{ componentField }" name="numero">
        <FormItem>
          <FormControl>
          <FormLabel>Número do Processo</FormLabel>
          <Input type="text" placeholder="00.000.00" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    
      <FormField v-slot="{ componentField }" name="requerente">
        <FormItem>
          <FormLabel>Requerente</FormLabel>
          <FormControl>
            <Input type="text"placeholder="Nome do requerente" v-bind="componentField"/>
          </FormControl>
          <FormMessage />
        </FormItem>
    </FormField>
   
    <FormField v-slot="{ componentField }" name="requerido">
      <FormItem>
        <FormLabel>Requerido</FormLabel>
        <FormControl>
          <Input type="text" placeholder="Nome do requerido" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
  </FormField>

  <FormField v-slot="{ componentField }" name="prioridade">
      <FormItem>
        <FormLabel>Prioridade</FormLabel>
        <FormControl>
          <CustomSelect :options="priorities" placeholder="Selecione a prioridade" v-bind="componentField"/>
        </FormControl>
        <FormMessage />
      </FormItem>
  </FormField>

  <FormField v-slot="{ componentField }" name="status">
      <FormItem>
        <FormLabel>Status</FormLabel>
        <FormControl>
          <CustomSelect :options="statuses" placeholder="Selecione o status" v-bind="componentField"/>
        </FormControl>
        <FormMessage />
      </FormItem>
  </FormField>

      <div class="flex justify-end">
        <Button type="submit" variant="default" class="mt-16">Adicionar</Button>
      </div>
  </form>

</template>