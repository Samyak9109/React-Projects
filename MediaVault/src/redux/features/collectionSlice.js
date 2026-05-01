import { createSlice } from "@reduxjs/toolkit";

const load = () => {
  try { return JSON.parse(localStorage.getItem("mv_collection")) || []; }
  catch { return []; }
};

const collectionSlice = createSlice({
  name: "collection",
  initialState: { items: load() },
  reducers: {
    addItem(state, action) {
      const exists = state.items.find(i => i.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
        localStorage.setItem("mv_collection", JSON.stringify(state.items));
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter(i => i.id !== action.payload);
      localStorage.setItem("mv_collection", JSON.stringify(state.items));
    },
  },
});

export const { addItem, removeItem } = collectionSlice.actions;
export default collectionSlice.reducer;
