<template>
  <section id="blog">
    <Header title="BLOG" description="HACKER BRIEF BLOG" />
    <PostGrid :items="posts" :tags="tags" type="post" />
  </section>
</template>

<script>
import Header from '~/components/partials/Header'
import PostGrid from '~/components/posts/PostGrid'

export default {
  components: {
    Header,
    PostGrid
  },
  asyncData({ store }) {
    return {
      posts: store.getters.posts,
      tags: store.getters.blogTags
    }
  },
  head() {
    this.blogSeo()
  }
}
</script>
