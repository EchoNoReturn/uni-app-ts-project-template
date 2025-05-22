import { defineStore } from 'pinia';

export const userStore = defineStore('user', {
  state: () => ({
    userInfo: null,
  }),
  getters: {},
  actions: {},
})