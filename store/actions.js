export default {
  nuxtServerInit: async function({ dispatch }) {
    await dispatch('getConfig')
    await dispatch('getPosts')
    await dispatch('getTools')
  },
  getConfig: async function({ commit, error }) {
    await this.$fetchConfig().then(res => {
      commit('SET_INFO', res.info)
      commit('SET_SOCIALS', res.socials)
      commit('SET_LANGUAGES', res.languages)
      commit('SET_BLOG', res.blog)
      commit('SET_DIRECTORY', res.directory)
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
