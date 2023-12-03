export const navbardData = [
  {
    link: '/dashboard/abogado',
    label: 'Abogados',
    icon: 'groups',
    subItems: [
      { label: 'Roles',link: '/dashboard/rol' },
      { label: 'Abogados',link: '/dashboard/abogado' },
    ]
  },
  {
    link: '/dashboard/cliente',
    label: 'Clientes',
    icon: 'person',
  },
  {
    link: '/dashboard/',
    label: 'Casos',
    icon: 'cases',
    subItems: [
      { label: 'Mis casos',link: '/dashboard/casos/miscasos' },
      { label: 'Mis casos cerrados',link: '/dashboard/casos/miscasos' },
      { label: 'Casos abiertos',link: '/ruta1/opcion2' },
      { label: 'Casos cerrados',link: '/ruta1/opcion3' },
      { label: 'Tipos de casos',link: '/dashboard/tipo-caso' },
    ]
  },
  {
    link: '/dashboard',
    label: 'Documentos',
    icon: 'description'
  },
  {
    link: '/dashboard',
    label: 'Pagos',
    icon: 'payment',
    subItems: [
      { label: 'Pendientes de pago',link: '/dashboard/pago' },
      { label: 'Casos pagados',link: '/dashboard/tipo-evento' }
    ],
  },
  {
    link: '/dashboard',
    label: 'Eventos',
    icon: 'event',
    subItems: [
      { label: 'Mis eventos',link: '/dashboard/evento' },
      { label: 'Tipos de eventos',link: '/dashboard/tipo-evento' }
    ],
  }
];
