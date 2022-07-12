import create from "zustand";
import { UserProps } from "src/models/User";

export interface UseStoreProps {
    user: UserProps | null;
    setUser: (user: any) => void;
}

export const userStore = create<UseStoreProps>((set) => ({
    user: null,
    setUser: (user: any) => set((state) => ({ user })),
}));
