import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
      path: '/Portafolio/Introduccion',
      name: 'Introduccion',
      component: () =>  import('./components/Introduccion.vue'),
    },
    {
      path: '/Portafolio/',
      name: 'Portada',
      component: () => import('./components/Portada.vue')
    },
    {
      path: '/Portafolio/Apuntes',
      name: 'Apuntes',
      component: () => import('./components/Contenidos/Apuntes.vue')
    },
    {
      path: '/Portafolio/Investigaciones',
      name: 'Investigaciones',
      component: () => import('./components/Contenidos/Investigaciones.vue')
      },
    {
    path: '/Portafolio/SdC',
    name: 'SdC',
    component: () => import('./components/Contenidos/SdC.vue')
    },
    {
    path: '/Portafolio/Tareas',
    name: 'Tareas',
    component: () => import('./components/Contenidos/Tareas.vue')
    }
    
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
