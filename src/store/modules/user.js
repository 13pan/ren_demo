import { login } from '@/api/user'
const state = {
  token: null
}
const mutations = {
  setToken (state, paylod) {
    state.token = paylod
  }
}
const actions = {
  // 登录
  async login (context, data) {
    try {
      const res = await login(data)
      context.commit('setToken', res.data.data)
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
