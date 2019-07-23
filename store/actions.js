export default {
  nuxtServerInit: async function({ dispatch }) {
    await dispatch('getConfig')
    await dispatch('getLanguages')
    await dispatch('getPosts')
    await dispatch('getTools')
  },
  getConfig: async function({ commit, error }) {
    await this.$fetchConfig().then(res => {
      commit('SET_INFO', res.info)
      commit('SET_BLOG', res.blog)
      commit('SET_DIRECTORY', res.directory)
    })
  },
  getLanguages: async function({ commit, error }) {
    await this.$fetchLanguages().then(res => {
      commit('SET_LANGUAGES', res)
    })
  },
  getPosts: async function({ commit, error }) {
    await this.$fetchPosts().then(res => {
      commit('SET_POSTS', res)
    })
  },
  getTools: async function({ commit, error }) {
    await this.$fetchTools().then(res => {
      const data = _.sort(res, ['title'])
      commit('SET_TOOLS', data)
    })
  }
}
