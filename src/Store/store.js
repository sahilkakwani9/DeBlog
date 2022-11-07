import create from 'zustand'

const useStore = create((set) => ({
  currentAccount: "all",
  writeBlog: false,
  detailBlogs: "",
  setCurrentAccount: (value) => set({currentAccount: value}),
  setWriteBlog: (value) => set({writeBlog: value}),
  setDetailBlogs: (value) => set({detailBlogs: value}),
}))

export default useStore;