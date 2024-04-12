
import { AlarmClock, LayoutDashboard, BookText } from 'lucide-vue-next';

export const sideBarButtons = {
    button1: {
        name: "Painel",
        route: "/painel",
        icon: LayoutDashboard
    },
    button2: {
        name: "Processos",
        route: "/processos",
        icon: BookText
    },
    button3: {
        name: "Prazos",
        route: "/prazos",
        icon: AlarmClock
    },
     button4: {
         name: "Button 4",
         route: "/quatro",
         icon: BookText
     },
     button5: {
         name: "Button 5",
         route: "/cinco",
         icon: BookText
     }
};

export const groups = [
    {
      label: 'Causas Civis',
      value: 'Causas Civis',
    },
    {
      label: 'Causas Penais',
      value: 'Causas Penais',
    },
    {
      label: 'Extrajudiciais',
      value: 'Extrajudiciais',
    },
    {
      label: 'Causas Trabalhistas',
      value: 'Causas Trabalhistas',
    },
  ]
  
  export const statuses = [
    {
      label: 'Aguardando X',
      value: 'Aguardando X',
    },
    {
      label: 'Aguardando Y',
      value: 'Aguardando Y',
    },
    {
      label: 'Prazo para Z',
      value: 'Prazo para Z',
    },
  ]
  
  export const priorities = [
    {
      label: 'Baixa',
      value: 'Baixa',
    },
    {
      label: 'Média',
      value: 'Média',
    },
    {
      label: 'Alta',
      value: 'Alta',
    },
    {
      label: 'Crítica',
      value: 'Crítica',
    },
  ]
