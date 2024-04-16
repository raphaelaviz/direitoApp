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
  number: z.string().min(2).max(30),
  plaintiff: z.string().min(2).max(30),
  defendant: z.string().min(2).max(30),
  priority: z.string().min(1), //resolve later
  status: z.string().min(1),
}))

const form = useForm({
  validationSchema: formSchema,
})


const onSubmit = form.handleSubmit(async (entries) => {
  try {
   
    await useFetch("http://localhost:3000/api/lawsuits", {
      method: "POST",
      body: {
        number: entries.number,
        plaintiff: entries.plaintiff,
        defendant: entries.defendant,
        priority: entries.priority,
        status: entries.status
      },
    });
    toast({
        description: 'New lawsuit created.',
      });
    await refreshData()
    
  } catch (error) {
    console.error('Error creating lawsuit:', error);
  }
  sheet.onClose()
  console.log('Form submitted!', entries)
})


</script>

<template>

    <form @submit="onSubmit" class="space-y-4">
      <FormField v-slot="{ componentField }" name="number">
        <FormItem>
          <FormControl>
          <FormLabel>Lawsuit number</FormLabel>
          <Input type="text" placeholder="00.000.00" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    
      <FormField v-slot="{ componentField }" name="plaintiff">
        <FormItem>
          <FormLabel>Plaintiff</FormLabel>
          <FormControl>
            <Input type="text"placeholder="Plaintiff's name" v-bind="componentField"/>
          </FormControl>
          <FormMessage />
        </FormItem>
    </FormField>
   
    <FormField v-slot="{ componentField }" name="defendant">
      <FormItem>
        <FormLabel>Defendant</FormLabel>
        <FormControl>
          <Input type="text" placeholder="Defendant's name" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
  </FormField>

  <FormField v-slot="{ componentField }" name="priority">
      <FormItem>
        <FormLabel>Priority</FormLabel>
        <FormControl>
          <CustomSelect :options="priorities" placeholder="Select a priority" v-bind="componentField"/>
        </FormControl>
        <FormMessage />
      </FormItem>
  </FormField>

  <FormField v-slot="{ componentField }" name="status">
      <FormItem>
        <FormLabel>Status</FormLabel>
        <FormControl>
          <CustomSelect :options="statuses" placeholder="Select a status" v-bind="componentField"/>
        </FormControl>
        <FormMessage />
      </FormItem>
  </FormField>

      <div class="flex justify-end">
        <Button type="submit" variant="default" class="mt-16">Create</Button>
      </div>
  </form>

</template>