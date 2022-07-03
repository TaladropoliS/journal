export default {
    name: 'diario',
    component: () => import(/* webpackChunkName: "diario" */ '@/modules/diario/layouts/DiarioLayout.vue'),
    children: [
        {
            path: '',
            name: 'no-entrada',
            component: () => import(/* webpackChunkName: "diario-no-entrada" */ '@/modules/diario/views/NoEntradaSeleccionada'),
        },
        {
            path: ':id',
            name: 'entrada',
            component: () => import(/* webpackChunkName: "diario-no-entrada" */ '@/modules/diario/views/EntradaView'),
        },
    ]
}