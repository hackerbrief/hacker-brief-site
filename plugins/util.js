export default ({ app }, inject) => {
  inject('titleSearch', (obj, term) => {
    return obj.title.toLowerCase().includes(term.toLowerCase())
  })
  inject('keywordSearch', (obj, term) => {
    return obj.keywords.toLowerCase().includes(term.toLowerCase())
  })
  inject('tagFilter', (items, tag) => {
    return items.filter(obj => obj.tag === tag)
  })
  inject('tagsFilter', (items, tag) => {
    return items.filter(obj => obj.tags.includes(tag))
  })
}
