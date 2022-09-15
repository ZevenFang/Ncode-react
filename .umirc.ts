import { defineConfig } from 'umi';

export default defineConfig({
  title: 'Ncode企业级低代码平台',
  nodeModulesTransform: {
    type: 'none',
  },
  locale: { antd: true },
  routes: [
    { exact: true, path: '/login', component: '@/pages/user/login' },
    { exact: true, path: '/products', component: '@/pages/products' },
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        {
          exact: true,
          path: '/dashboard/statistics',
          component: '@/pages/dashboard/statistics',
        },
        {
          path: '/online',
          component: '@/layouts/content',
          routes: [
            {
              exact: true,
              path: '/online/ncform',
              component: '@/pages/online/ncform',
            },
          ],
        },
      ],
    },
  ],
  links: [{ rel: 'icon', href: 'logo.jpg' }],
  fastRefresh: {},
});
