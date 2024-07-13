import { authenticationAPI } from '@/API/journal/AuthenticationAPI.ts';
import { useAuthenticationStore } from '@/store/AuthenticationStore.ts';

export async function useAuthentication() {
    const authenticationStore = useAuthenticationStore();
    const jwt = localStorage.getItem('jwt');
    if (!jwt) return authenticationStore.setIsAuthentication(false);
    const isValidToken = await authenticationAPI.testAuthenticationToken(jwt);
    if(!isValidToken) return authenticationStore.setIsAuthentication(false);

    authenticationStore.setIsAuthentication(true);
    authenticationAPI.setAuthenticationToken(jwt);
}
