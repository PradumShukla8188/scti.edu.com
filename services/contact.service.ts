'use server';

import { apiClient } from '@/lib/apiClient';

export async function submitContactQuery(data: { name: string; email: string; phone?: string; subject: string; message: string }) {
  try {
    const response = await apiClient.post('/contact', data);
    return response.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || 'Failed to submit contact query');
  }
}
