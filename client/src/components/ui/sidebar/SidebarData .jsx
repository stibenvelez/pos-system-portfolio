import { CashIcon, ClipboardIcon, ClipboardListIcon, CubeIcon, CurrencyDollarIcon, ViewGridAddIcon } from "@heroicons/react/outline";

export const SidebarData = [
    {
        title: "Ingresos",
        path: "#",
        icon: <CurrencyDollarIcon className="h-5 w-5" />,
        iconClosed: null,
        iconOpened: null,

        subNav: [
            {
                title: "Nueva venta",
                path: "sales/new-sale",
                icon: null,
                cName: "sub-nav",
            },
            {
                title: "Lista de Ventas",
                path: "sales",
                icon: null,
                cName: "sub-nav",
            },
            {
                title: "Detalle de ventas",
                path: "sales/SalesDetailsPage",
                icon: null,
                cName: "sub-nav",
            },
        ],
    },
    {
        title: "Egresos",
        path: "#",
        icon: <CashIcon className="h-5 w-5" />,
        iconClosed: null,
        iconOpened: null,

        subNav: [
            {
                title: "Nueva egreso",
                path: "egresses/new-egress",
                icon: null,
                cName: "sub-nav",
            },
            {
                title: "Lista de Egresos",
                path: "egresses",
                icon: null,
                cName: "sub-nav",
            },
        ],
    },
    {
        title: "Products",
        path: "#",
        icon: <CubeIcon className="h-5 w-5" />,
        iconClosed: null,
        iconOpened: null,

        subNav: [
            {
                title: "Administrar Productos",
                path: "products",
                icon: null,
                cName: "sub-nav",
            },
            {
                title: "Agregar un producto",
                path: "products/new-product",
                icon: null,
                cName: "sub-nav",
            },
        ],
    },

    {
        title: "Reportes",
        path: "#",
        icon: <ClipboardListIcon className="h-5 w-5" />,
        iconClosed: null,
        iconOpened: null,

        subNav: [
            {
                title: "Reporte de ventas",
                path: "reports/sales-report",
                icon: null,
            },
            {
                title: "Agregar emploado",
                path: "#",
                icon: null,
            },
        ],
    },
    {
        title: "Config",
        path: "#",
        icon: <ViewGridAddIcon className="h-5 w-5" />,
        iconClosed: null,
        iconOpened: null,

        subNav: [
            {
                title: "Empleados",
                path: "employees",
                icon: null,
            },
            {
                title: "Usuarios",
                path: "users",
                icon: null,
            },
            {
                title: "Marcas",
                path: "brands",
                icon: null,
            },

        ],
    },
];
