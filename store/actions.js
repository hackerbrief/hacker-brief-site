export default {
  nuxtServerInit: async function({ dispatch }) {
    await dispatch('getConfig')
    await dispatch('getPosts')
    await dispatch('getTools')
  },
  getConfig: async function({ commit, error }) {
    const res = await this.$fetchConfig()
    commit('SET_INFO', res.info)
    commit('SET_LANGUAGES', res.languages)
    commit('SET_BLOG', res.blog)
    commit('SET_DIRECTORY', res.directory)
  },
  getPosts: async function({ commit, error }) {
    const res = await this.$fetchPosts()
    commit('SET_POSTS', res)
  },
  getTools: async function({ app, commit, error }) {
    const res = await this.$fetchTools()
    // const data = _.sortBy(res, ['title'])
    commit('SET_TOOLS', data)
  }
}
