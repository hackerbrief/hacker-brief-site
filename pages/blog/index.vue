<template>
  <section id="blog">
    <Header title="BLOG" />
    <Grid :items="posts" :tags="tags" type="post" />
  </section>
</template>

<script>
import Header from '~/components/partials/Header'
import Grid from '~/components/partials/Grid'

export default {
  components: {
    Header,
    Grid
  },
  asyncData({ store }) {
    return {
      posts: store.getters.allPosts,
      tags: store.getters.blogTags
    }
  }
  head() {
    this.blogSeo()
  }
}
</script>
