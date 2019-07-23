export default ({ store }, inject) => {
  // Home Page
  inject('homeSeo', () => {
    return {
      title: `Home | ${store.getters.title}`,
      meta: [
        {
          name: 'description',
          hid: 'description',
          content: store.getters.description
        },
        { name: 'keywords', hid: 'keywords', content: store.getters.keywords },
        { name: 'og:title', content: `Home | ${store.getters.title}` },
        { name: 'og:description', content: store.getters.description },
        { name: 'og:type', content: 'website' },
        { name: 'og:url', content: store.getters.url },
        { name: 'og:image', content: store.getters.image },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: store.getters.username },
        { name: 'twitter:title', content: `Home | ${store.getters.title}` },
        { name: 'twitter:description', content: store.getters.description },
        { name: 'twitter:image', content: store.getters.image },
        { name: 'twitter:image:alt', content: 'Hacker Brief Logo' }
      ]
    }
  })

  // Blog Page
  inject('blogSeo', () => {
    return {
      title: store.getters.blogTitle,
      meta: [
        {
          name: 'description',
          hid: 'description',
          content: store.getters.blogDescription
        },
        { name: 'keywords', hid: 'keywords', content: store.getters.keywords },
        { name: 'og:title', content: store.getters.blogTitle },
        { name: 'og:description', content: store.getters.blogDescription },
        { name: 'og:type', content: 'website' },
        { name: 'og:url', content: store.getters.blogUrl },
        { name: 'og:image', content: store.getters.blogImage },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: store.getters.username },
        { name: 'twitter:title', content: store.getters.blogTitle },
        { name: 'twitter:description', content: store.getters.blogDescription },
        { name: 'twitter:image', content: store.getters.blogImage },
        { name: 'twitter:image:alt', content: 'Hacker Brief Logo' }
      ]
    }
  })

  // Post Article Page
  inject('postSeo', post => {
    return {
      title: `${post.title} | Hacker Brief`,
      meta: [
        { name: 'description', hid: 'description', content: post.description },
        { name: 'keywords', hid: 'keywords', content: store.getters.keywords },
        { name: 'og:title', content: `${post.title} | Hacker Brief` },
        { name: 'og:description', content: post.description },
        { name: 'og:type', content: 'website' },
        { name: 'og:url', content: `${store.getters.blogUrl}/${post.slug}` },
        { name: 'og:image', content: post.images.sq },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: store.getters.username },
        { name: 'twitter:title', content: `${post.title} | Hacker Brief` },
        { name: 'twitter:description', content: post.description },
        { name: 'twitter:image', content: post.images.sq },
        { name: 'twitter:image:alt', content: 'Hacker Brief Logo' }
      ]
    }
  })

  // Directory Page
  inject('directorySeo', () => {
    return {
      title: store.getters.directoryTitle,
      meta: [
        {
          name: 'description',
          hid: 'description',
          content: store.getters.directoryDescription
        },
        { name: 'keywords', hid: 'keywords', content: store.getters.keywords },
        { name: 'og:title', content: store.getters.directoryTitle },
        { name: 'og:description', content: store.getters.directoryDescription },
        { name: 'og:type', content: 'website' },
        { name: 'og:url', content: store.getters.directoryUrl },
        { name: 'og:image', content: store.getters.directoryImage },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: store.getters.username },
        { name: 'twitter:title', content: store.getters.directoryTitle },
        {
          name: 'twitter:description',
          content: store.getters.directoryDescription
        },
        { name: 'twitter:image', content: store.getters.directoryImage },
        { name: 'twitter:image:alt', content: 'Hacker Brief Logo' }
      ]
    }
  })
}
