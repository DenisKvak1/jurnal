import { defineStore } from 'pinia';

type state = {
    isAuthenticated: boolean;
};
export const useAuthenticationStore = defineStore('authentication', {
    state: (): state => ({
        isAuthenticated: false,
    }),
    actions: {
        setIsAuthentication(isAuthenticated: boolean): void {
            this.isAuthenticated = isAuthenticated;
        },
    },
});
