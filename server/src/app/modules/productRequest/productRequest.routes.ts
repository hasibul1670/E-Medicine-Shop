import express from 'express';

import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { ProductRequestController } from './productRequest.controller';



const router = express.Router();
router.post(
  '/create-request',
  ProductRequestController.createProductRequest
);

router.get('/:id', ProductRequestController.getSingleProductRequest);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  ProductRequestController.deleteProductRequest
);

router.get('/', ProductRequestController.getAllProductRequests);

export const ProductRequestRoutes = router;
