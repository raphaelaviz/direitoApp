import { defineStore } from 'pinia';

export const useDialog = defineStore('dialog', {
  state: () => ({
    isOpen: false,
    title: '',
    description: '',
  }),
  actions: {
    onOpen(options?: { title?: string; description?: string }) {
      this.isOpen = true;
      if (options) {
        this.title = options.title || '';
        this.description = options.description || '';
      }
    },
    onClose() {
      this.isOpen = false;
    },
  },
});