import axios from 'axios';

export const SendVkId = async (vkId: number) => {
  const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL!}/oauth/vk/app`, { vk_id: vkId });
  return response.data;
};

export const SendTemporaryPassword = async (email: string): Promise<ApiResponse<GetTempPassData>> => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  if (!backendUrl) {
    throw new Error('Backend URL is not defined');
  }

  const response = await axios.post(`${backendUrl}/auth/callback/mail`, { email: email });
  return response.data;
};

export const AcceptCodeWithEmail = async (email: string, password: string): Promise<ApiResponse<LoginResponseData>> => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  if (!backendUrl) {
    throw new Error('Backend URL is not defined');
  }

  const response = await axios.post(`${backendUrl}/auth/login/mail`, { email: email, password: password });
  return response.data;
};

export const LoginWithAccessToken = async (token: string | undefined): Promise<ApiResponse<LoginResponseData>> => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  if (!backendUrl) {
    throw new Error('Backend URL is not defined');
  }

  if (token === undefined || token == '') {
    throw new Error('Invalid token auth');
  }

  const response = await axios.post(`${backendUrl}/oauth/token`, {}, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};