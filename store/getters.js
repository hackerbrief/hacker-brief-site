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

  // Socials
  username: state => {
    return state.socials.username
  },
  facebook: state => {
    return state.socials.facebook
  },
  twitter: state => {
    return state.socials.twitter
  },
  instagram: state => {
    return state.socials.instagram
  },
  youtube: state => {
    return state.socials.youtube
  },
  github: state => {
    return state.socials.github
  },

  // Languages
  languages: state => {
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
  posts: state => {
    return state.posts
  },
  indexPosts: state => {
    return state.posts.slice(0, 6)
  },
  postBySlug: state => slug => {
    return state.posts.find(obj => obj.slug === slug)
  },

  // Tools
  tools: state => {
    return state.tools
  },
  indexTools: state => {
    return state.tools.slice(0, 6)
  }
}
