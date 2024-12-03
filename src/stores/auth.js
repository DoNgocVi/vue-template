import { defineStore, acceptHMRUpdate } from 'pinia';
export const useAuthStore = defineStore('auth', () => {
    const isLoggedIn = ref(false);
    const info = ref(null);
    const setInfo = (user) => {
        info.value = user;
    };
    const setIsLoggedIn = (value) => {
        isLoggedIn.value = value;
    };
    return {
        isLoggedIn,
        info,
        setInfo,
        setIsLoggedIn,
    };
});
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
