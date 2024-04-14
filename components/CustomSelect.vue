<script setup>

const props = defineProps({
  options: {
    type: Array,
    required: true
  },
  placeholder: {
    type: String,
    default: "Selecione uma opção"
  }
})
</script>

<template>
    <Select>
      <SelectTrigger class="bg-slate-50">
        <SelectValue :placeholder="placeholder" class="text-gray-500"/>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem v-for="option in options" :key="option.value" :value="option.value">
            {{ option.label }}
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </template>