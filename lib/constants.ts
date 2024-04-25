
import { 
  
  AlarmClock,
  LayoutDashboard, 
  BookText, 
  CalendarRange,
  Scale,
} from 'lucide-vue-next';

export const sideBarButtons = {
    button1: {
        name: "Dashboard",
        route: "/dashboard",
        icon: LayoutDashboard
    },
    button2: {
        name: "Lawsuits",
        route: "/lawsuits",
        icon: BookText
    },
    button3: {
        name: "Deadlines",
        route: "/deadlines",
        icon: AlarmClock
    },
     button4: {
         name: "Precedents",
         route: "/precedents",
         icon: Scale
     },
     button5: {
         name: "Calendar",
         route: "/calendar",
         icon: CalendarRange
     }
};

export const groups = [
    {
      label: 'Civil cases',
      value: 'Civil cases',
    },
    {
      label: 'Criminal cases',
      value: 'Criminal cases',
    },
    {
      label: 'Administrative cases',
      value: 'Administrative cases',
    },
    {
      label: 'Employment Law',
      value: 'Employment Law',
    },
  ]
  
  export const statuses = [
    {
      label: 'Waiting for X',
      value: 'Waiting for X',
    },
    {
      label: 'Waiting for Y',
      value: 'Waiting for Y',
    },
    {
      label: 'Deadline for Z',
      value: 'Deadline for Z',
    },
  ]
  
  export const priorities = [
    {
      label: 'Low',
      value: 'Low',
    },
    {
      label: 'Medium',
      value: 'Medium',
    },
    {
      label: 'High',
      value: 'High',
    },
    {
      label: 'Critic',
      value: 'Critic',
    },
  ]
