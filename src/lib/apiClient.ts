// lib/apiClient.ts
import axios from 'axios';
import Cookies from 'js-cookie';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

// 1️⃣ Attach access token on every request
apiClient.interceptors.request.use((config) => {
  const token = Cookies.get('accessToken');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 2️⃣ Refresh logic on 401
apiClient.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      Cookies.get('refreshToken')
    ) {
      originalRequest._retry = true;
      try {
        const { data } = await axios.post(
          `${BASE_URL}/auth/token/refresh/`,
          { refresh: Cookies.get('refreshToken') },
          { headers: { 'Content-Type': 'application/json' } }
        );
        // update cookies & headers
        Cookies.set('accessToken', data.access, { secure: true, sameSite: 'Lax' });
        apiClient.defaults.headers.Authorization = `Bearer ${data.access}`;
        originalRequest.headers.Authorization = `Bearer ${data.access}`;
        return apiClient(originalRequest);
      } catch (refreshErr) {
        // invalid refresh → force logout
        Cookies.remove('accessToken');
        Cookies.remove('refreshToken');
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;
