import { RoutesType } from '_/utils/types';
import NotFound from '_/views/common/not-found';
import Main from '_/views/main';

export const Routes: RoutesType[] = [
  {
    component: Main,
    path: '/',
    protectedRoute: false,
  },
  {
    component: NotFound,
    path: '*',
    protectedRoute: false,
  },
];
