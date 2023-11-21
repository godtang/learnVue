

import { createStore } from 'vuex'; // 使用新的 createStore 函数


const store = createStore({
  state() {
    // 在这里定义你的共享状态
    return {
      user: {},
      jwt:''
    };
  },
  mutations: {
    // 在这里定义修改共享状态的方法
    updateUserInfo(state, userInfo) {
      //console.log("updateUserInfo:" + userInfo['username']);
      state.user = userInfo;
    },
    updateJwt(state, jwt) {
      //console.log("updateJwt:" + jwt);
      state.jwt = jwt;
    }
  }
});

export default store;
