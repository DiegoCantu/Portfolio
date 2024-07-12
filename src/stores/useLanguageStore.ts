import { defineStore } from 'pinia';

export const useLanguageStore = defineStore('language', {
    state: () => ({
        isEnglish: false,
    }),
    actions: {
        toggleLanguage() {
            this.isEnglish = !this.isEnglish;
        },
    },
});
