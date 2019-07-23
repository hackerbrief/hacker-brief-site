export default {
  nuxtServerInit: async function({ dispatch }) {
    await dispatch('getConfig')
    await dispatch('getLanguages')
    await dispatch('getPosts')
    await dispatch('getTools')
  },
  getConfig: async function({ commit }) {
    const res = await this.$fetchConfig()
    commit('SET_INFO', res.info)
    commit('SET_BLOG', res.blog)
    commit('SET_DIRECTORY', res.directory)
  },
  getLanguages: async function({ commit }) {
    const res = await this.$fetchLanguages()
    commit('SET_LANGUAGES', res)
  },
  getPosts: async function({ commit }) {
    const res = await this.$fetchPosts()
    commit('SET_POSTS', res)
  },
  getTools: async function({ commit }) {
    const res = await this.$fetchTools()
    // const data = _.sortBy(res, ['title'])
    commit('SET_TOOLS', res)
  }
}
