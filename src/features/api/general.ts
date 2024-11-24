interface ApiResponse<T> {
  success: boolean;
  data: T;
  total_count: number;
}

interface GetTempPassData {
  email: string;
  expires_in: number;
}

interface LoginResponseData {
  token: {
    access_token: string;
    expires_in: number;
  };
  params: {
    language: string;
    is_new_user: boolean;
  }
}

interface UserProfileResponseData {
  system_id: string;
  serial_id: number;
  role: string;
  email: string;
  nickname: string;
  first_name: string;
  last_name: string;
  bio: string;
  gender: string;
  telegram_id: number;
  vk_id: number;
  birth_date: string;
  phone_number: string;
  avatar_url: string;
  language: string;
  notification_enabled: boolean;
  is_blocked: boolean;
  referral_id: string;
  referral_code: string;
  last_ip: string;
  created_at: string;
  last_login: string;
  is_online: boolean;
  last_online: string;
}