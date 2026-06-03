'use server';

import { apiClient } from '@/lib/apiClient';

export async function getPlans() {
  const response = await apiClient.get('/payments/plans');
  return response.data;
}

export async function createOrder(data: { fullName: string; email: string; phoneNumber: string; instituteName: string; planId: string }) {
  const response = await apiClient.post('/payments/create-order', data);
  return response.data;
}

export async function verifyPayment(data: {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}) {
  const response = await apiClient.post('/payments/verify', data);
  return response.data;
}

export async function createDonation(data: { fullName: string; email?: string; phoneNumber?: string; amount: number }) {
  const response = await apiClient.post('/payments/create-donation', data);
  return response.data;
}

export async function verifyDonation(data: {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}) {
  const response = await apiClient.post('/payments/verify-donation', data);
  return response.data;
}
