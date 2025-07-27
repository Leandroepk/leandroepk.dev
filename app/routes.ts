import {
  index,
  layout,
  prefix,
  route,
  type RouteConfig,
} from '@react-router/dev/routes'

export default [
  layout('pages/public/layout.tsx', [
    route('login', 'pages/public/pages/login/router.tsx'),
    route('register', 'pages/public/pages/register/router.tsx'),
  ]),
  layout('pages/private/layout.tsx', [
    index('pages/private/pages/home/router.tsx'),
    route('about', 'pages/private/pages/about/router.tsx'),
    route('dashboard', 'pages/private/pages/dashboard/router.tsx'),
    ...prefix('projects', [
      route('logos', 'pages/private/pages/projects/pages/logos/router.tsx'),
      route('manager', 'pages/private/pages/projects/pages/manager/router.tsx'),
      route('cutz', 'pages/private/pages/projects/pages/cutz/router.tsx'),
      route('wpp-bot', 'pages/private/pages/projects/pages/WPPBot/router.tsx'),
    ]),
    ...prefix('configs', [
      route('users', 'pages/private/pages/configs/pages/users/router.tsx'),
      route('perms', 'pages/private/pages/configs/pages/perms/router.tsx'),
      route('me', 'pages/private/pages/configs/pages/me/router.tsx'),
    ]),
  ]),
  route('*', 'pages/public/pages/404/router.tsx'),
] satisfies RouteConfig
