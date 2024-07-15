import { useAuthenticationStore } from '@/store/AuthenticationStore.ts';
import { useRouter } from 'vue-router';

export function useRequirementAuthentication(invert: boolean = false) {
    const router = useRouter();
    const authStore = useAuthenticationStore();
    const isAuthenticated = authStore.isAuthenticated;

    if (!isAuthenticated && !invert) {
        router.push('/');
    }

    if (isAuthenticated && invert) {
        router.push('/');
    }

    return invert ? !isAuthenticated : isAuthenticated;
}
