import { create } from 'zustand';
import { InfoType } from './types/types';

interface ModelState {
    isVisible: boolean;
    selectedInfo: InfoType | null;
    showModal: (info: InfoType) => void;
    closeModal: () => void;
}

export const useModalStore = create<ModelState>((set) => ({
    isVisible: false,
    selectedInfo: null,
    showModal: (info: InfoType) => set({ isVisible: true, selectedInfo: info}),
    closeModal: () => set({ isVisible: false, selectedInfo: null}),
}));