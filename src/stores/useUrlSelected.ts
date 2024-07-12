import { defineStore } from 'pinia';

export const useUrlSelectedStore = defineStore('url', {
    state: () => ({
        selectedUrl: '', // Propiedad para almacenar la URL seleccionada
    }),
    actions: {
        // Acción para actualizar la URL seleccionada
        updateSelectedUrl(newUrl: string) {
            this.selectedUrl = newUrl;
        },
    },
});
