/* eslint-disable no-unused-vars */

import { IOrder } from './order.interface';
import { Order } from './order.model';

const createOrder = async (payload: IOrder): Promise<IOrder> => {
  const result = await Order.create(payload);
  return result;
};

const getAllOrders = async (email: string) => {
  const result = await Order.find({ email: email }).populate('course');
  return result;
};

const getSingleOrder = async (id: string) => {
  const result = await Order.findById(id).populate('course');

  return result;
};

const deleteOrder = async (id: string) => {
  const result = await Order.findByIdAndDelete(id);
  return result;
};

export const OrderService = {
  createOrder,
  deleteOrder,
  getAllOrders,
  getSingleOrder,
};
