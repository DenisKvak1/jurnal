import { Region, regionList } from '@/types.ts';
import { useRegionStore } from '@/store/RegionStore.ts';

export function useLocal() {
    const regionStore = useRegionStore();
    if (!regionStore.region) return;

    let language = getLocalStorageLocation();

    if (!language) {
        language = getNavigationLocation() as string;
        if (language) localStorage.setItem('lang', language);
    }

    if (!language) {
        return;
    }
    regionStore.setLanguage(language as Region);
}

function getNavigationLocation() {
    const languages = navigator.languages;
    let language: Region | undefined;
    languages.forEach((currentLanguage) => {
        if (regionList.includes(currentLanguage) && !language) {
            language = currentLanguage as Region;
        }
    });
    return language;
}

function getLocalStorageLocation() {
    return localStorage.getItem('lang');
}
