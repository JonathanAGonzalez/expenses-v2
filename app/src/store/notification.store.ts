import { create } from "zustand";

type State = {
  isOpenModal: boolean;
};

type Actions = {
  showModal: () => void;
  hiddenModal: () => void;
};

export const useNotifications = create<State & Actions>((set) => ({
  isOpenModal: false,
  showModal: () => set((state) => ({ isOpenModal: !state.isOpenModal })),
  hiddenModal: () => set((state) => ({ isOpenModal: !state.isOpenModal })),
}));
