import { defineStore } from 'pinia';
import { Region } from '@/types.ts';
import { config } from '@/config.ts';
import i18n from '@/locales';

type state = {
    language: Region,
    region: Region;
    maxMark: number;
};
const regionMaxMark: Record<Region, number> = {
    uk: 12,
    ru: 5,
    kz: 5,
};
export const useRegionStore = defineStore('region', {
    state: (): state => ({
        language: config.startLanguage as Region,
        region: config.startRegion as Region,
        maxMark: config.startMaxMark,
    }),
    actions: {
        setLanguage(region: Region) {
            this.language = region;
            i18n.global.locale.value = region
        },
        setRegion(region: Region) {
            this.region = region;
            this.maxMark = regionMaxMark[region];
        },
    },
});
