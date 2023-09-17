export const navbardData = [
  {
    link: '/dashboard/clientes',
    label: 'Clientes',
    icon: 'person',
  },
  {
    link: '/dashboard',
    label: 'Abogados',
    icon: 'groups',
  },
  {
    link: '/dashboard',
    label: 'Casos Legales',
    icon: 'cases',
    subItems: [
      { label: 'Casos abiertos',link: '/ruta1/opcion1' },
      { label: 'Casos archivados',link: '/ruta1/opcion2' },
    ]
  },
  {
    link: '/dashboard',
    label: 'Eventos',
    icon: 'event',
  },
  {
    link: '/dashboard',
    label: 'Tareas',
    icon: 'task',
  },
];
