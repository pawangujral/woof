import Main from '_views/main';
import NotFound from '_views/common/not-found';
import { RoutesType } from '_utils/types';

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