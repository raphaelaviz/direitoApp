import { defineStore } from 'pinia';


// confirmActions: which function to call
// payload: which parameter to be used in those functions
interface State {
  isOpen: boolean;
  title: string;
  description: string;
  confirmAction?: 'delete' | 'edit' | 'log' | null; 
  payload: any;
}

export const useDialog = defineStore('dialog', {
  state: (): State => ({
    isOpen: false,
    title: '',
    description: '',
    confirmAction: null, 
    payload: null
  }),
  
  actions: {
    onOpen(options?: State) {
      this.isOpen = true;
      if (options) {
        this.title = options.title || '';
        this.description = options.description || '';
        this.confirmAction = options.confirmAction ?? null;
        this.payload = options.payload ?? null;
      }
    },
    onClose() {
      this.isOpen = false;
    },
  },
});
