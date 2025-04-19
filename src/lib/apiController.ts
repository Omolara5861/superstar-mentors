// lib/apiController.ts
import apiClient from './apiClient';
import { AxiosRequestConfig } from 'axios';

class ApiController {
  // GET request
  async get<T>(endpoint: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await apiClient.get(endpoint, config);
      return response.data;
    } catch (error) {
      console.error('GET request error:', error);
      throw error;
    }
  }

  // POST request
  async post<T>(endpoint: string, data: any, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await apiClient.post(endpoint, data, config);
      return response.data;
    } catch (error) {
      console.error('POST request error:', error);
      throw error;
    }
  }

  // PUT request
  async put<T>(endpoint: string, data: any, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await apiClient.put(endpoint, data, config);
      return response.data;
    } catch (error) {
      console.error('PUT request error:', error);
      throw error;
    }
  }

  // DELETE request
  async delete<T>(endpoint: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await apiClient.delete(endpoint, config);
      return response.data;
    } catch (error) {
      console.error('DELETE request error:', error);
      throw error;
    }
  }
}

// Export a singleton instance of the controller
export const apiController = new ApiController();
