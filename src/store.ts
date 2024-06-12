import { create } from 'zustand';
import { AgentType } from './types/types';

interface ModelState {
    isVisible: boolean;
    selectedInfo: AgentType | null;
    showModal: (info: AgentType) => void;
    closeModal: () => void;
}

export const useModalStore = create<ModelState>((set) => ({
    isVisible: false,
    selectedInfo: null,
    showModal: (info: AgentType) => set({ isVisible: true, selectedInfo: info}),
    closeModal: () => set({ isVisible: false, selectedInfo: null}),
}));