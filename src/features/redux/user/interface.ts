export interface AuthState {
    user: UserProfileResponseData | null;
    isLoggedIn: boolean;
    loading: boolean;
    error: null | string;
}