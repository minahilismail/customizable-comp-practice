"use client"
import {create} from 'zustand';

const useComponentStore = create((set) => ({
  color: '#000000', // Default color
  shape: 'rectangle', // Default shape
  size: 'medium', // Default size
  setColor: (color) => set({ color }),
  setShape: (shape) => set({ shape }),
  setSize: (size) => set({ size }),
}));

export default useComponentStore;
