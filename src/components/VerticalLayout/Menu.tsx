interface MenuItemsProps {
  id: number;
  novidade?: any;
  label: string;
  icon?: string;
  link?: string;
  badge?: string;
  badgecolor?: string;
  subItems?: any;
  isHeader?: boolean;
}

const menuItems: Array<MenuItemsProps> = [
  {
    id: 1,
    label: "Reporte",
    isHeader: true,
  },
  {
    id: 2,
    label: "Reporte Asistencia",
    icon: "calendar",
    link: "/reporte-asistencia",
  },
  {
    id: 3,
    label: "Applications",
    isHeader: true,
  },
  {
    id: 4,
    novidade: false,
    label: "Sistema",
    icon: "mail",
    link: "/#",
    subItems: [
      {
        id: 9,
        label: "Inbox",
        link: "/inbox",
        parentId: 4,
      },
      {
        id: 10,
        label: "Read Email",
        link: "/read-email",
        parentId: 4,
      },
    ],
  },
];

export { menuItems };
