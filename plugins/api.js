export default ({ $axios }, inject) => {
  inject('fetchConfig', () => {
    return $axios.$get(`${process.env.apiUrl}/${process.env.configUrl}`)
  })
  inject('fetchPosts', () => {
    return $axios.$get(`${process.env.apiUrl}/${process.env.postsUrl}`)
  })
  inject('fetchTools', () => {
    return $axios.$get(`${process.env.apiUrl}/${process.env.toolsUrl}`)
  })
  inject('fetchArticle', id => {
    return $axios.$get(
      `${process.env.apiUrl}/${process.env.articleUrl}/${id}.json`
    )
  })
}
