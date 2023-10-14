import { defineStore } from "pinia";
import { AuthStore } from "../utils";

const authStore = defineStore("auth", {
  state: () =>
    ({
      userInfo: {
        name: "Duc",
        age: 18,
      },
    } as AuthStore),
  actions: {
    setUserInfo: (data: any) => {
      this.userInfo = data;
    },
  },
  getters: {
    getUserInfo: (state) => state.userInfo,
  },
});

export default authStore;
