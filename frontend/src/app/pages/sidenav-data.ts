export const navbardData = [
  {
    link: '/dashboard/abogado',
    label: 'Abogados',
    icon: 'groups',
    role: "ADMIN",
    subItems: [
      { label: 'Roles',link: '/dashboard/rol' , role: "ADMIN"},
      { label: 'Abogados',link: '/dashboard/abogado', role: "ADMIN" },
    ]
  },
  {
    link: '/dashboard/cliente',
    label: 'Clientes',
    icon: 'person',
    role: "ABOGADO",
  },
  {
    link: '/dashboard/',
    label: 'Casos',
    icon: 'cases',
    role: "ABOGADO",
    subItems: [
      { label: 'Mis casos',link: '/dashboard/casos/miscasos', role: "ABOGADO" },
      { label: 'Mis casos cerrados',link: '/dashboard/casos/miscasos-cerrados', role: "ABOGADO" },
      { label: 'Casos abiertos',link: '/ruta1/opcion2', role: "ADMIN" },
      { label: 'Casos cerrados',link: '/ruta1/opcion3', role: "ADMIN" },
      { label: 'Tipos de casos',link: '/dashboard/tipo-caso', role: "ADMIN" },
    ]
  },
  {
    link: '/dashboard/documento',
    label: 'Documentos',
    icon: 'description',
    role: "ABOGADO",
  },
  {
    link: '/dashboard',
    label: 'Pagos',
    icon: 'payment',
    role: "ABOGADO",
    subItems: [
      { label: 'Pendientes de pago',link: '/dashboard/pago', role: "ABOGADO" },
      { label: 'Casos pagados',link: '/dashboard/pago/finalizado', role: "ABOGADO" }
    ],
  },
  {
    link: '/dashboard',
    label: 'Eventos',
    icon: 'event',
    role: "ABOGADO",
    subItems: [
      { label: 'Mis eventos',link: '/dashboard/evento', role: "ABOGADO" },
      { label: 'Tipos de eventos',link: '/dashboard/tipo-evento', role: "ADMIN" }
    ],
  }
];
