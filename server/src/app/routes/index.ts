import express from 'express';

import { AdminRoutes } from '../modules/admin/admin.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { CartRoutes } from '../modules/cart/cart.routes';

import { ProductRoutes } from '../modules/product/product.routes';
import { StudentRoutes } from '../modules/student/student.route';
import { ProductRequestRoutes } from '../modules/productRequest/productRequest.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/admins',
    route: AdminRoutes,
  },
  {
    path: '/products',
    route: ProductRoutes,
  },
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/cart',
    route: CartRoutes,
  },
  {
    path: '/productRequest',
    route: ProductRequestRoutes,
  },
];

moduleRoutes.forEach(r => router.use(r.path, r.route));

export default router;
