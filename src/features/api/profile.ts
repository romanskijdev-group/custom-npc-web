import axios from 'axios';
import Cookies from 'js-cookie';

export const GetUserProfile = async (): Promise<ApiResponse<UserProfileResponseData>> => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const token = Cookies.get('accessToken');

  if (!backendUrl) {
    throw new Error('Backend URL is not defined');
  }

  if (token === undefined || token == '') {
    throw new Error('Invalid token auth');
  }

  const response = await axios.get(`${backendUrl}/api/control/user`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};