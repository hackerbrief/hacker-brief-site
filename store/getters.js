export default {
  // Info
  title: state => {
    return state.info.title
  },
  url: state => {
    return state.info.url
  },
  image: state => {
    return state.info.url
  },
  description: state => {
    return state.info.description
  },
  keywords: state => {
    return state.info.keywords
  },
  username: state => {
    return state.info.username
  },

  // Socials
  facebook: state => {
    return state.info.facebook
  },
  twitter: state => {
    return state.info.twitter
  },
  instagram: state => {
    return state.info.instagram
  },
  youtube: state => {
    return state.info.youtube
  },
  github: state => {
    return state.info.github
  },

  // Languages
  allLanguages: state => {
    return state.languages
  },

  // Blog
  blogTitle: state => {
    return state.blog.title
  },
  blogUrl: state => {
    return state.blog.url
  },
  blogDescription: state => {
    return state.blog.description
  },
  blogImage: state => {
    return state.blog.image
  },
  blogTags: state => {
    return state.blog.tags
  },

  // Directory
  directoryTitle: state => {
    return state.directory.title
  },
  directoryUrl: state => {
    return state.directory.url
  },
  directoryDescription: state => {
    return state.directory.description
  },
  directoryImage: state => {
    return state.directory.image
  },
  directoryTags: state => {
    return state.directory.tags
  },

  // Posts
  allPosts: state => {
    return state.posts
  },
  indexPosts: state => {
    return state.posts.slice(0, 6)
  },
  postBySlug: state => slug => {
    return state.posts.find(obj => obj.slug === slug)
  },

  // Tools
  allTools: state => {
    return state.tools
  },
  indexTools: state => {
    return state.tools.slice(0, 6)
  }
}
