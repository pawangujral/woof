import { RoutesType } from '_utils/types';
import NotFound from '_views/common/not-found';
import Main from '_views/main';

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
