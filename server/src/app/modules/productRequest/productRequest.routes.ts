import express from 'express';

import { ProductRequestController } from './productRequest.controller';

const router = express.Router();
router.post('/create-request', ProductRequestController.createProductRequest);

router.get('/:id', ProductRequestController.getSingleProductRequest);
router.delete('/:id', ProductRequestController.deleteProductRequest);

router.get('/', ProductRequestController.getAllProductRequests);

export const ProductRequestRoutes = router;
